<template>
  <v-container fluid>
    <v-row justify="space-between" class="mt-3 mb-0">
      <v-col cols="auto" class="my-0 pb-0">
        <h2 class="pb-0 font-weight-bold">Rolled Coils Stock</h2>
        <p class="caption grey--text text--darken-2 py-0">Ready for annealing</p>
      </v-col>

      <v-col cols="auto" class="pb-0 my-0">
        <v-row justify="end" class="my-0 py-0">
          <v-col cols="auto" class="my-0 py-0">
            <v-btn
              :dark="!selMultiRows.length > 0"
              :disabled="selMultiRows.length > 0"
              class="py-4 body-2 font-weight-bold"
              @click="openDrawer"
              >Create Planning</v-btn
            >
          </v-col>
          <v-col cols="auto" v-if="selMultiRows.length > 0" class="my-0 py-0">
            <v-btn
              :dark="!preventRewinding"
              :disabled="preventRewinding"
              class="py-4 mr-1 body-2 font-weight-bold"
              @click="rewindCoil(selMultiRows, 'many')"
              >Rewind Coils</v-btn
            >
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-row justify="end" class="my-0 py-0">
      <v-col class="d-flex py-0 my-0" cols="auto">
        <v-select
          outlined
          dense
          v-model.number="selThickness"
          :items="$store.state.thicknessList"
          label="Select Thickness"
          item-text="value"
          item-value="value"
          color="grey"
          @input="setOptions"
          clearable
          @click:clear="clearSearch('thickness')"
          class="select-box"
        ></v-select>
      </v-col>
      <v-col cols="auto" class="py-0 my-0">
        <v-menu
          ref="menu"
          v-model="addedFromMenu"
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
              v-model="addedFrom"
              placeholder="Select Date"
              readonly
              v-bind="attrs"
              v-on="on"
              clearable
              @click:clear="clearSearch('date')"
              class="body-1"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="addedFrom"
            no-title
            scrollable
            @input="addedFromMenu = false"
            @change="setOptions"
          >
          </v-date-picker>
        </v-menu>
      </v-col>
      <v-col
        class="red--text caption py-0"
        color="red"
        cols="12"
        v-if="preventRewinding"
        >You can rewind rolled coils only.</v-col
      >
    </v-row>
    <v-data-table
      v-model="selMultiRows"
      :headers="headers"
      :items="$store.state.slittedCoils"
      :items-per-page="10"
      :single-select="singleSelect"
      item-key="ID"
      show-select
      class="elevation-1 coils"
      :loading="$store.state.isLoading"
      fixed-header
      height="calc(100vh - 320px)"
      :footer-props="{
        'items-per-page-options': [5, 10, 25, 50, 100],
      }"
      :options.sync="options"
      :server-items-length="$store.state.totalRows"
    >
      <template v-slot:[`item.rolling_date`]="{ item }">
        <div class="body-2">
          <span>{{
            item.rolling_date ? $options.filters.formatDate(item.rolling_date) : "---"
          }}</span>
        </div>
      </template>
      <template v-slot:[`item.status`]="{ item }">
        <div class="body-2">
          <span :class="getTextColor(item.status)" class="text-capitalize">{{
            item.status
          }}</span>
        </div>
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <v-btn 
          v-if="item.status === 'rolled'" 
          @click="rewindCoil(item, 'one')" 
          small 
          outlined
        >
          Rewind Coil
        </v-btn>
      </template>
    </v-data-table>
    <AnnealingPlanning v-if="$store.state.annealing.drawer"/>
  </v-container>
</template>

