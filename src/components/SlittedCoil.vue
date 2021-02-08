<template>
    <v-container class="my-5">
        <v-expansion-panels>
            <v-expansion-panel>
            <v-expansion-panel-header v-slot="{ open }">
                <template>
                    <v-row no-gutters>
                        <v-col cols="12" class="my-3"><h3>Coil {{coilData.brand_no}}</h3></v-col>
                        <v-col cols="6" v-if="open">
                        </v-col>
                    </v-row>
                </template>
            </v-expansion-panel-header>
            <v-expansion-panel-content v-if="!hideSlit">
                <v-row >
                    <v-col cols="4">
                        <h4 class="mb-5">Avilable Coil</h4>
                        <!-- <v-divider class="pt-5"></v-divider> -->
                        <p class="mb-2">ID: {{coilData.id}}</p>
                        <!-- <p>Brand: {{coilData.brand_no}}</p> -->
                        <p class="mb-2">Company: {{coilData.company}}</p>
                        <p class="mb-2">Weight: {{coilData.weight}} kg</p>
                        <p class="mb-2">Formulated Weight: {{coilData.formulated_weight}} kg</p>
                        <p class="mb-2">OD: {{coilData.od}} mm</p>
                        <p class="mb-2">Width: {{coilData.width}} mm</p>
                        <p class="mb-2">Thickness: {{coilData.thickness}} mm</p>
                    </v-col>
                    <v-col cols="8">
                        
                        <div class="d-flex pb-6 justify-space-between">
                            <h4 class="mb-5">Slit Planning</h4>
                            <div>
                                <!-- <v-btn @click="addRule" dark>Add Slit</v-btn> -->
                                <v-btn :disabled="haltSave || !validateForm"  v-if="slittedItems.length > 0" :dark="!haltSave && validateForm" class="ml-3" @click="saveSlit">Save</v-btn>
                                <!-- <div :class="validateForm ? 'mt-2' : ''" class="red--text caption">{{validateForm ? "Slitted width total can't excceed the total coil width" : ''}}</div> -->
                            </div>
                            
                            <!-- <p>Avilable width: {{avilableWidth}} mm</p> -->
                        </div>
                        
                        <div>
                            <!-- <v-divider></v-divider> -->
                            <v-row class="mb-4" v-if="slittedItems.length > 0">
                                <v-col cols="auto" class="py-0">
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
                                    <v-col class="py-0 my-0" cols="auto">
                                    <v-combobox
                                        v-model="time"
                                        :items="times"
                                        outlined
                                        dense
                                        color="grey"
                                        label="Select Time"
                                    />
                                </v-col>
                                
                            </v-row>
                            <div>
                                <v-row class="mb-5">
                                    <v-col cols="auto" class="py-0">
                                    <v-btn @click="addRule" dark>Add Slit</v-btn>
                                </v-col>
                                <v-col class="py-0">
                                    <p class="ml-5">Avilable width: {{avilableWidth}} mm</p>
                                </v-col>
                                </v-row>
                                
                            <v-row>
                                <!-- <v-col cols="12"> <v-divider class="py-2"></v-divider></v-col> -->
                                
                                <v-col cols="12">
                                    <v-row v-for="(item, index) in slittedItems" :key="index">
                                    <!-- <v-col cols="12"> <v-divider class="py-2"></v-divider></v-col> -->
                                    <v-col cols="12">
                                        <v-row>
                                            <!-- <v-col cols="auto">
                                                <v-row> -->
                                                    <!-- <v-col cols="auto" class="py-0">
                                                        <v-text-field
                                                        v-model.number="item.od"
                                                        label="Slitted OD (mm)"
                                                        outlined
                                                        dense
                                                        color="grey"
                                                        type="number"
                                                        >
                                                        </v-text-field>
                                                    </v-col> -->
                                                    <v-col cols="auto" class="py-0">
                                                        <v-text-field
                                                        
                                                        label="Slitted Weight (kg)"
                                                        outlined
                                                        dense
                                                        color="grey"
                                                        type="number"
                                                        readonly
                                                        :value="formulatedWt(item.slitted_width)"
                                                        />
                                                    </v-col>
                                                    <v-col cols="auto" class="py-0">
                                                        <v-text-field
                                                        v-model.number="item.slitted_width"
                                                        label="Slitted Width (mm)"
                                                        outlined
                                                        dense
                                                        color="grey"
                                                        type="number"
                                                        />
                                                    </v-col>
                                                    <v-col cols="auto" class="py-1">
                                                        <v-icon class="mr-2" @click="copySlit(item)">
                                                            mdi-content-duplicate
                                                        </v-icon>
                                                        <v-icon @click="deleteSlit(item.id)">
                                                            mdi-delete
                                                        </v-icon>
                                                    </v-col>
                                    
                                                <!-- </v-row>
                                            </v-col>
                                            <v-col cols="4"> -->
                                                
                                                <!-- <v-btn outlined>Duplicate</v-btn>
                                                <v-btn outlined>Delete</v-btn> -->
                                            <!-- </v-col> -->
                                        </v-row>
                                    </v-col>  
                                </v-row>
                                <div class="red--text caption">{{validateForm ? "" :"Slitted width total can't excceed the total coil width"}}</div>
                                </v-col>
                            </v-row>
                                
                            </div>  
                        </div>
                    </v-col>
                </v-row>
            </v-expansion-panel-content>
            </v-expansion-panel>
    </v-expansion-panels>
    </v-container>
  
