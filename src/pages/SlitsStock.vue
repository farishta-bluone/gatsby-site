<template>
    <v-container fluid>
        
        <v-row justify="space-between" class="my-3"> 
            <v-col cols="auto">
                <h2 class=" font-weight-bold">HR Coil Slitted Stock</h2>
            </v-col>
            
            <v-col cols="auto" class="pb-0">
                <v-row justify="end">
                   <v-col
                        class="d-flex"
                        cols="auto"
                    >
                        <v-select
                            outlined
                            dense
                            v-model.number="selThickness"
                            :items="$store.state.thicknessList"
                            label="Select Thickness"
                            item-text="value"
                            item-value="value"
                            color="grey"
                            @input="setOptions"
                            clearable
                            @click:clear="clearSearch('thickness')"
                            class="select-box"
                        ></v-select>
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
                                    class="body-1"
                                ></v-text-field>
                            </template>
                            <v-date-picker
                                v-model="addedFrom"
                                no-title
                                scrollable
                                @input="addedFromMenu = false"
                                @change="setOptions"
                                >
                            </v-date-picker>
                        </v-menu>
                    </v-col>
                    <v-col cols="auto" class="text-right">
                        <v-btn dark   class="py-5 mr-1 body-2 font-weight-bold" @click="$router.push({path: '/compare-slits'})">Compare Slits</v-btn>
                    </v-col>
                
                    <!-- <v-col cols="auto" class="text-right">
                <v-btn dark   class=" mr-1 body-2 font-weight-bold" @click="openForm">Add Coil</v-btn>
            </v-col> -->
                </v-row>
            </v-col>
            <v-col class="red--text caption py-0" color="red" cols="12" v-if="preventSlitting">You can create slits for available coils only.</v-col>
            
        </v-row>
        <v-data-table
            
            :headers="headers"
            :items="$store.state.slittedCoils"
            
            class="elevation-1 coils"
            :loading="$store.state.isLoading"
            disable-pagination
            fixed-header
            height="calc(100vh - 190px)"
            
            hide-default-footer
            
        >
            <template v-slot:[`item.company`]="{item}">
                <div class="body-2"> 
                    <span>{{showCompany(item.company)}}</span>
                </div>
            </template>
            <template v-slot:[`item.slit_date`]="{item}">
                <div class="body-2"> 
                    <span>{{ item.date ? $options.filters.formatDate(item.slit_date) : '---'}}</span>
                </div>
            </template>
            <template v-slot:[`item.status`]="{item}">
                <div class="body-2"> 
                    <span :class="getTextColor(item.status)" class="text-capitalize">{{ item.status }}</span>
                </div>
            </template>
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
                v-for="(val) in item.actions"
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
    </v-container>
</template>

