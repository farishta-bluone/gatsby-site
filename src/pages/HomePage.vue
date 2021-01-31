<template>
    <v-container fluid>
        <h2 class="my-3 font-weight-bold">Coils</h2>
        <v-row justify="space-between"> 
            <v-col cols="auto">
                <v-row>
                    <v-col cols="auto">
                        <v-menu
                            ref="menu"
                            v-model="addedFromMenu"
                            :close-on-content-click="false"
                            transition="scale-transition"
                            offset-y
                            min-width="290px"
                        >
                            <template v-slot:activator="{ on, attrs }">
                                <v-text-field
                                    dense
                                    outlined
                                    color="grey"
                                    v-model="addedFrom"
                                    placeholder="Select Date"
                                    readonly
                                    v-bind="attrs"
                                    v-on="on"
                                    clearable
                                    @click:clear="clearSearch()"
                                    class="body-2"
                                ></v-text-field>
                            </template>
                            <v-date-picker
                                v-model="addedFrom"
                                no-title
                                scrollable
                                @input="addedFromMenu = false"
                                @change="setOptions"
                                :max="maxDate"
                                >
                            </v-date-picker>
                        </v-menu>
                    </v-col>
                    
                    <v-col cols="auto" class="text-center">
                        <v-menu 
                            offset-y
                            :close-on-content-click="false"
                            close-on-click
                            class="customize-list"
                        >
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                    medium
                                    outlined
                                    v-bind="attrs"
                                    class="body-2 text-capitalize search-list"
                                    v-on="on"
                                >
                                    Select Coil Status
                                </v-btn>
                            </template>
                            <v-list class="customize-list">
                                <v-list-item
                                    v-for="(item) in statusList"
                                    :key="item.id"
                                    @click="updateStatus(item)"
                                >
                                    <v-list-item-title class="body-2">
                                    <span class="mr-1">
                                        <v-icon
                                            v-show="checkHeader(item, 'status') === false"
                                            color="grey darken-2"
                                            small
                                            >
                                            mdi-circle-outline
                                        </v-icon>
                                        <v-icon
                                            v-show="checkHeader(item, 'status') === true"
                                            color="green darken-2"
                                            small
                                            >
                                            mdi-check-circle
                                        </v-icon>
                                    </span>
                                    {{ item.name }}
                                    </v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </v-col>

                    <v-col cols="auto" class="text-center">
                        <v-menu 
                            offset-y
                            :close-on-content-click="false"
                            close-on-click
                            class="customize-list"
                        >
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                    medium
                                    outlined
                                    v-bind="attrs"
                                    class="body-2 text-capitalize search-list"
                                    v-on="on"
                                >
                                    Select Company
                                </v-btn>
                            </template>
                            <v-list class="customize-list">
                                <v-list-item
                                    v-for="(item) in $store.state.companies"
                                    :key="item.id"
                                    @click="updateCompany(item)"
                                >
                                    <v-list-item-title class="body-2">
                                    <span class="mr-1">
                                        <v-icon
                                            v-show="checkHeader(item, 'company') == false"
                                            color="grey darken-2"
                                            small
                                            >
                                            mdi-circle-outline
                                        </v-icon>
                                        <v-icon
                                            v-show="checkHeader(item, 'company') == true"
                                            color="green darken-2"
                                            small
                                            >
                                            mdi-check-circle
                                        </v-icon>
                                    </span>
                                    {{ item.name }}
                                    </v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="auto" class="text-right">
                <v-btn dark color="#9932CC" class="mr-1 body-2 font-weight-bold" @click="openForm">Add Coil</v-btn>
            </v-col>
        </v-row>
               
        <v-data-table
            :headers="headers"
            :items="$store.state.coils"
            :items-per-page="10"
            class="elevation-1 coils"
            :loading="$store.state.isLoading"
            :footer-props="{
            'items-per-page-options': [5, 10, 25, 50, 100]
            }"
            fixed-header
            height="calc(100vh - 270px)"
            :options.sync="options"
            :server-items-length="$store.state.totalRows"
        >
            <template v-slot:[`item.date`]="{item}">
                <div class="body-2"> 
                    <span>{{ item.date ? $options.filters.formatDate(item.date) : '---'}}</span>
                </div>
            </template>
            <template v-slot:[`item.status`]="{item}">
                <div class="body-2"> 
                    <span :class="getTextColor(item.status)" class="text-capitalize">{{ item.status}}</span>
                </div>
            </template>
            <template v-slot:[`item.actions`]="{item}">
                <div class="body-2"> 
                    <v-btn outlined small class="" >{{item.status === 'avilable' ? 'Create Slit': 'Preview Planning'}}</v-btn>
                </div>
            </template>
        </v-data-table>
        <AddCoil v-if="$store.state.coilDrawer"/>
    </v-container>
