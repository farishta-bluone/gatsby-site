<template>
    <v-container fluid class="my-5">
        <v-expansion-panels>
            <v-expansion-panel>
                <v-expansion-panel-header>
                    <template>
                        <v-row class="pb-3">
                            <!-- <v-col cols="12">{{slittedItems}}</v-col> -->
                            <!-- <v-col cols="12">deletedItems{{deletedItems}}</v-col> -->
                            <v-col cols="6" class="my-3"><h3>Coil {{coilData.brand_no}}</h3></v-col>
                            <v-col class="text-right" v-if="savedData.status.toLowerCase() === 'available'">
                                <v-btn class="mr-4" :disabled="haltSave || !validateForm"  :dark="!haltSave && validateForm" @click="savePlanning">Save Planning</v-btn>
                            </v-col>
                        </v-row>
                    </template>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                    <v-row>
                        <v-col cols="4">
                            <h4 class="mb-5">Available Coil</h4>
                            <p class="mb-2">ID: {{coilData.id}}</p>
                            <!-- <p>Brand: {{coilData.brand_no}}</p> -->
                            <p class="mb-2">Company: {{coilData.company}}</p>
                            <p class="mb-2">Weight: {{coilData.weight}} kg</p>
                            <p class="mb-2">Formulated Weight: {{coilData.formulated_weight}} kg</p>
                            <!-- <p class="mb-2">OD: {{coilData.od}} mm</p> -->
                            <p class="mb-2">Width: {{coilData.width}} mm</p>
                            <p class="mb-2">Thickness: {{coilData.thickness}} mm</p>
                            <p class="font-weight-bold green--text text--darken-4" color="1B5E20">Available width: {{avilableWidth}} mm</p>
                        </v-col>
                        <v-col cols="8">
                            <v-row>
                                <v-col cols="9">
                                    <v-row class="mb-5" justify="space-between">
                                        <v-col cols="7">
                                            <h4>Slit Planning</h4>
                                        </v-col>
                                        <v-col>
                                            <v-btn @click="addRule" outlined>Add Slit</v-btn>
                                        </v-col>
                                    </v-row>
                                    <v-row v-if="slittedItems.length > 0">
                                        <v-col>
                                            <v-row v-for="(item, index) in slittedItems" :key="index">
                                            <!-- <v-col cols="12"> <v-divider class="py-2"></v-divider></v-col> -->
                                                <v-col cols="auto">
                                                    <v-row>
                                                        <!-- <v-col cols="auto" class="py-0">
                                                            <v-text-field
                                                                v-model.number="item.slit_no"
                                                                label="Slit No"
                                                                outlined
                                                                dense
                                                                color="grey"
                                                                type="number"
                                                                />
                                                        </v-col> -->
                                                        <v-col cols="auto" class="py-0">
                                                            <v-text-field
                                                            v-model.number="item.slitted_width"
                                                            label="Slit Width (mm)"
                                                            outlined
                                                            dense
                                                            color="grey"
                                                            type="number"
                                                            />
                                                        </v-col>
                                                        <v-col cols="auto" class="py-0">
                                                            <v-text-field
                                                            label="Slit Weight (kg)"
                                                            outlined
                                                            dense
                                                            color="grey"
                                                            type="number"
                                                            readonly
                                                            :value="formulatedWt(item.slitted_width)"
                                                            />
                                                        </v-col>
                                                        <v-col cols="auto" class="py-1">
                                                            <v-icon class="mr-2" @click="copySlit(item)">
                                                                mdi-content-duplicate
                                                            </v-icon>
                                                            <v-icon @click="deleteSlit(item)">
                                                                mdi-delete
                                                            </v-icon>
                                                        </v-col>
                                                    </v-row>
                                                </v-col>  
                                            </v-row>
                                            <div class="red--text caption">{{validateForm ? "" :"Total Slitted width cannot exceed the total Coil width"}}</div>
                                        </v-col>
                                    </v-row>
                                </v-col>
                                <v-col cols="3">
                                    <v-row class="mb-3">
                                        <v-col cols="12">
                                            <h4 class="mb-5">Schedule</h4>
                                        </v-col>
                                        <v-col cols="12" class="py-0">
                                        <v-menu
                                            ref="menu"
                                            v-model="dateMenu"
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
                                                    v-model="selDate"
                                                    placeholder="Select Date"
                                                    readonly
                                                    v-bind="attrs"
                                                    v-on="on"
                                                    clearable
                                                    @click:clear="selDate = null"
                                                    class="body-1"
                                                ></v-text-field>
                                            </template>
                                            <v-date-picker
                                                v-model="selDate"
                                                no-title
                                                scrollable
                                                @input="dateMenu = false"
                                                :min="maxDate"
                                                >
                                            </v-date-picker>
                                        </v-menu>
                                        </v-col>
                                        <v-col class="py-0 my-0" cols="12">
                                        <v-select
                                            outlined
                                            dense
                                            v-model.number="shift"
                                            :items="$store.state.shifts"
                                            label="Select Shift"
                                            item-text="name"
                                            item-value="id"
                                            color="grey"
                                            
                                            ></v-select>
                                    </v-col>
                                </v-row>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>
    </v-container>
