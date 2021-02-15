<template>
    <v-container fluid>
        <v-row justify="space-between" class="mt-3">
            <v-col>
                <h2 class=" font-weight-bold">Slits Preview</h2>
            </v-col>
            <v-col>
                <v-row justify="end">
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
                                    @click="setOptions"
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
                        v-model.number="selShift"
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
            :items-per-page="10"
            class="elevation-1 coils"
            :loading="$store.state.isLoading"
            :footer-props="{
            'items-per-page-options': [5, 10, 25, 50, 100]
            }"
            fixed-header
            height="calc(100vh - 250px)"
            :options.sync="options"
            :server-items-length="2"
            id="pdf"
            :single-select="singleSelect"
            show-select
            hide-default-footer
        >
            <template v-slot:[`item.slit_date`]="{item}">
                <div class="body-2"> 
                    <span>{{ item.slit_date ? $options.filters.formatDate(item.slit_date) : '---'}}</span>
                </div>
            </template>

            <template v-slot:[`item.parent_size`]="{item}">
                <div class="body-2"> 
                    <p class="mb-0">Width: {{item.width}} mm</p>
                    <p class="mb-0">Thickness: {{item.thickness}} mm</p>
                    <p class="mb-0">Weight: {{item.weight}} kg</p>
                </div>
            </template>

            <template v-slot:[`item.slits`]="{item}">
                <v-row class="body-2" v-for="slit in item.slits" :key="slit.id">
                    <!-- <v-col cols="4" class="py-0"> Slit No: {{slit.id}} </v-col> -->
                    <v-col cols="6" class="py-0">
                        <span>Width: {{slit.slitted_width}} mm</span>
                    </v-col>
                    <v-col cols="6" class="py-0">
                        <span>Weight: {{slit.slitted_weight}} kg</span>
                    </v-col>
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
                <div class="body-2"> 
                    {{item.slit_shift ? getShiftName : '24 Hour Shift'}}
                </div>
            </template>

            <template v-slot:[`item.actions`]="{item}">
                <v-row align="center">
                    <v-col @click="openDrawer(item)" cols="12" class="pb-0"><v-btn small outlined>Review & Complete</v-btn></v-col>
                    <v-col @click="resetCoil(item)" cols="12"><v-btn small outlined>Reset to Available</v-btn></v-col>
                </v-row>
                
                <!-- <v-menu>
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
                </v-menu> -->
        </template>
            
        </v-data-table>

        <div id="checkMe" class="d-none"> 
            <h2 class="my-3">Slits Stock</h2>
            <table class="table table-bordered" >
                <thead>
                    <tr>
                        <th scope="col">Parent Coil ID</th>
                        <th scope="col">Parent Coil Size</th>
                        <th scope="col">Slits</th>
                        <!-- <th scope="col">Slits Size</th> -->
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in selMultiRows" :key="item.name">
                        <td>{{item.brand_no}}</td>
                        <td>
                        <div> 
                                <p class="mb-0">Width: {{item.width}} mm</p>
                                <p class="mb-0">Thickness: {{item.thickness}} mm</p>
                                <p class="mb-0">Weight: {{item.weight}} kg</p>
                            </div> 
                        </td>
                        <!-- <td>
                            <div v-for="slit in item.slits" :key="slit.id">
                                Slit No: {{slit.id}}
                            </div>
                        </td> -->
                        <td>
                            <div v-for="slit in item.slits" :key="slit.id">
                                <div class="row">
                                    <div class="col">
                                    Slit No: {{slit.slit_no}}
                                    </div>
                                    <div class="col">
                                    Width: {{slit.slitted_width}} mm
                                    </div>
                                    <div class="col">
                                    Weight: {{slit.slitted_weight}} kg
                                    </div>
                                </div>
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
                selShift: '',
                selMultiRows: [],
                singleSelect: false,
                actionsList: [{icon:'mdi-pencil', text: 'edit'}, {icon:'mdi-delete', text: 'delete'}],
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
                    text: 'Parent Coil ID',
                    // width:"10",
                    // align: 'start',
                    value: 'brand_no',
                },
                {
                    text: 'Parent Coil Size',
                    // width:"10",
                    // align: 'start',
                    value: 'parent_size',
                },
                { text: 'Slits', value: 'slits', sortable: false, },
                // { text: 'Slits Size', value: 'slits_size', sortable: false,width:"30", },
                // { text: 'Slit Date', value: 'slit_date' , width:"10",},
                // { text: 'Od', value: 'od', sortable: false, },
                // { text: 'Slit Shift', value: 'slit_shift', width:"10" },
                // { text: 'Weight (kg)', value: 'slitted_weight' },
                // { text: 'Width (mm)', value: 'slitted_width' },
                { text: 'Actions', value: 'actions', sortable: false, }
                ],
       
            }
        },
        mounted() {
            this.$store.dispatch('getShifts');
            // this.getCoils();
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
                                thickness: coil.thickness,
                                width: coil.width,
                                weight: coil.weight,
                                slit_shift: coil.slit_shift,
                                slit_date: coil.slit_date,
                                formulated_weigth: coil.formulated_weigth,
                                company: coil.company,
                                brand_no: coil.brand_no,
                                slits: [
                                    {id: coil.ID, slitted_weight: coil.slitted_weight, slitted_width: coil.slitted_width}
                                ]
                            }
                            slits.push(parentCoil)
                        }
                        else {
                            existItem.slits.push({id: coil.ID, slitted_weight: coil.slitted_weight, slitted_width: coil.slitted_width}) 
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
            async resetCoil(item) {
                console.log(item)
                let data = {status: 'available', slit_ids: ''}
                // let ids = null
                item.slits.map(val => {
                    if(data.slit_ids)
                        data.slit_ids = `${data.slit_ids},${val.id}`  
                    else data.slit_ids = val.id
                })
                console.log("Data",)
                try {
                const result = await coils.deleteSlits(item.id, {ids:data.slit_ids});
                // this.$store.dispatch('getSlittedCoils', {status: 'in-queue'});
                // this.$store.dispatch('getCoils', {page: 1});
                // this.rows = result.data.rows;
                console.log("result", result);
                } catch (error) {
                console.log("error",error)
                }
                finally {
                    this.$store.dispatch('getSlittedCoils', {status: 'in-queue'});
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
                    this.$router.push({path: "/slit-planning"});
                    console.log("this.$store.state.selRows", this.$store.state.selRows)
                }
                    
                    // this.editCoil(item);
                console.log(text, item)
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
               if(type === 'date') this.addedFrom = null
               else if(type === 'status') this.selStatus = null
               else if(type === 'company') this.selCompany = null
               else if(type === 'shift') this.selShift = null
               this.setOptions() 
            },
            searchData() {
                let payload = { status: 'in-queue'}
                const { page, itemsPerPage } = this.options
                payload.sortBy =  this.sortBy
                payload.orderBy =  this.orderBy
                payload.page = page
                payload.limit =  itemsPerPage
                // if(this.selCompany) payload.company = this.selCompany
                if(this.selShift) payload.slit_shift = this.selShift
                if(this.addedFrom) payload.date = this.addedFrom
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
.v-data-table.coils>.v-data-table__wrapper>table>thead>tr>th {
  font-size: 16px !important;
  color: black !important;
}
.v-data-table.coils>.v-data-table__wrapper>table>tbody>tr>td {
  padding: 10px 15px ;
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