</template>

<script>
import coil from "@/services/coil";
  export default {
    data: () => ({
        rule:true,
        data:{},
        hideSlit: false,
        // coilData: {
        //     brand_no: "HR2024",
        //     company: "Jindal Steel Lmtd",
        //     id: 12,
        //     width: 13300,
        //     weight: 15000,
        //     thickness: 2.3
        // },
        dateMenu: false,
        selDate: null,
        maxDate: new Date().toISOString(),
      slittedItems: [],
      errorMsg: '',
      time: null,
        times: []
    }),
    props: {coilData: Object},
    // watch: {
    //     slittedItems: {
    //         deep: true,

    //         handler() {
    //             console.log('The list of colours has changed!');
    //         }
    //     }
    // },
    computed: {
        haltSave(){
            let flag = false;
            if(this.selDate && this.time && this.slittedItems.length > 0) {
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
        this.getTime();
        // this.coilData = this.$store.state.coilData
    },
    methods: {
        
        formulatedWt(width) {
            return parseFloat(((this.coilData.weight / this.coilData.width) * width).toFixed(3))
        },
        getTime() {
            var quarterHours = ["00", "15", "30", "45"];
            for(var i = 0; i < 24; i++) {
                for(var j = 0; j < 4; j++) {
                    this.times.push( ('0' + i).slice(-2) + ":" + quarterHours[j] );
                }
            }
        },
        async saveSlit() {
            let data = {}
            let calendarDate = this.$options.filters.calendarDate(new Date().toISOString())
            data.slit_date = this.selDate + ' ' + this.time;
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
            console.log("checkkk ", this.slittedItems)

          try {
            const result = await coil.addSlits(this.coilData.id, data)
            // this.rows = result.data.rows;
            console.log("result", result);
          } 
          catch (error) {
            console.log("error",error)
          }
          finally {
            this.$store.state.coilDrawer = false
            this.hideSlit = true
            // this.$router.push({path: '/coils'});
            // this.$store.dispatch('getCoils', {page:1, limit:10});
          }
        },
        deleteSlit(id) {
            let index = this.slittedItems.findIndex(item => item.id == id)
            this.slittedItems.splice(index,1)
        },
        copySlit(item) {
            let obj = Object.assign({}, item)
            obj.id = this.slittedItems.length + 1;
            this.slittedItems.push(obj);
        },
        addRule() {
            this.slittedItems.push({id: (this.slittedItems.length + 1), slitted_width: '', slitted_weight: ''})
        }
    }
  }
</script>