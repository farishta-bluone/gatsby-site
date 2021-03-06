<template>
    <v-container fluid>
        <v-row justify="space-between" class="mt-3">
            <v-col cols="8" sm="6" lg="4" md="5">
                <h2 class=" font-weight-bold">HR Slitting Planning Preview</h2>
            </v-col>
            <v-col>
                <v-row justify="end">
                    <v-col cols="auto">
                        <v-menu
                            ref="menu"
                            v-model="menu"
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
                                    v-model="$store.state.previewDate"
                                    placeholder="Select Date"
                                    readonly
                                    v-bind="attrs"
                                    v-on="on"
                                    clearable
                                    @click:clear="clearSearch('date')"
                                    class="body-2"
                                    @click="setOptions"
                                ></v-text-field>
                            </template>
                            <v-date-picker
                                v-model="$store.state.previewDate"
                                no-title
                                scrollable
                                @input="menu = false"
                                @change="setOptions"
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
                        v-model.number="$store.state.previewShift"
                        :items="$store.state.shifts"
                        label="Select Shift"
                        item-text="name"
                        item-value="id"
                        color="grey"
                        @input="setOptions"
                        clearable
                        @click:clear="clearSearch('shift')"
                        class="select-box"
                        ></v-select>
                    </v-col>
                    <v-col
                        class="d-flex"
                        cols="auto"
                    >
                        <v-select
                        outlined
                        dense
                        v-model="selStatus"
                        :items="statusList"
                        label="Select Coil Status"
                        item-text="name"
                        item-value="name"
                        color="grey"
                        @input="setOptions"
                        clearable
                        @click:clear="clearSearch('status')"
                        class="select-box"
                        ></v-select>
                    </v-col>
                    <v-col cols="auto" v-if="selMultiRows.length > 0">
                        <v-btn dark @click="downloadPdf">Download PDF</v-btn>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
        <v-data-table
            v-model="selMultiRows"
            :headers="headers"
            :items="orderedData"
            class="elevation-1 coils slittedCoils"
            :loading="$store.state.isLoading"
            :footer-props="{
            'items-per-page-options': [5, 10, 25, 50, 100]
            }"
            fixed-header
            height="calc(100vh - 190px)"
            :options.sync="options"
            disable-pagination
            id="pdf"
            :single-select="singleSelect"
            show-select
            hide-default-footer
        >
            <template v-slot:[`item.slit_date`]="{item}">
                <div class="caption"> 
                    <span>{{ item.slit_date ? $options.filters.formatDate(item.slit_date) : '---'}}</span>
                </div>
            </template>

            <template v-slot:[`item.parent_size`]="{item}">
                <div class="caption"> 
                    <p class="mb-0">Width: {{item.width}} mm</p>
                    <p class="mb-0">Weight: {{item.weight}} kg</p>
                    <p class="mb-0">Thickness: {{item.thickness}} mm</p>
                </div>
            </template>

            <template v-slot:[`item.slits`]="{item}">
                <v-row class="caption" v-for="slit in item.slits" :key="slit.id">
                    <!-- <v-col cols="4" class="py-0"> Slit No: {{slit.id}} </v-col> -->
                    <v-col v-if="slit.slit_no" cols="auto">{{slit.slit_no}}</v-col>
                    <v-col>
                        <v-row>
                            <v-col cols="6" class="pb-0">
                        <span>Width: {{slit.slitted_width}} mm</span>
                        <!-- <span v-if="slit.actual_width">Actual Width: {{slit.actual_width}} mm</span> -->
                    </v-col>
                    <v-col cols="6" class="pb-0">
                        <span>Weight: {{slit.slitted_weight}} kg</span>
                        <!-- <span v-if="slit.actual_weight">Actual Weight: {{slit.actual_weight}} kg</span> -->
                    </v-col>
                    
                    <v-col cols="6" class="py-0">
                        <!-- <span>Width: {{slit.slitted_width}} mm</span> -->
                        <span v-if="slit.actual_width">Actual Width: {{slit.actual_width}} mm</span>
                    </v-col>
                    <v-col cols="6" class="py-0">
                        <!-- <span>Weight: {{slit.slitted_weight}} kg</span> -->
                        <span v-if="slit.actual_weight">Actual Weight: {{slit.actual_weight}} kg</span>
                    </v-col>
                    
                        </v-row>
                    </v-col>
                    <v-col cols="12"><v-divider></v-divider></v-col>
                </v-row>
                
            </template>

            <!-- <template v-slot:[`item.slits_size`]="{item}">
                <v-row class="body-2" v-for="slit in item.slits" :key="slit.id">
                    <v-col cols="6" class="py-0">
                        <span>Width: {{slit.slitted_width}} mm</span>
                    </v-col>
                    <v-col cols="6" class="py-0">
                        <span>Weight: {{slit.slitted_weight}} kg</span>
                    </v-col>
                </v-row>
            </template> -->

            <template v-slot:[`item.slit_shift`]="{item}">
                <div class="caption"> 
                    {{item.slit_shift ? getShiftName(item.slit_shift) : '24 Hour Shift'}}
                </div>
            </template>

            <template v-slot:[`item.status`]="{item}">
                <div class="caption"> 
                    <span :class="getTextColor(item.status)" class="text-capitalize">{{ item.status }}</span>
                </div>
            </template>

            <template v-slot:[`item.actions`]="{item}">
                <v-row align="center">
                    <v-col v-if="checkRole('admin') && item.status === 'in-queue'" @click="openDrawer(item)" cols="12" class="pb-0"><v-btn small outlined class="caption">Edit Planning</v-btn></v-col>
                    <v-col v-if="checkRole('admin') && item.status === 'in-queue'" @click="resetCoil(item)" cols="12"><v-btn small outlined class="caption">Reset to Available</v-btn></v-col>
                    <v-col v-if="checkRole('member') && item.status === 'in-queue'" @click="openDrawer(item)" cols="12"><v-btn small outlined class="caption">View & Process</v-btn></v-col>
                    <v-col v-if="checkRole('admin') && item.status === 'require approval'" @click="openDrawer(item)" cols="12"><v-btn small outlined class="caption">Mark Complete</v-btn></v-col>
                </v-row>
        </template>
            
        </v-data-table>

        <div id="checkMe" class="d-none"> 
            <h2 class="my-3">HR Coil Slitted Stock</h2>
            <table class="table table-bordered" >
                <thead>
                    <tr>
                        <th scope="col">Parent Coil ID</th>
                        <th scope="col">Parent Coil Size</th>
                        <th scope="col">Slits</th>
                        <th scope="col">Status</th>
                        <!-- <th scope="col">Slits Size</th> -->
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in selMultiRows" :key="item.name">
                        <td>{{item.brand_no}}</td>
                        <td>
                            <div>
                                <p class="mb-0">Width: {{item.width}} mm</p>
                                <p class="mb-0">Weight: {{item.weight}} kg</p>
                                <p class="mb-0">Thickness: {{item.thickness}} mm</p>
                            </div> 
                        </td>
                        
                        <td>
                            <div v-for="slit in item.slits" :key="slit.id">
                                <div class="row">
                                    <div class="col">
                                    Coil No: {{slit.slit_no}}
                                    </div>
                                    <div class="col">
                                    Width: {{slit.slitted_width}} mm
                                    </div>
                                    <div class="col">
                                    Weight: {{slit.slitted_weight}} kg
                                    </div>
                                    <!-- <div class="col" v-if="slit.actual_width">
                                    Actual Width: {{slit.actual_width}} mm
                                    </div>
                                    <div class="col" v-if="slit.actual_weight">
                                    Actual Weight: {{slit.actual_weight}} kg
                                    </div> -->
                                </div>
                            </div>
                        </td>
                        <td>
                            <div>
                                <span :class="getTextColor(item.status)" class="text-capitalize">{{ item.status }}</span>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <SlitCoil v-if="$store.state.slitDrawer"/>
    </v-container>
