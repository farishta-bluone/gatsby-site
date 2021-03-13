<template>
  <v-navigation-drawer
    v-if="$store.state.slitDrawer"
    v-model="$store.state.slitDrawer"
    temporary
    right
    width="420"  
    style="position:fixed; top:0; right:0; overflow-y:scroll; z-index:101"
  >
    <div class="body-1 font-weight-bold px-4 py-2">HR Slitting Planning Preview
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
            <div class="pb-5" v-if="rows.length > 0">
              <p class="body-1 font-weight-bold mx-3 mb-1">Slits
                <span v-if="rows[0].status === 'require approval' || rows[0].status === 'slitted'" class="float-right font-weight-bold body-2 red--text text--darken-4 caption">
                  Scrap: {{scrapWidth}} mm
                </span>
                <span v-else class="float-right font-weight-bold body-2 green--text text--darken-4 caption">
                  Available width: {{avilableWidth}} mm
                </span>
              </p>
            </div>
            
            <v-row class="px-4" v-for="(item) in rows" :key="item.id">
              <!-- <v-col cols="3" class="pr-0">No.{{item.slit_no}}</v-col> -->
              <v-col  cols="4" class="py-0" v-if="($route.path.includes('preview') || item.slit_no)">
                <v-text-field
                  v-model="item.slit_no"
                  label="Coil No"
                  outlined
                  dense
                  color="grey"
                  :readonly="$route.path === '/coils'"
                />
              </v-col>
              <v-col class="py-0" cols="4">
                <v-text-field
                  v-model="item.slitted_weight"
                  label="Weight (kg)"
                  outlined
                  dense
                  color="grey"
                  type="number"
                  :readonly="!editFlag('weight') || $route.path === '/coils'"
                />
              </v-col>
              <v-col  class="py-0" cols="4">
                <v-text-field
                  v-model="item.slitted_width"
                  label="Width (mm)"
                  outlined
                  dense
                  color="grey"
                  type="number"
                  :readonly="!editFlag('width') || $route.path === '/coils'"
                />
              </v-col>
              <v-col class="py-0" cols="6" v-if="((checkRole('member') &&  item.status === 'in-queue' && $route.path === '/slits-preview') || (checkRole('admin') && item.status === 'require approval') || item.status == 'slitted')">
                <v-text-field
                  v-model="item.actual_weight"
                  label="Actual Weight (kg)"
                  outlined
                  dense
                  color="grey"
                  type="number"
                  :readonly="!editFlag('actual_weight') || $route.path === '/coils'"
                />
              </v-col>
              <v-col  class="py-0 pl-2" cols="6" v-if="((checkRole('member') &&  item.status === 'in-queue' && $route.path === '/slits-preview') || (checkRole('admin') && item.status === 'require approval' || item.status == 'slitted'))">
                <v-text-field
                  v-model="item.actual_width"
                  label="Actual Width (mm)"
                  outlined
                  dense
                  color="grey"
                  type="number"
                  :readonly="!editFlag('actual_width') || $route.path === '/coils'"
                />
              </v-col>
              <v-col cols="12"><v-divider class="py-2"></v-divider></v-col>
              <!-- <v-col cols="12"><v-divider></v-divider></v-col> -->
            </v-row>
            <v-row v-if="rows.length > 0" class="px-4">
              <v-col class="pb-0" v-if="((checkRole('member') &&  rows[0].status === 'in-queue' && $route.path === '/slits-preview') || (checkRole('admin') &&  rows[0].status === 'require approval'))" >
                <v-textarea
                  v-model="notes"
                  outlined
                  color="grey"
                  auto-grow
                  dense
                  rows="1"
                  label="Notes"
                  class="mr-2"
                ></v-textarea>
              </v-col>
            </v-row>
            <v-row class="caption red--text px-4" v-if="errorMsg">{{errorMsg}}</v-row>
          </v-container>
    <!-- <v-divider /> -->
    
    <div class="ma-4 mt-5 float-right" v-if="$route.path.includes('preview')">
      <v-btn
        class="mr-2"
        outlined
        @click= "close"
      >
        Cancel
      </v-btn>
      <v-btn
        :dark="validateFields"
        :disabled="!validateFields"
        @click="saveCoil"
      >
        Save
      </v-btn>
    </div>
  </v-navigation-drawer>
