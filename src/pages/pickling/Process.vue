<template>
    <v-container fluid>
        
        <v-row justify="space-between" class="my-3"> 
            <v-col cols="auto">
                <h2 class=" font-weight-bold">Pickling Process</h2>
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
                </v-row>
            </v-col>
            <!-- <v-col class="red--text caption py-0" color="red" cols="12" v-if="preventSlitting">You can create slits for available coils only.</v-col> -->
            
        </v-row>
        <v-data-table 
            v-model="$store.state.selRows"
            :headers="headers"
            :items="$store.state.slittedCoils"
            item-key="ID"
            class="elevation-1 coils"
            :loading="$store.state.isLoading"
            disable-pagination
            fixed-header
            height="calc(100vh - 190px)"
            hide-default-footer
        >
            <template v-slot:[`item.pickling_date`]="{item}">
                <div class="body-2"> 
                    <span>{{ item.pickling_date ? $options.filters.formatDate(item.pickling_date) : '---'}}</span>
                </div>
            </template>
            <template v-slot:[`item.status`]="{item}">
                <div class="body-2"> 
                    <span :class="getTextColor(item.status)" class="text-capitalize">{{ item.status }}</span>
                </div>
            </template>
            <template v-slot:[`item.pickling_shift`]="{item}">
                <div class="body-2"> 
                    <span class="text-capitalize">{{ getShiftName(item.pickling_shift) }}</span>
                </div>
            </template>
            <template v-slot:[`item.actions`]="{item}">
                <v-row align="center">
                    <v-col v-if="item.status === 'in-process for pickling'" @click="editPlanning(item)" cols="12" :class="checkRole('member')? 'pb-0' : ''"><v-btn small outlined class="caption">Edit Pickling Planning</v-btn></v-col>
                    <v-col v-if="checkRole('member') && item.status === 'in-process for pickling'" @click="processCoil(item)" cols="12"><v-btn small outlined class="caption">View & Process</v-btn></v-col>
                    <v-col v-if="checkRole('admin') && item.status === 'approve for pickling'" @click="processCoil(item)" cols="12"><v-btn small outlined class="caption">Mark Complete</v-btn></v-col>
                    <!-- <v-col v-if="item.status === 'approve for pickling'" @click="resetCoil(item)" cols="12"><v-btn small outlined class="caption">Mark Complete</v-btn></v-col> -->
                </v-row>
        </template>
         
            
        </v-data-table>
        <v-row>
            <PicklingPlanning v-if="$store.state.picklingDialog"/>
            <PicklingPreview v-if="$store.state.picklingDrawer"/>
        </v-row>
    </v-container>
</template>

<script>
    import coils from '@/services/coils';
    import PicklingPlanning from '@/components/PicklingPlanning';
    import PicklingPreview from '@/components/drawers/PicklingPreview';
    export default {
        components: {
            PicklingPlanning,
            PicklingPreview
        },
        data () {
            return {
                selDate: null,
                dateMenu: false,
                data: [],
                editedIndex: -1,
                dialog: false,
                selShift: '',
                selThickness: '',
                selRows: [],
                singleSelect: false,
                actionsList: [{icon:'mdi-plus-circle', text: 'create planning'}, {icon:'mdi-pencil', text: 'edit planning'}, {icon:'mdi-view-grid', text: 'preview planning'},],
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
                    width:"10%"
                },
                // { text: 'Parent Coil ID', value: 'brand_no', sortable: false, },
                
                
                // { text: 'OD (mm)', value: 'od' },
                { text: 'Thickness (mm)', value: 'thickness', sortable: false, width:"15%"},
                { text: 'Weight (kg)', value: 'actual_weight', sortable: false, width:"10%" },
                
                
                { text: 'Width (mm)', value: 'actual_width', sortable: false, width:"10%" },
                { text: 'Pickling Date', value: 'pickling_date', sortable: false,width:"15%" },
                { text: 'Pickling Shift', value: 'pickling_shift', width:"15%" },
                { text: 'Status', value: 'status', sortable: false, width:"10%"},
                { text: 'Actions', value: 'actions', sortable: false,align: 'end', width:"15%" }],
       
            }
        },
        mounted() {
            // let access = JSON.parse(localStorage.getItem('user')).access
            this.$store.state.selRows = []
            this.$store.dispatch('getShifts')
            this.$store.dispatch('getThicknesses')
            this.$store.dispatch('getSlittedCoils', {status: 'in-process for pickling,approve for pickling'});
            
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
        coilRows() {
                return this.$store.state.slittedCoils.filter(item => {
                let actions = []
                if(item.status === 'slitted') 
                    actions = [{icon:'mdi-plus-circle', text: 'create planning'}]
                else if (item.status === 'in-process for pickilng') actions = [{icon:'mdi-pencil', text: 'edit'}, {icon:'mdi-view-grid', text: 'preview planning'}]
                else if (item.status === 'approve for pickling') {
                    actions = [{icon:'mdi-pencil', text: 'edit'}]
                }
                
                else actions = [{icon:'mdi-view-grid', text: 'preview planning'}, {icon:'mdi-pencil', text: 'edit planning'},] //pickled
                return item.actions = actions
                })
            },
            formTitle () {
                return this.editedIndex <= 0 ? 'Create Planning' : 'Edit Planning'
            },
            preventSlitting() {
                
                let index = this.selRows.findIndex(item => item.status.toLowerCase() != "available") 
                if(index >=0) return true 
                else return false
            }
        },
        methods: {
            processCoil(item) {
                this.$store.state.slitId = item.ID
                console.log("item", item)
                this.$store.state.picklingDrawer = true
            },
            checkRole(role_name) {
                let user = JSON.parse(localStorage.getItem('user'))
                if(user && user.role == role_name) return true
                else return false 
            },
            getShiftName(shift) {
                if(shift === 1) return 'Day Shift'
                else if(shift === 2) return 'Night Shift'
                else return '24 Hour Shift'
            },
            editPlanning(item) {
                let date = this.$options.filters.calendarDate(item.pickling_date).split(" ");
                // state.slittedDate = date[0];
                item.pickling_date = date[0]
                item.dateMenu = false
                this.$store.state.selSlits = [item];
                this.$store.state.picklingDialog = true
                
                
            },
            openDialog(){
                this.$store.state.selRows.map(item => {
                    item.dateMenu = false
                })
                this.$store.state.picklingDialog = true
                // this.$store.state.selRows = this.selRows;
            },
            showCompany(id) {
                if(this.$store.state.companies.length > 0) 
                    return (this.$store.state.companies.find(val => val.id == id)).name
                else return ''
            },
            actions(text, item) {
                console.log("text, item", text, item)
                if(text === "create planning") {
                    this.dialog = true
                    this.data = [item]
                    this.$store.state.coilId = item.id
                    // this.$store.state.selRows = [item]
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
                // this.$store.state.selRows = this.selMultiRows;
                this.$router.push({path:'/slit-planning'})
            },
            setOptions() {
                
                this.searchData()
               
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
                let payload = { status: "in-process for pickling,approve for pickling"}
                // const { page, itemsPerPage } = this.options
                // payload.sortBy =  this.sortBy
                // payload.orderBy =  this.orderBy
                // payload.page = page
                // payload.limit =  itemsPerPage
                
                if(this.addedFrom) payload.pickling_date = this.addedFrom
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
  padding: 10px 15px ;
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