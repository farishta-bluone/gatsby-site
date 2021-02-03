<template>
  <v-navigation-drawer
    v-if="$store.state.slitDrawer"
    v-model="$store.state.slitDrawer"
    temporary
    right
    width="390"  
    style="position:fixed; top:0; right:0; overflow-y:scroll; z-index:101"
  >
    <div class="subtitle-1 font-weight-bold px-4 py-2">Slits Preview
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
          <v-container>
            <v-row class="px-4 mt-4" v-for="item in rows" :key="item.id">
              <v-col cols="12" class="py-0">
                <v-text-field
                  :value="item.od"
                  label="Slitted OD (mm)"
                  outlined
                  dense
                  color="grey"
                  type="number"
                  readonly
                />
              </v-col>
              <v-col cols="12" class="py-0">
                <v-text-field
                  :value="item.slitted_weight"
                  label="Weight (kg)"
                  outlined
                  dense
                  color="grey"
                  type="number"
                  readonly
                />
              </v-col>
              <v-col cols="12" class="py-0">
                <v-text-field
                    :value="item.slitted_width"
                  label="Width (mm)"
                  outlined
                  dense
                  color="grey"
                  type="number"
                />
              </v-col>
              <v-col cols="12"><v-divider></v-divider></v-col>
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
      <!-- <v-btn
       
        :dark="validateForm"
        :disabled="!validateForm"
      >
        Save
      </v-btn> -->
    </div>
  </v-navigation-drawer>
</template>

<script>
import coil from '@/services/coil';
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
        rows: []
      }
    },
    computed: {
      validateForm() {
          if(this.data.company && this.selDate && this.time && this.data.brand_no && this.data.thickness && this.data.width && this.data.weight)
            return true
            else return false
      }

    },
    mounted() {
        this.getSlits();
        console.log("Calleddd")
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
        async getSlits(){
            // this.data.date = `${this.selDate} ${this.time}`
            // this.data.created_at = this.$options.filters.calendarDate(new Date().toISOString())
            try {
                const result = await coil.getSlits(this.$store.state.coilId)
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