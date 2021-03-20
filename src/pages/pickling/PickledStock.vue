<template>
  <v-container fluid>
    <v-row justify="space-between" class="my-3">
      <v-col cols="auto">
        <h2 class="font-weight-bold">Pickled Stock</h2>
      </v-col>

      <v-col cols="auto" class="pb-0">
        <v-row justify="end">
          <v-col class="d-flex" cols="auto">
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
      <v-col
        class="red--text caption py-0"
        color="red"
        cols="12"
        v-if="preventSlitting"
        >You can create slits for available coils only.</v-col
      >
    </v-row>
    <v-data-table
      :headers="headers"
      :items="$store.state.slittedCoils"
      class="elevation-1 coils"
      :loading="$store.state.isLoading"
      disable-pagination
      fixed-header
      height="calc(100vh - 190px)"
      hide-default-footer
    >
      <template v-slot:[`item.pickling_date`]="{ item }">
        <div class="body-2">
          <span>{{
            item.pickling_date
              ? $options.filters.formatDate(item.pickling_date)
              : "---"
          }}</span>
        </div>
      </template>
      <template v-slot:[`item.loss`]="{ item }">
        <div class="body-2">
          <span class="red--text text--darken-4"
            >{{
              (
                ((item.actual_weight - item.pickled_weight) /
                  item.actual_weight) *
                100
              ).toFixed(2)
            }}
            %</span
          >
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
      selCompany: null,
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
        { text: "OD (mm)", value: "pickling_od" },
        { text: "Operator", value: "pickling_operator" },
        { text: "Thickness (mm)", value: "pickled_thickness", sortable: false },
        { text: "Weight (kg)", value: "pickled_weight", sortable: false },
        { text: "Width (mm)", value: "pickled_width", sortable: false },
        { text: "Pickling Date", value: "pickling_date", sortable: false },
        { text: "Picking Loss", value: "loss", sortable: false },
      ],
    };
  },
  mounted() {
    this.$store.dispatch("getSlittedCoils", { status: "pickled" });
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
    setOptions() {
      this.searchData();
    },
    clearSearch(type) {
      if (type === "date") this.addedFrom = null;
      else if (type === "thickness") this.selThickness = null;
      else if (type === "shift") this.selShift = null;
      this.setOptions();
    },
    searchData() {
      let payload = { status: "pickled" };
      if (this.addedFrom) payload.pickling_date = this.addedFrom;
      if (this.selThickness) payload.pickled_thickness = this.selThickness;
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