</template>




<script>
   import SlitCoil from '@/components/drawers/SlitCoil';
   import coils from '@/services/coils';
    export default {
        components: {
            SlitCoil
        },
        data () {
            return {
                statusList: [{id:1, name: 'In-Queue' },{id:2, name: 'Require Approval' }],
                selStatus: null,
                selMultiRows: [],
                singleSelect: false,
                actionsList: [{icon:'mdi-pencil', text: 'edit'}, {icon:'mdi-delete', text: 'delete'}],
                options: {},
                sortBy: '',
                orderBy: 'desc',
                selCompany: null,
                menu: false,
                maxDate: new Date().toISOString(),
                headline: '',
                headers: [
                {
                    text: 'Parent Coil ID',
                    width:"15%",
                    align: 'start',
                    value: 'brand_no',
                },
                {
                    text: 'Parent Coil Size',
                    width:"15%",
                    align: 'start',
                    value: 'parent_size',
                },
                { text: 'Slits', value: 'slits', width:"35%", sortable: false, },
                { text: 'Slit Date', value: 'slit_date', width:"10%", sortable: false, },
                { text: 'Shift', value: 'slit_shift', width:"7%", sortable: false, },
                { text: 'Status', value: 'status', width:"8%", },
                { text: 'Actions', value: 'actions', sortable: false, align: 'end',width:"10%",}
                ],
       
            }
        },
        mounted() {
            let access = JSON.parse(localStorage.getItem('user')).access
            if(access && access.slits_preview) {
                this.$store.dispatch('getShifts');
            }
            else this.$router.push({name: 'forbidden'})
        },
        computed: {
            orderedData() {
                if(this.$store.state.slittedCoils.length > 0) {
                    let slits = []
                    for(let i=0; i<this.$store.state.slittedCoils.length; i++) {
                        let coil = this.$store.state.slittedCoils[i]
                        
                        let existItem = slits.find(item => item.id == coil.parent_id)
                        if(!existItem) { //parent coil doesn't exist 
                            let parentCoil = {
                                id: coil.parent_id,
                                status: coil.status,
                                thickness: coil.thickness,
                                width: coil.width,
                                weight: coil.weight,
                                slit_shift: coil.slit_shift,
                                slit_date: coil.slit_date,
                                formulated_weigth: coil.formulated_weigth,
                                company: coil.company,
                                brand_no: coil.brand_no,
                                slits: [
                                    {id: coil.ID, slitted_weight: coil.slitted_weight, slitted_width: coil.slitted_width,actual_weight: coil.actual_weight, actual_width: coil.actual_width, slit_no: coil.slit_no}
                                ]
                            }
                            slits.push(parentCoil)
                        }
                        else {
                            existItem.slits.push({id: coil.ID, slitted_weight: coil.slitted_weight, slitted_width: coil.slitted_width,actual_weight: coil.actual_weight, actual_width: coil.actual_width, slit_no: coil.slit_no}) 
                        }
                        
                        
                    }
                return slits
                }
                else return []
            }
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
            getShiftName(shift) {
                if(shift === 1) return 'Day Shift'
                else if(shift === 2) return 'Night Shift'
                else return '24 Hour Shift'
            },
            checkRole(role_name) {
                let user = JSON.parse(localStorage.getItem('user'))
                if(user && user.role == role_name) return true
                else return false 
            },
            async resetCoil(item) {
                console.log(item)
                let data = {status: 'available', ids: '', updated_at: this.$options.filters.calendarDate(new Date().toISOString())}
                // let ids = null
                item.slits.map(val => {
                    if(data.ids)
                        data.ids = `${data.ids},${val.id}`  
                    else data.ids = val.id
                })
                console.log("Data",)
                try {
                const result = await coils.deleteSlits(item.id, data);
                // this.$store.dispatch('getSlittedCoils', {status: 'in-queue'});
                // this.$store.dispatch('getCoils', {page: 1});
                // this.rows = result.data.rows;
                console.log("result", result);
                } catch (error) {
                console.log("error",error)
                }
                finally {
                    this.searchData();
                }
            },
            openDrawer(item) {
                console.log("item", item)
                this.$store.state.coilId = item.id
                this.$store.state.slitDrawer = true
            },
            downloadPdf() {
                this.$htmlToPaper('checkMe');
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
               if(type === 'date') this.$store.state.previewDate = null
               else if(type === 'status') this.selStatus = null
               else if(type === 'company') this.selCompany = null
               else if(type === 'shift') this.$store.state.previewShift = null
               this.setOptions() 
            },
            searchData() {
                let payload = { status: 'in-queue,require approval'}
                const { page, itemsPerPage } = this.options
                payload.sortBy =  this.sortBy
                payload.orderBy =  this.orderBy
                payload.page = page
                payload.limit =  itemsPerPage
                if(this.selStatus) payload.status = this.selStatus
                if(this.$store.state.previewShift) payload.slit_shift = this.$store.state.previewShift
                if(this.$store.state.previewDate) payload.slit_date = this.$store.state.previewDate
                this.$store.dispatch('getSlittedCoils', payload);
            },
            // async deleteCoil(id){
            //     try {
            //     const result = await coils.delete(id);
            //     this.$store.dispatch('getSlittedCoils', {page: 1});
            //     // this.rows = result.data.rows;
            //     console.log("result", result);
            //     } catch (error) {
            //     console.log("error",error)
            //     }
            // },
            // async editCoil(item){
            //     try {
            //     const result = await coils.update(item.id, item);
            //     this.$store.dispatch('getSlittedCoils', {page: 1});
            //     // this.rows = result.data.rows;
            //     console.log("result", result);
            //     } catch (error) {
            //     console.log("error",error)
            //     }
            // }
        }
    }
