<template>
  <v-navigation-drawer
    v-if="$store.state.slitDrawer"
    v-model="$store.state.slitDrawer"
    temporary
    right
    width="420"  
    style="position:fixed; top:0; right:0; overflow-y:scroll; z-index:101"
  >
    <div class="body-1 font-weight-bold px-4 py-2">Slits Preview
      <!-- <span>{{ $store.state.news.$store.state.coilDrawerStatus === 'edit' ? 'Edit News' : 'Add News'}}</span> -->
      <v-icon
        class="float-right"
        @click="close"
      >
        mdi-close-circle
      </v-icon>
    </div>
    <!-- <p></p> -->
    <v-divider />
          <v-container v-if="rows.length > 0">
            <v-row class="px-4">
              <v-col cols="12">
                <p class="body-1 font-weight-bold mb-1">Parent Coil:  {{rows[0].brand_no}}</p>
              </v-col>
              <v-col cols="4" class="py-0">
                <v-text-field
                  :value="rows[0].thickness"
                  label="Thickness"
                  outlined
                  dense
                  color="grey"
                  type="number"
                  readonly
                />
              </v-col>
                <v-col cols="4" class="py-0">
                <v-text-field
                  :value="rows[0].weight"
                  label="Weight (kg)"
                  outlined
                  dense
                  color="grey"
                  type="number"
                  readonly
                />
              </v-col>
              <v-col cols="4" class="py-0">
                <v-text-field
                  :value="rows[0].width"
                  label="Width (mm)"
                  outlined
                  dense
                  color="grey"
                  type="number"
                  readonly
                />
              </v-col>
              
            </v-row>
          </v-container>
          <v-divider />
          
          <v-container>
            <div class="pb-5">
              <p class="body-1 font-weight-bold mx-3 mb-1">Slits
              <span class="float-right">
                <!-- <v-icon @click="editFlag = true" small>mdi-pencil</v-icon>  -->
                <!-- <v-btn small outlined> Edit</v-btn> -->
              </span></p>
              <!-- <p class="caption mx-3">You can edit fields now!</p> -->
            </div>
            
            <v-row class="px-4" v-for="(item) in rows" :key="item.id">
              <!-- <v-col cols="3" class="pr-0">No.{{item.slit_no}}</v-col> -->
              <v-col  class="py-0" v-if="$route.path.includes('preview')">
                <v-text-field
                  v-model.number="item.slit_no"
                  label="Slit No"
                  outlined
                  dense
                  color="grey"
                  type="number"
                />
              </v-col>
              <v-col class="py-0">
                <v-text-field
                  :value="item.slitted_weight"
                  label="Weight (kg)"
                  outlined
                  dense
                  color="grey"
                  type="number"
                  :readonly="!editFlag"
                />
              </v-col>
              <v-col  class="py-0">
                <v-text-field
                  :value="item.slitted_width"
                  label="Width (mm)"
                  outlined
                  dense
                  color="grey"
                  type="number"
                  :readonly="!editFlag"
                />
              </v-col>
              <!-- <v-col cols="12"><v-divider></v-divider></v-col> -->
            </v-row>
          </v-container>
    <v-divider />
    <div class="mx-4 mt-8 float-right" v-if="$route.path.includes('preview')">
      <v-btn
        class="mr-2"
        outlined
        @click= "close"
      >
        Cancel
      </v-btn>
      <v-btn
        :dark="validateSlitNo"
        :disabled="!validateSlitNo"
        @click="markComplete"
      >
        Mark Complete
      </v-btn>
    </div>
  </v-navigation-drawer>
</template>

<script>
import coils from '@/services/coils';
  export default {
      name: 'SlitCoil',
    data () {
      return {
        drawer: null,
        data: {},
        maxDate: new Date().toISOString(),
        dateMenu: false,
        selDate: null,
        time: null,
        times: [],
        rows: [],
        editFlag: false
      }
    },
    computed: {
      validateSlitNo() {
        let flag = true
        for(let i=0 ; i<this.rows.length ; i++) {
            if(!this.rows[i].slit_no) {
                flag = false
                break
            }
        }
        return flag
      },
      validateForm() {
          if(this.data.company && this.selDate && this.time && this.data.brand_no && this.data.thickness && this.data.width && this.data.weight)
            return true
            else return false
      }

    },
    mounted() {
        this.getSlits();
    },
    methods: {
      async markComplete() {
        let data = {slittedItems: [], status: "slitted"}
        this.rows.map(item => {
          data.slittedItems.push({ID: item.ID, slit_no: item.slit_no, status: "slitted"})
        })
        try {
            const result = await coils.updateSlits(this.$store.state.coilId, data)
            // this.savedData = result.data[0];
            console.log("result", result);
          } 
          catch (error) {
            console.log("error",error)
          }
          finally {
            this.$store.state.slitDrawer = false
            this.$store.dispatch('getSlittedCoils', {status: 'in-queue'});
          }
      },
        clearSearch(data) {
            console.log("data",data)
        },
        searchData() {

        },
        async getSlits(){
            // this.data.date = `${this.selDate} ${this.time}`
            // this.data.created_at = this.$options.filters.calendarDate(new Date().toISOString())
            try {
                const result = await coils.getSlits(this.$store.state.coilId)
                this.rows = result.data.rows;
                console.log("result", result);
            } 
            catch (error) {
                console.log("error",error)
            }
            finally {
                // this.$store.state.slitDrawer = false
                // this.$store.dispatch('getCoils', {page:1, limit:10});
            }
        },
        close() {
        this.$store.state.slitDrawer = false
      }
    }
  }
</script>