<template>
  <v-container fluid>
    <v-row justify="space-between" class="my-3">
      <v-col cols="auto">
        <h2 class="font-weight-bold">HR Coils</h2>
      </v-col>
      <v-col cols="auto" class="text-right">
        <v-btn
          dark
          class="mr-4 body-2 font-weight-bold"
          @click="slittedCoilForm"
          >Add Slitted Coil</v-btn
        >
        <v-btn dark class="mr-1 body-2 font-weight-bold" @click="openForm"
          >Add Coil</v-btn
        >
      </v-col>
      <v-col cols="12" class="pb-0">
        <v-row justify="end">
          <v-col cols="auto" v-if="selMultiRows.length > 0">
            <v-btn
              :dark="!preventDeletion"
              :disabled="preventDeletion"
              class="pt-4 pb-4 font-weight-bold"
              @click="deleteMultipleCoils"
              >Delete Coils</v-btn
            >
          </v-col>
          <v-col cols="auto" v-if="selMultiRows.length > 0">
            <v-btn
              :dark="!preventSlitting"
              :disabled="preventSlitting"
              class="pt-4 pb-4 font-weight-bold"
              @click="openSlitForm"
              >Create Slits</v-btn
            >
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
                :max="maxDate"
              >
              </v-date-picker>
            </v-menu>
          </v-col>
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
          <!-- <v-col
                        class="d-flex"
                        cols="auto"
                    >
                        <v-select
                        outlined
                        dense
                        v-model.number="selShift"
                        :items="$store.state.shifts"
                        label="Select Slit Shift"
                        item-text="name"
                        item-value="id"
                        color="grey"
                        @input="setOptions"
                        clearable
                        @click:clear="clearSearch('shift')"
                        class="select-box"
                        ></v-select>
                    </v-col> -->
          <v-col class="d-flex" cols="auto">
            <v-select
              outlined
              dense
              v-model="selStatus"
              :items="statusList"
              label="Select Coil Status"
              item-text="name"
              item-value="name"
              color="grey"
              @input="setOptions"
              clearable
              @click:clear="clearSearch('status')"
              class="select-box"
            ></v-select>
          </v-col>

          <v-col class="d-flex" cols="auto">
            <v-select
              outlined
              dense
              v-model.number="selCompany"
              :items="$store.state.companies"
              label="Select Company"
              item-text="name"
              item-value="id"
              color="grey"
              @input="setOptions"
              clearable
              @click:clear="clearSearch('company')"
              class="select-box"
            ></v-select>
          </v-col>
          <!-- <v-col cols="auto" class="text-right">
                <v-btn dark   class=" mr-1 body-2 font-weight-bold" @click="openForm">Add Coil</v-btn>
            </v-col> -->
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
      v-model="selMultiRows"
      :headers="headers"
      :items="coilRows"
      :items-per-page="10"
      class="elevation-1 coils"
      :loading="$store.state.isLoading"
      :footer-props="{
        'items-per-page-options': [5, 10, 25, 50, 100],
      }"
      fixed-header
      height="calc(100vh - 300px)"
      :options.sync="options"
      :server-items-length="$store.state.totalRows"
      :single-select="singleSelect"
      show-select
    >
      <template v-slot:[`item.company`]="{ item }">
        <div class="body-2">
          <span>{{ showCompany(item.company) }}</span>
        </div>
      </template>
      <template v-slot:[`item.date`]="{ item }">
        <div class="body-2">
          <span>{{
            item.date ? $options.filters.formatDate(item.date) : "---"
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
        <v-menu>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on">
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>

          <v-list dense>
            <v-list-item
              v-for="val in item.actions"
              :key="val.text"
              @click="actions(val.text, item)"
            >
              <v-list-item-icon class="mr-0">
                <v-icon class="mt-1" small v-text="val.icon" />
              </v-list-item-icon>
              <v-list-item-title class="body-2 text-capitalize mt-1">
                {{ val.text }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>
    </v-data-table>
    <AddCoil v-if="$store.state.coilDrawer" />
    <CoilPreview v-if="$store.state.slitDrawer" />
    <AddSlittedCoil v-if="$store.state.slittedDrawer" />
  </v-container>
</template>

<script>
import coils from "@/services/coils";
import AddCoil from "@/components/drawers/AddCoil";
import CoilPreview from "@/components/drawers/CoilPreview";
import AddSlittedCoil from "@/components/drawers/AddSlittedCoil";
export default {
  components: {
    AddCoil,
    CoilPreview,
    AddSlittedCoil,
  },
  data() {
    return {
      selShift: "",
      selThickness: "",
      selMultiRows: [],
      singleSelect: false,
      actionsList: [
        { icon: "mdi-plus-circle", text: "create slit" },
        { icon: "mdi-pencil", text: "edit" },
        { icon: "mdi-delete", text: "delete" },
        { icon: "mdi-view-grid", text: "preview planning" },
      ],
      options: {},
      sortBy: "",
      orderBy: "desc",
      selCompany: null,
      selStatus: null,
      addedFromMenu: false,
      addedFrom: null,
      maxDate: new Date().toISOString(),
      headline: "",
      statusList: [
        { id: 1, name: "In-Transit" },
        { id: 2, name: "Available" },
        { id: 3, name: "In-Queue" },
        { id: 4, name: "Require Approval" },
        { id: 5, name: "Slitted" },
      ],
      headers: [
        {
          text: "ID",
          align: "start",
          value: "id",
        },
        { text: "Company", value: "company", sortable: false },
        { text: "Parent Coil ID", value: "brand_no", sortable: false },
        { text: "Date of Receiving", value: "date" },
        { text: "Status", value: "status", sortable: false },
        // { text: 'OD (mm)', value: 'od' },
        { text: "Thickness (mm)", value: "thickness" },
        { text: "Weight (kg)", value: "weight" },
        // { text: 'Billed Weight (kg)', value: 'formulated_weight' },
        { text: "Width (mm)", value: "width" },
        { text: "Actions", value: "actions", sortable: false },
      ],
    };
  },
  mounted() {
    let access = JSON.parse(localStorage.getItem("user")).access;
    if (access && access.hr_stock) {
      this.$store.dispatch("getCompanies");
      this.$store.dispatch("getShifts");
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
    preventDeletion() {
      let items = [];
      this.selMultiRows.map((row) => {
        if (row.status != "available" && row.status != "in-transit") {
          items.push(row);
        }
      });
      if (items.length > 0) return true;
      else return false;
    },
    preventSlitting() {
      let index = this.selMultiRows.findIndex(
        (item) => item.status.toLowerCase() != "available"
      );
      if (index >= 0) return true;
      else return false;
    },
    coilRows() {
      return this.$store.state.coils.filter((item) => {
        let actions = [];
        if (item.status === "available")
          actions = [
            { icon: "mdi-plus-circle", text: "create slit" },
            { icon: "mdi-pencil", text: "edit" },
            { icon: "mdi-content-duplicate", text: "duplicate" },
            { icon: "mdi-delete", text: "delete" },
          ];
        else if (item.status === "slitted")
          actions = [{ icon: "mdi-view-grid", text: "preview planning" }];
        else if (item.status === "in-transit")
          actions = [
            { icon: "mdi-pencil", text: "edit" },
            { icon: "mdi-check-circle", text: "change to available" },
            { icon: "mdi-content-duplicate", text: "duplicate" },
            { icon: "mdi-delete", text: "delete" },
          ];
        else
          actions = [
            { icon: "mdi-view-grid", text: "preview planning" },
            { icon: "mdi-pencil", text: "edit planning" },
          ];
        return (item.actions = actions);
      });
    },
  },
  methods: {
    async duplicateCoil(item) {
      let data = {
        brand_no: `${item.brand_no} copy`,
        company: item.company,
        created_at: this.$options.filters.calendarDate(
          new Date().toISOString()
        ),
        date: this.$options.filters.calendarDate(item.date),
        formulated_weight: item.formulated_weight,
        shift: item.shift,
        status: item.status,
        thickness: item.thickness,
        width: item.width,
        weight: item.weight,
      };
      try {
        const result = await coils.add(data);
        console.log("result", result);
      } catch (error) {
        console.log("error", error);
      } finally {
        this.$store.dispatch("getCoils", { page: 1, limit: 10 });
      }
    },
    deleteMultipleCoils() {
      let ids = [];
      this.selMultiRows.map((item) => {
        ids.push(item.id);
      });
      this.deleteCoil(ids);
    },
    showCompany(id) {
      if (this.$store.state.companies.length > 0)
        return this.$store.state.companies.find((val) => val.id == id).name;
      else return "";
    },
    actions(text, item) {
      if (text === "change to available") {
        let currentDate = this.$options.filters.calendarDate(
          new Date().toISOString()
        );
        this.editCoil(item.id, {
          status: "available",
          updated_at: currentDate,
          date: currentDate,
        });
      }
      if (text === "delete") this.deleteCoil([item.id]);
      if (text === "edit") {
        this.$store.state.coilId = item.id;
        this.$store.state.coilData = item;
        this.$store.state.coilDrawer = true;
        // this.editCoil(item);
      } else {
        this.$store.state.coilId = null;
        this.$store.state.coilData = {};
      }
      if (text === "create slit") {
        this.$store.state.coilId = item.id;
        this.$store.state.selRows = [item];
        this.$router.push({ path: "/slit-planning" });
      }
      if (text === "preview planning") {
        this.$store.state.coilId = item.id;
        this.$store.state.slitDrawer = true;
        console.log("preview");
      }
      if (text === "edit planning") {
        this.$store.state.coilId = item.id;
        this.$router.push({ path: `/slit-planning/${item.id}` });
      }
      if (text === "duplicate") {
        this.duplicateCoil(item);
      }
    },
    openSlitForm() {
      this.$store.state.selRows = this.selMultiRows;
      this.$router.push({ path: "/slit-planning" });
    },
    setOptions() {
      console.log("Calleddddddd");
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
    openForm() {
      this.$store.state.coilId = null;
      this.$store.state.coilDrawer = true;
    },
    slittedCoilForm() {
      this.$store.state.coilId = null;
      this.$store.state.slittedDrawer = true;
    },

    clearSearch(type) {
      if (type === "date") this.addedFrom = null;
      else if (type === "status") this.selStatus = null;
      else if (type === "company") this.selCompany = null;
      else if (type === "thickness") this.selThickness = null;
      else if (type === "shift") this.selShift = null;
      this.setOptions();
    },
    searchData() {
      let payload = {};
      const { page, itemsPerPage } = this.options;
      payload.sortBy = this.sortBy;
      payload.orderBy = this.orderBy;
      payload.page = page;
      payload.limit = itemsPerPage;
      if (this.selCompany) payload.company = this.selCompany;
      if (this.selStatus) payload.status = this.selStatus.toLowerCase();
      if (this.addedFrom) payload.date = this.addedFrom;
      if (this.selThickness) payload.thickness = this.selThickness;
      if (this.selShift) payload.slit_shift = this.selShift;
      this.$store.dispatch("getCoils", payload);
    },
    async deleteCoil(id) {
      try {
        const result = await coils.delete(id);
        this.$store.dispatch("getCoils", { page: 1 });
        // this.rows = result.data.rows;
        console.log("result", result);
      } catch (error) {
        console.log("error", error);
      } finally {
        this.selMultiRows = [];
      }
    },
    async editCoil(id, data) {
      try {
        const result = await coils.update(id, data);
        this.$store.dispatch("getCoils", { page: 1 });
        // this.rows = result.data.rows;
        console.log("result", result);
      } catch (error) {
        console.log("error", error);
      } finally {
        this.$store.dispatch("getCoils", { page: 1 });
      }
    },
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