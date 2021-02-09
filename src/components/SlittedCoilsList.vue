<template>
    <v-container fluid>
        <h2 class="my-3 font-weight-bold">Slitted Coils</h2>
        <v-row justify="space-between"> 
            <v-col cols="auto">
                <v-row>
                    <v-col cols="auto" v-if="selMultiRows.length > 0">
                        <v-btn dark class="pt-4 pb-4" color="grey" @click="openSlitForm">Create Slits</v-btn>
                    </v-col>
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
                                    @click:clear="clearSearch('date')"
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
                    <v-col
                        class="d-flex"
                        cols="auto"
                    >
                        <v-select
                        outlined
                        dense
                        v-model="selCompany"
                        :items="$store.state.companies"
                        label="Select Company"
                        item-text="name"
                        item-value="name"
                        color="grey"
                        @input="setOptions"
                        clearable
                        @click:clear="clearSearch('company')"
                        ></v-select>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
        <v-data-table
            v-model="selMultiRows"
            :headers="headers"
            :items="$store.state.slittedCoils"
            :items-per-page="10"
            class="elevation-1 coils"
            :loading="$store.state.isLoading"
            :footer-props="{
            'items-per-page-options': [5, 10, 25, 50, 100]
            }"
            fixed-header
            height="calc(100vh - 270px)"
            :options.sync="options"
            server-items-length="2"
        >
            <template v-slot:[`item.date`]="{item}">
                <div class="body-2"> 
                    <span>{{ item.date ? $options.filters.formatDate(item.date) : '---'}}</span>
                </div>
            </template>
            <!-- <template v-slot:[`item.status`]="{item}">
                <div class="body-2"> 
                    <span :class="getTextColor(item.status)" class="text-capitalize">{{ item.status}}</span>
                </div>
            </template> -->
            <!-- <template v-slot:[`item.actions`]="{item}">
                <div class="body-2"> 
                    <v-btn @click="openSlitForm" outlined small class="" >{{item.status === 'avilable' ? 'Create Slit': 'Preview Planning'}}</v-btn>
                </div>
            </template> -->

            <template v-slot:[`item.actions`]="{item}">
          <v-menu>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                icon
                v-bind="attrs"
                v-on="on"
                
              >
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>

            <v-list dense>
              <v-list-item
                v-for="(val) in actionsList"
                :key="val.text"
                @click="actions(val.text, item)"
              >
                <v-list-item-icon class="mr-0">
                  <v-icon
                    class="mt-1"
                    small
                    v-text="val.icon"
                  />
                </v-list-item-icon>
                <v-list-item-title class="body-2 text-capitalize mt-1">
                  {{ val.text }}
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </template>
            
        </v-data-table>
        <AddCoil v-if="$store.state.coilDrawer"/>
        <SlitCoil/>
    </v-container>
</template>

<script>
    import coil from '@/services/coil';
    import AddCoil from '@/components/drawers/AddCoil';
    import SlitCoil from '@/components/drawers/SlitCoil';
    export default {
        components: {
            AddCoil,
            SlitCoil
        },
        data () {
            return {
                selMultiRows: [],
                singleSelect: false,
                actionsList: [{icon:'mdi-plus-circle', text: 'create slit'}, {icon:'mdi-pencil', text: 'edit'}, {icon:'mdi-delete', text: 'delete'}],
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
                    value: 'ID',
                },
                {
                    text: 'Parent Coil No',
                    align: 'start',
                    value: 'parent_id',
                },
                { text: 'Company', value: 'company', sortable: false, },
                { text: 'Brand No', value: 'brand_no', sortable: false, },
                { text: 'Date of Receiving', value: 'date' },
                { text: 'Od', value: 'od', sortable: false, },
                { text: 'Thickness (mm)', value: 'thickness' },
                { text: 'Weight (kg)', value: 'slitted_weight' },
                { text: 'Width (mm)', value: 'slitted_width' },
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
            actions(text, item) {
                if(text === "delete") 
                    this.deleteCoil(item.id);
                if(text === "edit") {
                    this.$store.state.coilId = item.id
                    this.$store.state.coilData = item
                    this.$store.state.coilDrawer = true
                    // this.editCoil(item);
                } else {
                    this.$store.state.coilId = null
                    this.$store.state.coilData = {}
                }
                if(text === "create slit") {
                    this.$store.state.selRows = [item]
                    this.$router.push({path: "/slit_planning"});
                    console.log("this.$store.state.selRows", this.$store.state.selRows)
                }
                    
                    // this.editCoil(item);
                console.log(text, item)
            },
            openSlitForm() {
                this.$store.state.selRows = this.selMultiRows;
                this.$router.push({path:'/slit_planning'})
            },
            setOptions() {
                console.log("Calleddddddd")
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
        openForm() {
            console.log(this.$store.state)
            this.$store.state.coilId = null
            this.$store.state.coilDrawer = true
        },
          
            clearSearch(type) {
               if(type === 'date') this.addedFrom = null
               else if(type === 'status') this.selStatus = null
               else if(type === 'company') this.selCompany = null
               this.setOptions() 
            },
            searchData() {
                let payload = {}
                const { page, itemsPerPage } = this.options
                payload.sortBy =  this.sortBy
                payload.orderBy =  this.orderBy
                payload.page = page
                payload.limit =  itemsPerPage
                if(this.selCompany) payload.company = this.selCompany
                // if(this.selStatus) payload.status = this.selStatus.toLowerCase()
                if(this.addedFrom) payload.date = this.addedFrom
                this.$store.dispatch('getSlittedCoils', payload);
            },
            async deleteCoil(id){
                try {
                const result = await coil.delete(id);
                this.$store.dispatch('getSlittedCoils', {page: 1});
                // this.rows = result.data.rows;
                console.log("result", result);
                } catch (error) {
                console.log("error",error)
                }
            },
            async editCoil(item){
                try {
                const result = await coil.update(item.id, item);
                this.$store.dispatch('getSlittedCoils', {page: 1});
                // this.rows = result.data.rows;
                console.log("result", result);
                } catch (error) {
                console.log("error",error)
                }
            }
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