</script>




<style>
.v-data-table.slittedCoils>.v-data-table__wrapper>table>thead>tr>th {
  font-size: 14px !important;
  color: black !important;
}
.v-data-table.coils>.v-data-table__wrapper>table>tbody>tr>td {
  padding: 10px 15px ;
}
.v-data-table.slittedCoils>.v-data-table__wrapper>table>tbody>tr>td {
  font-size: 12px !important;
}
/* .v-data-table.coils>.v-data-table__wrapper>table>tbody>th {
  padding: 10px 10px ;
} */
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
    @media screen and (max-width: 700px) {
   .theme--light.v-data-table thead tr:last-child th, 
   .theme--light.v-data-table tbody tr:not(:last-child) td:last-child,
   .theme--light.v-data-table tbody tr td,
   .theme--light.v-data-table tbody tr:not(:last-child) td:not(.v-data-table__mobile-row) {
      border-bottom: medium solid rgba(0,0,0,.12);
   }
}
    
</style>
<style scoped>
.check {
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        color: pink;
    }
    @media screen and (max-width: 700px) {
   .theme--light.v-data-table thead tr:last-child th, 
   .theme--light.v-data-table tbody tr:not(:last-child) td:last-child,
   .theme--light.v-data-table tbody tr td,
   .theme--light.v-data-table tbody tr:not(:last-child) td:not(.v-data-table__mobile-row) {
      border-bottom: medium solid rgba(0,0,0,.12);
   }
}
</style>