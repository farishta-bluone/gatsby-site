<template>
  <v-navigation-drawer
    v-if="$store.state.coilDrawer"
    v-model="$store.state.coilDrawer"
    temporary
    right
    width="390"  
    style="position:fixed; top:0; right:0; overflow-y:scroll; z-index:101"
  >
    <div class="subtitle-1 font-weight-bold px-4 py-2">
      <span>{{ $store.state.coilId ? 'Edit Coil' : 'Add Coil'}}</span>
      <v-icon
        class="float-right"
        @click="close"
      >
        mdi-close-circle
      </v-icon>
    </div>
    <v-divider />
          <v-container>
            <v-row class="px-4 mt-4">
                <v-col cols="12" class="py-0">
                    <v-autocomplete
                    v-model="data.company"
                    :items="$store.state.companies"
                    item-text="name"
                    item-value="name"
                    label="Company"
                    outlined
                    color="grey"
                    dense
                    />
                </v-col>
                <v-col cols="6" class="py-0">
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
                                @click:clear="clearSearch('date')"
                                class="body-2"
                            ></v-text-field>
                        </template>
                        <v-date-picker
                            v-model="selDate"
                            no-title
                            scrollable
                            @input="dateMenu = false"
                            @change="searchData"
                            :max="maxDate"
                            >
                        </v-date-picker>
                    </v-menu>
                </v-col>
                <v-col class="py-0 my-0" cols="6">
                  <v-combobox
                    v-model="time"
                    :items="times"
                    outlined
                    dense
                    color="grey"
                    label="Select Time"
                  />
                </v-col>
              <v-col cols="12" class="py-0">
                <v-text-field
                  v-model="data.brand_no"
                  outlined
                  label="Brand Number"
                  color="grey"
                  dense
                />
              </v-col>
              
              <v-col cols="12" class="py-0">
                <v-text-field
                  v-model.number="data.thickness"
                  label="Thickness (mm)"
                  outlined
                  dense
                  color="grey"
                  type="number"
                />
              </v-col>
              <v-col cols="12" class="py-0">
                <v-text-field
                  v-model.number="data.width"
                  label="Width (mm)"
                  outlined
                  dense
                  color="grey"
                  type="number"
                />
              </v-col>
              <v-col cols="12" class="py-0">
                <v-text-field
                  v-model.number="data.weight"
                  label="Actual Weight (kg)"
                  outlined
                  dense
                  color="grey"
                  type="number"
                />
              </v-col>
              <v-col cols="12" class="py-0">
                <v-text-field
                  v-model.number="data.formulated_weight"
                  label="Formulated Weight (kg)"
                  outlined
                  dense
                  color="grey"
                  type="number"
                />
              </v-col>
              <v-col cols="12" class="py-0">
                <v-text-field
                  v-model.number="data.od"
                  label="OD (mm)"
                  outlined
                  dense
                  color="grey"
                  type="number"
                />
              </v-col>
            </v-row>
          </v-container>
    <v-divider />
    <div class="mx-4 mt-8 float-right">
      <v-btn
        class="mr-2"
        outlined
        @click= "close"
      >
        Cancel
      </v-btn>
      <v-btn
        @click= "addCoil"
        :dark="validateForm"
        :disabled="!validateForm"
      >
        Save
      </v-btn>
    </div>
  </v-navigation-drawer>
</template>

<script>
import coil from '@/services/coil';
  export default {
      name: 'AddCoil',
    data () {
      return {
        drawer: null,
        data: {},
        maxDate: new Date().toISOString(),
        dateMenu: false,
        selDate: null,
        time: null,
        times: []
      }
    },
    computed: {
      validateForm() {
          if(this.data.company && this.selDate && this.time && this.data.brand_no && this.data.thickness && this.data.width && this.data.weight && this.data.formulated_weight && this.data.od)
            return true
            else return false
      }

    },
    mounted() {
        if(this.$store.state.coilId) {
          let coilData = this.$store.state.coilData
          let date = this.$options.filters.calendarDate(coilData.date).split(" ");
          const {brand_no, company, thickness, width, weight, formulated_weight, od} = coilData;
          this.selDate = date[0];
          this.time = date[1].split(":")[0] + ':' + date[1].split(":")[1]
          this.data = {brand_no, company, thickness, width, weight, formulated_weight, od};
        } else this.data = {}
        this.getTime();
    },
    methods: {
        getTime() {
            var quarterHours = ["00", "15", "30", "45"];
            for(var i = 0; i < 24; i++) {
                for(var j = 0; j < 4; j++) {
                    this.times.push( ('0' + i).slice(-2) + ":" + quarterHours[j] );
                }
            }
        },
        clearSearch(data) {
            console.log("data",data)
        },
        searchData() {

        },
        async addCoil(){
          if(this.$store.state.coilId) this.editCoil();
          else {
            this.data.date = `${this.selDate} ${this.time}`
            this.data.created_at = this.$options.filters.calendarDate(new Date().toISOString())
            try {
              const result = await coil.add(this.data)
              console.log("result", result);
            } 
            catch (error) {
              console.log("error",error)
            }
            finally {
              this.$store.state.coilDrawer = false
              this.$store.dispatch('getCoils', {page:1, limit:10});
            }
          }  
        },
        async editCoil(){
          this.data.date = `${this.selDate} ${this.time}`
          this.data.updated_at = this.$options.filters.calendarDate(new Date().toISOString())
          console.log("data", this.data)
          try {
            const result = await coil.update(this.$store.state.coilId, this.data)
            // this.rows = result.data.rows;
            console.log("result", result);
          } 
          catch (error) {
            console.log("error",error)
          }
          finally {
            this.$store.state.coilDrawer = false
            this.$store.dispatch('getCoils', {page:1, limit:10});
          }
        },
        close() {
        this.$store.state.coilDrawer = false
      }
    }
  }
</script>