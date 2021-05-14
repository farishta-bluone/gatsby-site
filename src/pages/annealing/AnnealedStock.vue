<template>
  <v-container fluid>
    <v-row justify="space-between" class="my-3">
      <v-col cols="auto">
        <h2 class="font-weight-bold">Annealed Stock</h2>
      </v-col>

      <v-col cols="auto" class="pb-0">
        <v-row justify="end">
          <v-col cols="auto">
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
        </v-row>
      </v-col>
    </v-row>
    <v-data-table
      :headers="headers"
      :items="$store.state.slittedCoils"
      :items-per-page="10"
      class="elevation-1 coils"
      :loading="$store.state.isLoading"
      fixed-header
      height="calc(100vh - 245px)"
      :footer-props="{
        'items-per-page-options': [5, 10, 25, 50, 100],
      }"
      :options.sync="options"
      :server-items-length="$store.state.totalRows"
    >
      <template v-slot:[`item.date`]="{ item }">
        <div class="body-2">
          <span>{{
            item.date
              ? $options.filters.formatDate(item.date)
              : "---"
          }}</span>
        </div>
      </template>
      <template v-slot:[`item.shift`]="{item}">
          <div class="body-2"> 
              <span class="text-capitalize">{{ getShiftName(item.shift) }}</span>
          </div>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      selected: [],
      selShift: "",
      selThickness: "",
      options: {},
      sortBy: "",
      orderBy: "desc",
      addedFromMenu: false,
      addedFrom: null,
      maxDate: new Date().toISOString(),
      headline: "",
      statusList: [
        { id: 1, name: "Available" },
        { id: 2, name: "In-Queue" },
        { id: 3, name: "Slitted" },
      ],
      headers: [
        {
          text: "Slit No",
          align: "start",
          value: "slit_no",
          sortable: false,
        },
        { text: "OD (mm)", value: "pickling_od" },
        { text: "Thickness (mm)", value: "rolling_thickness", sortable: false },
        { text: "Weight (kg)", value: "rolled_weight", sortable: false },
        { text: "Width (mm)", value: "pickled_width", sortable: false },
        // { text: "Status", value: "status", sortable: false },
        { text: "Charge No.", value: "charge_no", sortable: false },
        { text: "Annealing Date", value: "date", sortable: false },
        { text: "Annealing Shift", value: "shift", sortable: false},
      ],
    };
  },
  mounted() {
    this.$store.dispatch("getAnnealedCoils", { page: 1, limit: 10 });
    this.$store.dispatch("getThicknesses");
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
  },
  computed: {
  },
  methods: {
    getShiftName(shift) {
      if(shift === 1) return 'Day Shift'
      else if(shift === 2) return 'Night Shift'
      else return '24 Hour Shift'
    },
    setOptions() {
      if (this.options.page === 1) {
        this.searchData();
      } else this.options.page = 1;
    },
    clearSearch(type) {
      if (type === "date") this.addedFrom = null;
      else if (type === "thickness") this.selThickness = null;
      else if (type === "shift") this.selShift = null;
      this.setOptions();
    },
    searchData() {
      let payload = {};
      const { page, itemsPerPage } = this.options;
      payload.page = page;
      payload.limit = itemsPerPage;

      if (this.addedFrom) payload.date = this.addedFrom;
      if (this.selThickness) payload.rolling_thickness = this.selThickness;
      // if(this.selShift) payload.slit_shift = this.selShift
      this.$store.dispatch("getAnnealedCoils", payload);
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