</template>

<script>
import coils from '@/services/coils';
  export default {
      name: 'CoilPreview',
    data () {
      return {
        notes: "",
        drawer: null,
        data: {},
        maxDate: new Date().toISOString(),
        dateMenu: false,
        selDate: null,
        time: null,
        times: [],
        rows: [],
        errorMsg: ''
      }
    },
    computed: {
      scrapWidth() {
        if(this.rows.length > 0) {
          let val = 0
          this.rows.map((item) => {
              if(!item.actual_width) item.actual_width = 0
              val = parseFloat(val) + parseFloat(item.actual_width)
          })
          return (this.rows[0].width - val).toFixed(3)
        }
        else return 0
      },
      avilableWidth() {
        if(this.rows.length > 0) {
          let val = 0
          this.rows.map((item) => {
              if(!item.slitted_width) item.slitted_width = 0
              val = parseFloat(val) + parseFloat(item.slitted_width)
          })
          return (this.rows[0].width - val).toFixed(3)
        }
        else return 0
      },
      validateFields() {
        let flag = true
        for(let i=0 ; i<this.rows.length ; i++) {
            if(!this.rows[i].slitted_width || !this.rows[i].slitted_weight) {
                flag = false
                break
            }
        }
        return flag
      },
      validateForm() {
        let totalWidth = 0;
        // let totalWeight = 0;
        if(this.rows.length > 0) {
          this.rows.map(item => {
          totalWidth = parseFloat(totalWidth) + parseFloat(item.slitted_width)
          // totalWeight = parseFloat(totalWeight) + parseFloat(item.slitted_weight)
        })
        if(this.rows[0].width >= totalWidth) return true;
        else return false;
        }
        else return true
        
      }

    },
    mounted() {
      this.getSlits();
    },
    methods: {
      editFlag(type) {
        if(this.checkRole('admin')) return true
        if(this.checkRole('member') && (type == 'weight' || type == 'width')) return false
        else return true
      },
      checkRole(role_name) {
        let user = JSON.parse(localStorage.getItem('user'))
        if(user && user.role == role_name) return true
        else return false 
      },
      async saveCoil() {
        if(!this.validateForm) {
          this.errorMsg = "Total of slits weight & width can't exceed parent coil's weight & width."
          return
        }
        else this.errorMsg = ''
        let status = this.rows[0].status;
        if(this.checkRole('admin') && status == "in-queue") status = "in-queue"
        if(this.checkRole('member') && status == "in-queue") status = "require approval"
        if(this.checkRole('admin') && status == "require approval") status = "slitted"
        let data = {slittedItems: [], status: status, updated_at: this.$options.filters.calendarDate(new Date().toISOString())}
        this.rows.map(item => {
          data.slittedItems.push({ID: item.ID, slit_no: item.slit_no, status: status, actual_weight: item.actual_weight, actual_width: item.actual_width, slitted_weight: item.slitted_weight, slitted_width: item.slitted_width})
        })
        if(this.notes) data.notes = this.notes
        try {
          const result = await coils.updateSlits(this.$store.state.coilId, data)
          // this.savedData = result.data[0];
          console.log("result", result);
          } 
          catch (error) {
            console.log("error",error)
          }
          finally {
            let payload = {status: "in-queue,require approval"} //it can change
            if(this.$store.state.previewShift) payload.slit_shift = this.$store.state.previewShift
            if(this.$store.state.previewDate) payload.slit_date = this.$store.state.previewDate
            this.$store.state.slitDrawer = false
            this.$store.dispatch('getSlittedCoils', payload);
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
                this.notes = this.rows[0].notes;
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