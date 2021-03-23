<template>
  <v-container fluid>
    <v-row justify="space-between" class="my-3">
      <v-col cols="auto">
        <h2 class="pb-0 font-weight-bold">Slitted Coils Stock</h2>
        <p class="caption grey--text text--darken-2">Ready for pickling</p>
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
          <v-col cols="auto" v-if="$store.state.selRows.length > 0">
            <v-btn
              dark
              class="py-5 mr-1 body-2 font-weight-bold"
              @click="openDialog"
              >Create Pickling Planning</v-btn
            >
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-data-table
      v-model="$store.state.selRows"
      :headers="headers"
      :items="$store.state.slittedCoils"
      :items-per-page="10"
      :single-select="singleSelect"
      item-key="ID"
      show-select
      class="elevation-1 coils"
      :loading="$store.state.isLoading"
      fixed-header
      height="calc(100vh - 265px)"
      :footer-props="{
        'items-per-page-options': [5, 10, 25, 50, 100],
      }"
      :options.sync="options"
      :server-items-length="$store.state.totalRows"
    >
      <template v-slot:[`item.company`]="{ item }">
        <div class="body-2">
          <span>{{ showCompany(item.company) }}</span>
        </div>
      </template>
      <template v-slot:[`item.slit_date`]="{ item }">
        <div class="body-2">
          <span>{{
            item.date ? $options.filters.formatDate(item.slit_date) : "---"
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
        <v-btn @click="createPlanning(item)" small outlined
          >Create Pickling Planning</v-btn
        >
      </template>
    </v-data-table>
    <v-row>
      <PicklingPlanning v-if="$store.state.picklingDialog" />
    </v-row>
  </v-container>
</template>

<script>
import PicklingPlanning from "@/components/PicklingPlanning";
export default {
  components: {
    PicklingPlanning,
  },
  data() {
    return {
      selDate: null,
      dateMenu: false,
      data: [],
      dialog: false,
      selShift: "",
      selThickness: "",
      selRows: [],
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
        { text: "Thickness (mm)", value: "thickness", sortable: false },
        { text: "Weight (kg)", value: "actual_weight", sortable: false },
        { text: "Width (mm)", value: "actual_width", sortable: false },
        { text: "Slitting Date", value: "slit_date", sortable: false },
        { text: "Actions", value: "actions", sortable: false, align: "end" },
      ],
    };
  },
  mounted() {
    this.$store.state.selRows = [];
    this.$store.state.selSlits = [];
    this.$store.dispatch("getShifts");
    let access = JSON.parse(localStorage.getItem("user")).access;
    if (access && access.slits_stock) {
      this.$store.dispatch("getSlittedCoils", { status: "slitted" });
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
  },
  computed: {
  },
  methods: {
    createPlanning(item) {
      item.dateMenu = false;
      this.$store.state.selSlits = [item];
      this.$store.state.picklingDialog = true;
    },
    openDialog() {
      this.$store.state.selRows.map((item) => {
        item.dateMenu = false;
      });
      this.$store.state.picklingDialog = true;
      this.$store.state.selSlits = [...this.$store.state.selRows];
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
      else if (type === "shift") this.selShift = null;
      this.setOptions();
    },
    searchData() {
      let payload = { status: "slitted" };
      const { page, itemsPerPage } = this.options;
        payload.page = page;
        payload.limit = itemsPerPage;

      if (this.addedFrom) payload.slit_date = this.addedFrom;
      if (this.selThickness) payload.thickness = this.selThickness;
      // if(this.selShift) payload.slit_shift = this.selShift
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