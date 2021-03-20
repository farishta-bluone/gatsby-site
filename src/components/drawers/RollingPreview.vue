<template>
  <v-navigation-drawer
    v-if="$store.state.rolling.preview"
    v-model="$store.state.rolling.preview"
    temporary
    right
    width="400"
    style="position: fixed; top: 0; right: 0; overflow-y: scroll; z-index: 101"
  >
    <div class="body-1 font-weight-bold px-4 py-2">
      Slit Preview
      <v-icon class="float-right" @click="close"> mdi-close-circle </v-icon>
    </div>
    <v-divider class="py-3" />
    <v-container>
      <v-row class="px-4">
        <v-col v-if="coil.status" cols="12" class="py-0 text-right">
          <p
            v-if="checkRole('admin') && coil.status === 'approve for pickling'"
            class="font-weight-bold red--text text--darken-4 caption"
          >
            Pickling Loss:
            {{
              (
                ((coil.actual_weight - coil.pickled_weight) /
                  coil.actual_weight) *
                100
              ).toFixed(2)
            }}
            %
          </p>
        </v-col>
        <v-col cols="6" class="py-0">
          <v-text-field
            :value="coil.slit_no"
            label="Coil No"
            outlined
            dense
            color="grey"
            readonly
          />
        </v-col>

        <v-col cols="6" class="py-0">
          <v-text-field
            v-model="coil.rolling_passes"
            label="No of Passes"
            outlined
            dense
            color="grey"
            type="number"
          />
        </v-col>
        <!-- <v-col cols="6" class="py-0">
          <v-text-field
            :value="coil.brand_no"
            label="Parent Coil ID"
            outlined
            dense
            color="grey"
            readonly
          />
        </v-col> -->

        <v-col cols="6" class="py-0">
          <v-text-field
            :value="coil.thickness"
            label="Thickness"
            outlined
            dense
            color="grey"
            type="number"
            readonly
          />
        </v-col>
        <v-col cols="6" class="py-0">
          <v-text-field
            v-model="coil.rolling_thickness"
            label="Final Thickness"
            outlined
            dense
            color="grey"
            type="number"
          />
        </v-col>

        <v-col cols="6" class="py-0">
          <v-text-field
            v-model="coil.pickled_weight"
            label="Weight (kg)"
            outlined
            dense
            color="grey"
            type="number"
            readonly
          />
        </v-col>
        <v-col cols="6" class="py-0">
          <v-text-field
            v-model="coil.rolled_weight"
            label="Final Weight (kg)"
            outlined
            dense
            color="grey"
            type="number"
          />
        </v-col>
         <v-col cols="6" class="py-0">
          <v-text-field
            v-model="coil.feedback_mode"
            label="Feedback Mode"
            outlined
            dense
            color="grey"
            type="number"
          />
        </v-col>
         <v-col cols="6" class="py-0">
          <v-text-field
            v-model="coil.massflow_mode"
            label="Massflow Mode"
            outlined
            dense
            color="grey"
            type="number"
          />
        </v-col>
        <v-col cols="6" class="py-0">
          <v-text-field
            v-model="coil.leader_end"
            label="Leader End"
            outlined
            dense
            color="grey"
          />
        </v-col>
        <v-col cols="6" class="py-0">
          <v-text-field
            v-model="coil.gauge_control"
            label="Gauge Control"
            outlined
            dense
            color="grey"
            type="number"
          />
        </v-col>
        <v-col cols="6" class="py-0">
          <v-text-field
            v-model="coil.surface_wavy"
            label="Surface OK/Wavy (%)"
            outlined
            dense
            color="grey"
            type="number"
          />
        </v-col>
        <v-col cols="6" class="py-0">
          <v-text-field
            v-model="coil.rolling_operator"
            label="Operator"
            outlined
            dense
            color="grey"
          />
        </v-col>
        <v-col cols="auto" class="body-2 pr-0 pt-0 pb-5">
          <v-checkbox
            color="grey darken-3"
            dense
            v-model="coil.rewinding"
            label="Rewinding Done"
            hide-details
            class="ma-0 pa-0 body-2"
          ></v-checkbox>
        </v-col>
        <v-col class="py-0" cols="12">
          <v-textarea
            v-model="coil.rolling_notes"
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
    </v-container>
    <v-divider />

    <!-- <v-divider /> -->

    <div class="ma-4 mt-5 float-right" v-if="!$route.path.includes('pickled')">
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
import slittedCoils from "@/services/slittedCoils";
export default {
  name: "CoilPreview",
  data() {
    return {
      coil: {},
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
    };
  },
  computed: {
    validateFields() {
      if (
        this.coil.rolling_thickness &&
        this.coil.rolling_passes &&
        this.coil.feedback_mode &&
        this.coil.massflow_mode &&
        this.coil.rolled_weight &&
        this.coil.gauge_control &&
        this.coil.surface_wavy &&
        this.coil.leader_end &&
        this.coil.rolling_operator 
      ) {
        return true;
      } else return false;
    },
    scrapWidth() {
      if (this.rows.length > 0) {
        let val = 0;
        this.rows.map((item) => {
          if (!item.actual_width) item.actual_width = 0;
          val = parseFloat(val) + parseFloat(item.actual_width);
        });
        return (this.rows[0].width - val).toFixed(3);
      } else return 0;
    },
    avilableWidth() {
      if (this.rows.length > 0) {
        let val = 0;
        this.rows.map((item) => {
          if (!item.slitted_width) item.slitted_width = 0;
          val = parseFloat(val) + parseFloat(item.slitted_width);
        });
        return (this.rows[0].width - val).toFixed(3);
      } else return 0;
    },

    validateForm() {
      let totalWidth = 0;
      // let totalWeight = 0;
      if (this.rows.length > 0) {
        this.rows.map((item) => {
          totalWidth = parseFloat(totalWidth) + parseFloat(item.slitted_width);
          // totalWeight = parseFloat(totalWeight) + parseFloat(item.slitted_weight)
        });
        if (this.rows[0].width >= totalWidth) return true;
        else return false;
      } else return true;
    },
  },
  mounted() {
    this.getOneSlit();
  },
  methods: {
    async saveCoil() {
      let data = [];
      let calendarDate = this.$options.filters.calendarDate(
        new Date().toISOString()
      );
      let status = "approve for rolling";
      if (this.checkRole("admin")) status = "rolled";
      data.push({
        rolling_thickness: this.coil.rolling_thickness,
        rolling_passes: this.coil.rolling_passes,
        feedback_mode: this.coil.feedback_mode,
        massflow_mode: this.coil.massflow_mode,
        rolled_weight: this.coil.rolled_weight,
        gauge_control: this.coil.gauge_control,
        surface_wavy: this.coil.surface_wavy,
        leader_end: this.coil.leader_end,
        rolling_operator: this.coil.rolling_operator,
        rewinding: this.coil.rewinding,
        rolling_notes: this.coil.rolling_notes
          ? this.coil.rolling_notes
          : "",
        status: status,
        id: this.coil.ID,
        updated_at: calendarDate
      });
      try {
        const result = await slittedCoils.update(data);
        // this.savedData = result.data[0];
        console.log("result", result);
      } catch (error) {
        console.log("error", error);
      } finally {
        this.$store.state.rolling.preview = false;
        let payload = {
          status: "in-process for rolling,approve for rolling",
        };
        // if(this.$router.path == '/pickling-stock') payload = {status: "slitted"}
        this.$store.dispatch("getSlittedCoils", payload);
      }
    },

    async getOneSlit() {
      try {
        const result = await slittedCoils.getOne(this.$store.state.slitId);
        this.coil = result.data.rows[0];
        console.log("coil", this.coil);
      } catch (error) {
        console.log("error", error);
      }
    },

    editFlag(type) {
      if (this.checkRole("admin")) return true;
      if (this.checkRole("member") && (type == "weight" || type == "width"))
        return false;
      else return true;
    },
    checkRole(role_name) {
      let user = JSON.parse(localStorage.getItem("user"));
      if (user && user.role == role_name) return true;
      else return false;
    },
    clearSearch(data) {
      console.log("data", data);
    },
    searchData() {},
    async getSlits() {
      try {
        const result = await coils.getSlits(this.$store.state.coilId);
        this.rows = result.data.rows;
        this.notes = this.rows[0].notes;
        console.log("result", result);
      } catch (error) {
        console.log("error", error);
      }
    },
    close() {
      this.$store.state.rolling.preview = false;
    },
  },
};
</script>