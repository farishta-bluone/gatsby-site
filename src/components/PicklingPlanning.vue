<template>
    <v-container>
        <v-row>
            <v-dialog
            v-model="$store.state.picklingDialog"
            max-width="600px"
            class="py-5"
            @click:outside="clearData"
        >
          
          <v-card>
            <v-card-title>
              <p class="body-1 font-weight-bold">{{formTitle}}</p>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row v-for="item in $store.state.selSlits" :key="item.id">
                  <v-col
                    cols="4"
                    class="py-0"
                  >
                    <v-text-field
                        outlined
                        readonly
                        color="grey"
                        dense
                        v-model="item.slit_no"
                        label="Coil No"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="4" class="py-0">
                    <v-menu
                        ref="dates"
                        v-model="item.dateMenu"
                        :close-on-content-click="true"
                        transition="scale-transition"
                        offset-y
                        min-width="290px"
                    >
                        <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                                dense
                                outlined
                                color="grey"
                                v-model="item.pickling_date"
                                placeholder="Pickling Date"
                                readonly
                                v-bind="attrs"
                                v-on="on"
                                clearable
                               
                                class="body-1"
                            ></v-text-field>
                        </template>
                        <v-date-picker
                            v-model="item.pickling_date"
                            no-title
                            scrollable
                            @input="item.dateMenu = false"
                           
                            >
                        </v-date-picker>
                    </v-menu>
                </v-col>
                <v-col class="py-0 my-0" cols="4">
                        <v-select
                            outlined
                            dense
                            v-model.number="item.pickling_shift"
                            :items="$store.state.shifts"
                            label="Pickling Shift"
                            item-text="name"
                            item-value="id"
                            color="grey"
                            
                        ></v-select>
                    </v-col>
                </v-row>
                
               
              </v-container>
            </v-card-text>

            <v-card-actions class="pb-5 mt-3">
              <v-spacer></v-spacer>
              <v-btn
                outlined
                text
                @click="close"
              >
                Cancel
              </v-btn>
              <v-btn
                @click="savePlanning"
               :dark="!haltSave"
               :disabled="haltSave"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        </v-row>
    </v-container>
</template>

<script>
    import slittedCoils from '@/services/slittedCoils';
    export default {
        components: {
            
        },
        data () {
            return {
                selDate: null,
                dateMenu: false,
                editedIndex: -1,
               
            }
        },
        mounted() {
            this.$store.dispatch('getShifts')
        },
        computed: {
            formTitle () {
                return this.editedIndex <= 0 ? 'Create Planning' : 'Edit Planning'
            },
            haltSave(){
                let flag = false;
                if(this.$store.state.selSlits.length > 0) {
                    for(let item of this.$store.state.selSlits) {
                        if(!item.pickling_date || !item.pickling_shift) {
                            flag = true
                            break
                        }
                    }
                
                return flag

                } else {
                    return true
                }
                
            },
        },
        methods: {
            clearData() {
                this.$store.state.selSlits = []
                this.$store.state.selRows = []
            },
            async savePlanning() {
                let data = []
                let calendarDate = this.$options.filters.calendarDate(new Date().toISOString())
                // data.status = "in-process for pickilng";
                // data.slittedItems = [...this.$store.state.selSlits];
                this.$store.state.selSlits.map(item => {
                    data.push({pickling_shift: item.pickling_shift, pickling_date: item.pickling_date, status: "in-process for pickling", id: item.ID, updated_at: calendarDate })
                })

                try {
                    const result = await slittedCoils.update(data)
                    console.log("result", result);
                } 
                catch (error) {
                    console.log("error",error)
                }
                finally {
                    this.$store.state.picklingDialog = false;
                    let payload = {status: 'in-process for pickling,approve for pickling'}
                    if(this.$route.path == '/pickling-stock') payload = {status: "slitted"}
                    this.$store.dispatch('getSlittedCoils', payload);
                }
            },
            close(){
                this.$store.state.picklingDialog = false
                this.$store.state.selSlits = []
                this.$store.state.selRows = []
            }
        }
    }
    </script>