</template>

<script>
import coils from "@/services/coils";
  export default {
    data: () => ({
        shift: '',
        rule:true,
        data:{},
        saved: false,
        savedData: {status: "available"},
        dateMenu: false,
        selDate: null,
        maxDate: new Date().toISOString(),
        slittedItems: [],
        errorMsg: '',
        deletedItems: [],
    }),
    props: {coilData: Object},
    computed: {
        haltSave(){
            let flag = false;
            if(this.selDate && this.shift && this.slittedItems.length > 0) {
                for(let i=0 ; i<this.slittedItems.length ; i++) {
                    if(!this.slittedItems[i].slitted_width) {
                        flag = true
                        break
                    }
                }
             
             return flag

            } else {
                console.log("check else")
                return true
            }
            
        },
        validateForm() {
            if(this.avilableWidth >= 0){
                // this.errorMsg = ""
                return true
            }
            else {
                // this.errorMsg = "Slitted width total can't excceed the total coil width"
                return false
            }
        },
        avilableWidth() {
            let val = 0
            console.log(this.slittedItems)
            this.slittedItems.map((item) => {
                val = val + item.slitted_width
            })
            return this.coilData.width - val
        }
    },
    mounted() {
        this.$store.dispatch('getShifts')
        if(this.$route.params.id) {
            this.slittedItems = this.$store.state.slits
            this.selDate = this.$store.state.slittedDate
            this.shift = this.$store.state.slittedShift
        }
        
    },
    methods: {
        savePlanning() {
            if(this.$route.params.id)   
                this.updateSlits()
            else this.saveSlit()
        },
        formulatedWt(width) {
            return parseFloat(((this.coilData.weight / this.coilData.width) * width).toFixed(3))
        },
        async updateSlits() {
            let data = {}
            let calendarDate = this.$options.filters.calendarDate(new Date().toISOString())
            data.status = "in-queue";
            data.slit_date = this.selDate;
            data.slit_shift = this.shift
            data.slittedItems = [...this.slittedItems];
            this.slittedItems.map(item => {
                item.created_at = item.created_at ? item.created_at : calendarDate;
                item.updated_at = calendarDate;
                item.slitted_weight = this.formulatedWt(item.slitted_width)
                item.status = "in-queue"
                item.is_avilable = true
                item.parent_id = this.coilData.id
            })
            if(this.avilableWidth > 0) {
                data.slittedItems.push({id:(this.slittedItems.length + 1), status:"in-queue", is_avilable: true,created_at:calendarDate, updated_at:calendarDate ,slitted_width: this.avilableWidth, slitted_weight: this.formulatedWt(this.avilableWidth), parent_id: this.coilData.id})
            }
            data.deletedItems = this.deletedItems;

          try {
            const result = await coils.updateSlits(this.coilData.id, data)
            // this.savedData = result.data[0];
            console.log("result", result);
          } 
          catch (error) {
            console.log("error",error)
          }
          finally {
            this.$router.push({path: '/coils'});
            this.$store.dispatch('getCoils', {page:1, limit:10});
          }
        },
        async saveSlit() {
            let data = {}
            let calendarDate = this.$options.filters.calendarDate(new Date().toISOString())
            data.status = "in-queue"
            data.slit_date = this.selDate;
            data.slit_shift = this.shift;
            data.slittedItems = [...this.slittedItems];
            this.slittedItems.map(item => {
                item.status = "in-queue"
                item.is_avilable = true
                item.created_at = calendarDate
                item.updated_at = calendarDate;
                item.slitted_weight = this.formulatedWt(item.slitted_width)
                item.parent_id = this.coilData.id
            })
            if(this.avilableWidth > 0) {
                data.slittedItems.push({id:(this.slittedItems.length + 1), status:"in-queue", is_avilable: true,created_at:calendarDate, updated_at:calendarDate ,slitted_width: this.avilableWidth, slitted_weight: this.formulatedWt(this.avilableWidth), parent_id: this.coilData.id})
            }

            try {
                const result = await coils.addSlits(this.coilData.id, data)
                this.savedData = result.data[0];
            } 
            catch (error) {
                console.log("error",error)
            }
            finally {
                this.$store.state.coilDrawer = false
                this.saved = true
                // this.$router.push({path: '/coils'});
                // this.$store.dispatch('getCoils', {page:1, limit:10});
            }
        },
        deleteSlit(val) {
            if(val.ID) {       //saved slit
                let index = this.slittedItems.findIndex(item => item.ID == val.ID)
                this.deletedItems.push(this.slittedItems[index])
                this.slittedItems.splice(index,1)
            } 
            else { //unsaved slit
                let index = this.slittedItems.findIndex(item => item.id == val.id)
                this.slittedItems.splice(index,1)
            }
        },
        copySlit(item) {
            let obj = Object.assign({}, item)
            this.slittedItems.push({id: (this.slittedItems.length + 1), slitted_width: obj.slitted_width, slitted_weight: obj.slitted_weight});
        },
        addRule() {
            this.slittedItems.push({id: (this.slittedItems.length + 1), slitted_width: '', slitted_weight: ''})
        }
    }
  }
</script>