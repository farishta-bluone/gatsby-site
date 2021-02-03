<template>
    <v-container class="my-5">
        <v-expansion-panels>
            <v-expansion-panel>
            <v-expansion-panel-header v-slot="{ open }">
                <template>
                    <v-row no-gutters>
                        <v-col cols="12" class="my-3"><h3>Selection {{coilData.brand_no}}</h3></v-col>
                        <v-col cols="6" v-if="open">
                        </v-col>
                    </v-row>
                </template>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
                <v-row>
                    <v-col cols="4">
                        <h4 class="mb-5">Avilable Coil</h4>
                        <!-- <v-divider class="pt-5"></v-divider> -->
                        <p>ID: {{coilData.id}}</p>
                        <!-- <p>Brand: {{coilData.brand_no}}</p> -->
                        <p>Company: {{coilData.company}}</p>
                        <p>Weight: {{coilData.weight}} kg</p>
                        <p>Width: {{coilData.width}} mm</p>
                        <p>Thickness: {{coilData.thickness}} mm</p>
                    </v-col>
                    <v-col cols="8">
                        <div class="d-flex pb-6 justify-space-between">
                            <div>
                                <v-btn @click="addRule" dark>Add Slit</v-btn>
                                <v-btn v-if="slittedItems.length > 0" outlined class="ml-3" @click="addRule">Save Slit</v-btn>
                            </div>
                            
                            <p>Avilable width: {{avilableWidth}} mm</p>
                        </div>
                        
                        <div>
                            <div v-for="(item, index) in slittedItems" :key="index">
                                <v-row>
                                    <v-col cols="12"> <v-divider class="py-2"></v-divider></v-col>
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
                                                        v-model.number="item.weight"
                                                        label="Slitted Weight (kg)"
                                                        outlined
                                                        dense
                                                        color="grey"
                                                        type="number"
                                                        />
                                                    </v-col>
                                                    <v-col cols="auto" class="py-0">
                                                        <v-text-field
                                                        v-model.number="item.width"
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
  export default {
    data: () => ({
        rule:true,
        data:{},
        // coilData: {
        //     brand_no: "HR2024",
        //     company: "Jindal Steel Lmtd",
        //     id: 12,
        //     width: 13300,
        //     weight: 15000,
        //     thickness: 2.3
        // },
      slittedItems: [],
    }),
    props: {coilData: Object},
    computed: {
        avilableWidth() {
            let val = 0
            this.slittedItems.map((item) => {
                val = val + item.width
            })
            return this.coilData.width - val
        }
    },
    mounted() {
        // this.coilData = this.$store.state.coilData
    },
    methods: {
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
            this.slittedItems.push({id: (this.slittedItems.length + 1), width: '', weight: ''})
        }
    }
  }
</script>