<script>
    import coils from '@/services/coils';
    export default {
        components: {
            
        },
        data () {
            return {
                selShift: '',
                selThickness: '',
                selMultiRows: [],
                singleSelect: false,
                actionsList: [{icon:'mdi-plus-circle', text: 'create slit'}, {icon:'mdi-pencil', text: 'edit'}, {icon:'mdi-delete', text: 'delete'}, {icon:'mdi-view-grid', text: 'preview planning'},],
                options: {},
                sortBy: '',
                orderBy: 'desc',
                selCompany: null,
                selStatus: null,
                addedFromMenu: false,
                addedFrom: null,
                maxDate: new Date().toISOString(),
                headline: '',
                statusList: [{id:1, name: 'Available' },{id:2, name: 'In-Queue' }, {id:3, name: 'Slitted' } ],
                headers: [
                {
                    text: 'Coil No',
                    align: 'start',
                    value: 'slit_no',
                    sortable: false,
                },
                { text: 'Parent Coil ID', value: 'brand_no', sortable: false, },
                
                // { text: 'Status', value: 'status', sortable: false, },
                // { text: 'OD (mm)', value: 'od' },
                { text: 'Thickness (mm)', value: 'thickness', sortable: false, },
                { text: 'Weight (kg)', value: 'actual_weight', sortable: false, },
                
                // { text: 'Formulated wt (kg)', value: 'formulated_weight' },
                { text: 'Width (mm)', value: 'actual_width', sortable: false, },
                { text: 'Slitting Date', value: 'slit_date', sortable: false, },]
                // { text: 'Actions', value: 'actions', sortable: false, }],
       
            }
        },
        mounted() {
            let access = JSON.parse(localStorage.getItem('user')).access
            if(access && access.slits_stock) {
                this.$store.dispatch('getSlittedCoils', {status: "slitted"});
                this.$store.dispatch('getThicknesses');
            }
            else this.$router.push({name: 'forbidden'}) 
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
        computed: {
            preventSlitting() {
                
                let index = this.selMultiRows.findIndex(item => item.status.toLowerCase() != "available") 
                if(index >=0) return true 
                else return false
            },
            coilRows() {
                return this.$store.state.coils.filter(item => {
                let actions = []
                if(item.status === 'available') 
                    actions = [{icon:'mdi-plus-circle', text: 'create slit'}, {icon:'mdi-pencil', text: 'edit'}, {icon:'mdi-delete', text: 'delete'}]
                else if (item.status === 'slitted') actions = [{icon:'mdi-view-grid', text: 'preview planning'}]
                else actions = [{icon:'mdi-view-grid', text: 'preview planning'}, {icon:'mdi-pencil', text: 'edit planning'},]
                return item.actions = actions
                })
            }
        },
        methods: {
            showCompany(id) {
                if(this.$store.state.companies.length > 0) 
                    return (this.$store.state.companies.find(val => val.id == id)).name
                else return ''
            },
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
                    this.$store.state.coilId = item.id
                    this.$store.state.selRows = [item]
                    this.$router.push({path: "/slit-planning"});
                }
                if(text === "preview planning") {
                    this.$store.state.coilId = item.id
                    this.$store.state.slitDrawer = true
                    console.log("preview")
                }
                if(text === "edit planning") {
                    this.$store.state.coilId = item.id
                    this.$router.push({path: `/slit-planning/${item.id}`});
                }
            },
            openSlitForm() {
                this.$store.state.selRows = this.selMultiRows;
                this.$router.push({path:'/slit-planning'})
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
            case 'available': 
              color = 'green--text text--darken-2'
              break
            case 'edit-required': 
              color = 'red--text text--lighten-1'
              break 
            default :
              color = 'yellow--text text--darken-4'
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
               else if(type === 'thickness') this.selThickness = null
               else if(type === 'shift') this.selShift = null
               this.setOptions() 
            },
            searchData() {
                let payload = { status: "slitted"}
                // const { page, itemsPerPage } = this.options
                // payload.sortBy =  this.sortBy
                // payload.orderBy =  this.orderBy
                // payload.page = page
                // payload.limit =  itemsPerPage
                
                if(this.addedFrom) payload.slit_date = this.addedFrom
                if(this.selThickness) payload.thickness = this.selThickness
                // if(this.selShift) payload.slit_shift = this.selShift
                this.$store.dispatch('getSlittedCoils', payload);
            },
            async deleteCoil(id){
                try {
                const result = await coils.delete(id);
                this.$store.dispatch('getCoils', {page: 1});
                // this.rows = result.data.rows;
                console.log("result", result);
                } catch (error) {
                console.log("error",error)
                }
            },
            async editCoil(item){
                try {
                const result = await coils.update(item.id, item);
                this.$store.dispatch('getCoils', {page: 1});
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
.v-data-table.coils>.v-data-table__wrapper>table>tbody>tr>td {
  /* padding: 10px 10px ; */
}
.customize-list .v-list-item {
  min-height: 33px !important;
}
.search-list {
        color: grey !important; 
        padding-top: 18px !important; 
        padding-bottom: 20px !important;
    }
    .select-box.v-text-field.v-text-field--enclosed{
        max-width: 200px;
    }
</style>