</template>

<script>
    // import list from '@/services/list';
    import AddCoil from '@/components/drawers/AddCoil';
    export default {
        components: {
            AddCoil
        },
        data () {
            return {
                options: {},
                sortBy: '',
                orderBy: 'desc',
                selCompany: null,
                selStatus: null,
                addedFromMenu: false,
                addedFrom: null,
                maxDate: new Date().toISOString(),
                headline: '',
                statusList: [{id:1, name: 'Avilable' },{id:2, name: 'Slitted' } ],
                headers: [
                {
                    text: 'Coil No',
                    align: 'start',
                    value: 'id',
                },
                { text: 'Company', value: 'company', sortable: false, },
                { text: 'Brand No', value: 'brand_no', sortable: false, },
                { text: 'Date of Receiving', value: 'date' },
                { text: 'Status', value: 'status', sortable: false, },
                { text: 'Thickness (mm)', value: 'thickness' },
                { text: 'Weight (kg)', value: 'weight' },
                { text: 'Width (mm)', value: 'width' },
                { text: 'Actions', value: 'actions', sortable: false, }],
       
            }
        },
        mounted() {
            // this.$store.dispatch('getCoils', {});
            // this.getCoils();
        },
        watch: {
            options: {
                handler (newVal) {
                const { sortBy, sortDesc } = newVal
                if (sortBy.length === 1 && sortDesc.length === 1) {
                if(sortDesc[0] == true) this.orderBy = 'desc'
                else this.orderBy = 'asc'
                this.sortBy = sortBy[0]
                }
                this.searchData()
                },
                deep: true,
            },
        },
        methods: {
            setOptions() {
                if(this.options.page === 1) {
                    this.searchData()
                }   
                else this.options.page = 1
            },
            getTextColor(type) {
          let color = ''
          switch(type) {
            case 'slitted': 
              color = 'grey--text text--darken-1'
              break
            case 'avilable': 
              color = 'green--text text--darken-2'
              break
            case 'edit-required': 
              color = 'red--text text--lighten-1'
              break 
            default :
              color = 'yellow--text text--darken-3'
              break
          }
          return color
        },
            updateStatus(item) {
            if(this.checkHeader(item, 'status')) //not exist
                this.selStatus = {}
            else this.selStatus = item
            this.setOptions()
        },
        updateCompany(item) {
            if(this.checkHeader(item, 'company')) //not exist
                this.selCompany = {}
            else this.selCompany = item
            this.setOptions()
        },
        checkHeader(value, type) {
            console.log(value, type)
            if(value) {
                if(type === 'company') return this.selCompany === value
            // else if(type === 'headers') return this.headers.findIndex((item) => item.value === value)
            else return this.selStatus === value
            }
            else return false
            
        },
        openForm() {
            console.log(this.$store.state)
            this.$store.state.coilDrawer = true
        },
          
            clearSearch() {
               this.addedFrom = null
               this.setOptions() 
            },
            searchData() {
                let payload = {}
                const { page, itemsPerPage } = this.options
                payload.sortBy =  this.sortBy
                payload.orderBy =  this.orderBy
                payload.page = page
                payload.limit =  itemsPerPage
                if(this.selCompany && this.selCompany.name) payload.company = this.selCompany.name
                if(this.selStatus && this.selStatus.name) payload.status = this.selStatus.name.toLowerCase()
                if(this.addedFrom) payload.date = this.addedFrom
                this.$store.dispatch('getCoils', payload);
            },
            // async getCoils(){
            //     try {
            //     const result = await list.get()
            //     this.rows = result.data.rows;
            //     console.log("result", result);
            //     } catch (error) {
            //     console.log("error",error)
            //     }
            // }
        }
    }
</script>


<style>
.v-data-table.coils>.v-data-table__wrapper>table>thead>tr>th {
  font-size: 16px !important;
  color: black !important;
}
.customize-list .v-list-item {
  min-height: 33px !important;
}
.search-list {
        color: grey !important; 
        padding-top: 18px !important; 
        padding-bottom: 20px !important;
    }
</style>