<script>
// import coils from "@/services/coils";
import AnnealingPlanning from "@/components/drawers/AnnealingPlanning";
import slittedCoils from "@/services/slittedCoils";
export default {
  components: {
    AnnealingPlanning
  },
  data() {
    return {
      selMultiRows: [],
      selDate: null,
      dateMenu: false,
      data: [],
      selThickness: "",
      singleSelect: false,
      options: {},
      sortBy: "",
      orderBy: "desc",
      selStatus: null,
      addedFromMenu: false,
      addedFrom: null,
      headers: [
        {
          text: "Coil No",
          align: "start",
          value: "slit_no",
          sortable: false,
        },
        { text: "Parent Coil ID", value: "brand_no", sortable: false },
        { text: "Thickness (mm)", value: "rolling_thickness", sortable: false },
        { text: "Weight (kg)", value: "rolled_weight", sortable: false },
        { text: "Width (mm)", value: "pickled_width", sortable: false },
        { text: "Status", value: "status", sortable: false },
        { text: "Rolling Date", value: "rolling_date", sortable: false },
        { text: "Actions", value: "actions", sortable: false, align: "end" },
      ],
    };
  },
  mounted() {
    this.$store.state.annealing.selRows = [];
    this.$store.state.selSlits = [];
    this.$store.dispatch("getShifts");
    this.$store.dispatch("furnaces/getFurnaceList");
    this.$store.dispatch("bases/getBaseList");
    let access = JSON.parse(localStorage.getItem("user")).access;
    if (access && access.slits_stock) {
      this.$store.dispatch("getSlittedCoils", { status: "rolled,rewinded", page: 1, limit: 10 });
      this.$store.dispatch("getThicknesses");
    } else this.$router.push({ name: "forbidden" });
  },
  watch: {
    options: {
      handler(newVal) {
        const { sortBy, sortDesc } = newVal;
        if (sortBy.length === 1 && sortDesc.length === 1) {
          if (sortDesc[0] == true) this.orderBy = "desc";
          else this.orderBy = "asc";
          this.sortBy = sortBy[0];
        }
        this.searchData();
      },
      deep: true,
    },
    '$store.state.annealing.selRows' (newVal) {
      if(newVal.length === 0 && this.selMultiRows.length > 0)
        this.selMultiRows = []
    }
  },
  computed: {
    preventRewinding() {
      let index = this.selMultiRows.findIndex(
        (item) => item.status.toLowerCase() != "rolled"
      );
      if (index >= 0) return true;
      else return false;
    },
  },
  methods: {
    openDrawer() {
      this.$store.state.annealing.batchId = null
      this.$store.state.annealing.drawer = true
    },
    openReport() {
      this.$store.state.annealing.report = true
    },
      async saveRewindedCoil() {
      let data = [];
      let calendarDate = this.$options.filters.calendarDate(
        new Date().toISOString()
      );
      // data.status = "in-process for pickilng";
      // data.slittedItems = [...this.$store.state.annealing.selRows];
      this.$store.state.annealing.selRows.map((item) => {
        data.push({
          status: "rewinded",
          id: item.ID,
          updated_at: calendarDate,
        });
      });

      try {
        const result = await slittedCoils.update(data);
        console.log("result", result);
      } catch (error) {
        console.log("error", error);
      } finally {
          this.$store.state.annealing.selRows = []
          this.selMultiRows = []
        let payload = {
          status: "rolled,rewinded",
        };
        this.$store.dispatch("getSlittedCoils", payload);
      }
    },
    rewindCoil(item, type) {
      item.dateMenu = false;
      if(type === "one") this.$store.state.annealing.selRows = [Object.assign({}, item)];
      else this.$store.state.annealing.selRows = item
      this.saveRewindedCoil()
    },
    openDialog() {
      this.$store.state.annealing.selRows = [...this.selMultiRows]
      this.$store.state.annealing.selRows.map((item) => {
        item.dateMenu = false;
      });
    },
    setOptions() {
      if (this.options.page === 1) {
        this.searchData();
      } else this.options.page = 1;
    },
    getTextColor(type) {
      let color = "";
      switch (type) {
        case "slitted":
          color = "grey--text text--darken-1";
          break;
        case "available":
          color = "green--text text--darken-2";
          break;
        case "edit-required":
          color = "red--text text--lighten-1";
          break;
        default:
          color = "yellow--text text--darken-4";
          break;
      }
      return color;
    },
    clearSearch(type) {
      if (type === "date") this.addedFrom = null;
      else if (type === "status") this.selStatus = null;
      else if (type === "thickness") this.selThickness = null;
      this.setOptions();
    },
    searchData() {
      let payload = { status: "rolled,rewinded" };
      const { page, itemsPerPage } = this.options;
      payload.page = page;
      payload.limit = itemsPerPage;

      if (this.addedFrom) payload.rolling_date = this.addedFrom;
      if (this.selThickness) payload.rolling_thickness = this.selThickness;
      this.$store.dispatch("getSlittedCoils", payload);
    }
  },
};
</script>


<style>
.v-data-table.coils > .v-data-table__wrapper > table > thead > tr > th {
  font-size: 16px !important;
  color: black !important;
}
.v-data-table.coils > .v-data-table__wrapper > table > tbody > tr > td {
  /* padding: 10px 10px ; */
}
.customize-list .v-list-item {
  min-height: 33px !important;
}
.search-list {
  color: grey !important;
  padding-top: 18px !important;
  padding-bottom: 20px !important;
}
.select-box.v-text-field.v-text-field--enclosed {
  max-width: 200px;
}
</style>