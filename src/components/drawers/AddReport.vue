<template>
  <v-navigation-drawer
    v-if="$store.state.addReport"
    v-model="$store.state.addReport"
    temporary
    right
    width="420"
    style="position: fixed; top: 0; right: 0; overflow-y: scroll; z-index: 101"
  >
    <div class="body-1 font-weight-bold px-4 py-2">
      HR Slitting Report
      <v-icon class="float-right" @click="close"> mdi-close-circle </v-icon>
    </div>
    <v-divider />
    <v-container v-if="rows.length > 0">
      <v-row class="px-4">
        <v-col cols="12">
          <p class="body-1 font-weight-bold mb-1">
            Parent Coil: {{ rows[0].brand_no }}
          </p>
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
        <v-col class="d-flex" cols="6">
            <v-select
              outlined
              dense
              v-model.number="slitShift"
              :items="$store.state.shifts"
              label="Select Shift"
              item-text="name"
              item-value="id"
              color="grey"
              clearable
              class="select-box"
            ></v-select>
          </v-col>
          <v-col cols="6">
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
                  v-model="slitDate"
                  placeholder="Select Date"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                  clearable
                  class="body-2"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="slitDate"
                no-title
                scrollable
                @input="menu = false"
              >
              </v-date-picker>
            </v-menu>
          </v-col>
      </v-row>
    </v-container>
    <v-divider />

    <v-container>
      <div v-if="rows.length > 0">
        <p class="body-1 font-weight-bold mx-3 mb-1">
          Slits
          <span
            class="float-right"
          >
          <v-btn dark small @click="addSlits">Add Slit</v-btn>
          </span>
        </p>
      </div>

      <p class="text-right pb-4 px-4 mt-2 font-weight-bold body-2 red--text text--darken-4 caption">
          <!-- Available width: {{ avilableWidth }} mm -->
          Scrap: {{ scrapWidth }} mm
      </p>
      <v-row class="px-4" v-for="item in slits" :key="item.id">
        <v-col
          cols="5"
          class="py-0"
        >
          <v-text-field
            v-model="item.slit_no"
            label="Coil No"
            outlined
            dense
            color="grey"
            :readonly="$route.path === '/coils'"
          />
        </v-col>
        <v-col class="py-0" cols="5">
          <v-text-field
            v-model="item.slitted_width"
            label="Width (mm)"
            outlined
            dense
            color="grey"
            type="number"
            :readonly="$route.path === '/coils'"
          />
        </v-col>
        <v-col cols="2">
          <v-icon class="float-right" @click="deleteSlit(item.id)" small>
            mdi-close-thick
          </v-icon>
        </v-col>
        <v-col class="py-0" cols="5">
          <v-text-field
            :value="calcSlitWt(item.slitted_width)"
            label="Weight (kg)"
            outlined
            dense
            color="grey"
            type="number"
            readonly
          />
          <!-- :readonly="!editFlag('weight') || $route.path === '/coils'" -->
        </v-col>
        <v-col
          class="py-0"
          cols="5"
        >
          <v-text-field
            v-model="item.actual_weight"
            label="Actual Weight (kg)"
            outlined
            dense
            color="grey"
            type="number"
            :readonly="$route.path === '/coils'"
          />
        </v-col>
        <!-- <v-col
          class="py-0 pl-2"
          cols="6"
        >
          <v-text-field
            v-model="item.actual_width"
            label="Actual Width (mm)"
            outlined
            dense
            color="grey"
            type="number"
            :readonly="$route.path === '/coils'"
          />
        </v-col> -->
        <v-col cols="12"><v-divider class="py-2"></v-divider></v-col>
        <!-- <v-col cols="12"><v-divider></v-divider></v-col> -->
      </v-row>
      <!-- <v-row>
          <v-col cols="12"><v-divider class="py-2"></v-divider></v-col>
      </v-row> -->
      <v-row class="px-4">
        <v-col
          class="pb-0"
          cols="12"
        >
          <v-textarea
            v-model="notes"
            outlined
            color="grey"
            auto-grow
            dense
            rows="1"
            label="Remarks"
            class="mr-2"
          ></v-textarea>
        </v-col>
      </v-row>
      <v-row class="caption red--text px-4" v-if="errorMsg">{{
        errorMsg
      }}</v-row>
    </v-container>
    <!-- <v-divider /> -->

    <div class="ma-4 mt-5 float-right">
      <v-btn class="mr-2" outlined @click="close"> Cancel </v-btn>
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
import coils from "@/services/coils";
export default {
  name: "CoilPreview",
  data() {
    return {
      slitShift: null,
      slitDate: null,
      menu: false,
      notes: "",
      drawer: null,
      data: {},
      maxDate: new Date().toISOString(),
      dateMenu: false,
      selDate: null,
      time: null,
      times: [],
      rows: [],
      errorMsg: "",
      count: 1,
      slits: [{
        id: 1,
        slit_no: "",
        actual_weight: "",
        slitted_width: "",
        slitted_weight: ""}]
    };
  },
  computed: {
    scrapWidth() {
      if (this.slits.length > 0) {
        let val = 0;
        this.slits.map((item) => {
          if (!item.slitted_width) item.slitted_width = 0;
          val = parseFloat(val) + parseFloat(item.slitted_width);
        });
        return (this.rows.length > 0 ? (this.rows[0].width - val).toFixed(3) : 0 );
      } else return 0;
    },
    avilableWidth() {
      if (this.slits.length > 0) {
        let val = 0;
        this.slits.map((item) => {
          if (!item.slitted_width) item.slitted_width = 0;
          val = parseFloat(val) + parseFloat(item.slitted_width);
        });
        return (this.rows.length > 0 ? (this.rows[0].width - val).toFixed(3) : 0 );
      } else return 0;
    },
    validateFields() {
      let flag = true;
      for (let i = 0; i < this.slits.length; i++) {
        if (!this.slits[i].slitted_width || !this.slits[i].slit_no || !this.slits[i].actual_weight) {
          flag = false;
          break;
        }
      }
      return flag;
    },
    validateForm() {
      let totalWidth = 0;
      // let totalWeight = 0;
      if (this.slits.length > 0) {
        this.slits.map((item) => {
          totalWidth = parseFloat(totalWidth) + parseFloat(item.slitted_width);
          // totalWeight = parseFloat(totalWeight) + parseFloat(item.slitted_weight)
        });
        if (this.rows[0].width >= totalWidth) return true;
        else return false;
      } else return true;
    },
  },
  mounted() {
    this.getSlits();
  },
  methods: {
    calcSlitWt(slit_width) {
        if(this.rows.length > 0)
            return ((this.rows[0].weight/this.rows[0].width) * slit_width).toFixed(2)
        else return 0;    
    },
    deleteSlit(id) {
      let index = this.slits.findIndex((item) => item.id == id);
      this.slits.splice(index, 1);
    },
    addSlits() {
      ++this.count;
      this.slits.push({
        id: this.count,
        slit_no: "",
        actual_weight: "",
        slitted_width: "",
        slitted_weight: "",
      });
    },
    editFlag() {
      // if (this.checkRole("admin")) return true;
      // if (this.checkRole("member") && (type == "weight" || type == "width"))
      //   return false;
      return true;
    },
    checkRole(role_name) {
      let user = JSON.parse(localStorage.getItem("user"));
      if (user && user.role == role_name) return true;
      else return false;
    },
    async saveCoil() {
      if (!this.validateForm) {
        this.errorMsg =
          "Total of slits weight & width can't exceed parent coil's weight & width.";
        return;
      } else this.errorMsg = "";
      let status = "require approval"

    let currentDate = this.$options.filters.calendarDate(new Date().toISOString())
      let data = {
        slittedItems: [],
        status: status,
        slit_date: this.slitDate,
        slit_shift: this.slitShift,
        updated_at: this.$options.filters.calendarDate(
          new Date().toISOString()
        ),
      };
      this.slits.map((item) => {
        data.slittedItems.push({
          ID: item.ID,
          slit_no: item.slit_no,
          status: status,
          actual_weight: item.actual_weight,
          actual_width: item.slitted_width,
          slitted_weight: this.calcSlitWt(item.slitted_width),
          slitted_width: item.slitted_width,
          created_at: currentDate,
          updated_at: currentDate,
          parent_id: this.$store.state.coilId
        });
      });
      if (this.notes) data.notes = this.notes;
      try {
        const result = await coils.updateSlits(this.$store.state.coilId, data);
        // this.savedData = result.data[0];
        console.log("result", result);
      } catch (error) {
        console.log("error", error);
      } finally {
        // let payload = { status: "in-queue,require approval" }; //it can change
        // if (this.$store.state.previewShift)
        //   payload.slit_shift = this.$store.state.previewShift;
        // if (this.$store.state.previewDate)
        //   payload.slit_date = this.$store.state.previewDate;
        this.$store.state.addReport = false;
        this.$store.state.coilId = null
        this.$store.dispatch("getCoils", {status: "available,require approval"});
        // this.$store.dispatch("getSlittedCoils", payload);
      }
    },
    clearSearch(data) {
      console.log("data", data);
    },
    searchData() {},
    async getSlits() {
      // this.data.date = `${this.selDate} ${this.time}`
      // this.data.created_at = this.$options.filters.calendarDate(new Date().toISOString())
      try {
        const result = await coils.getSlits(this.$store.state.coilId);
        this.rows = result.data.rows;
        this.notes = this.rows[0].notes;
      } catch (error) {
        console.log("error", error);
      } finally {
        // this.$store.state.addReport = false
        // this.$store.dispatch('getCoils', {page:1, limit:10});
      }
    },
    close() {
      this.$store.state.addReport = false;
    },
  },
};
</script>