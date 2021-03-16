<template>
  <v-navigation-drawer
    v-if="$store.state.coilDrawer"
    v-model="$store.state.coilDrawer"
    temporary
    right
    width="360"
    style="position: fixed; top: 0; right: 0; overflow-y: scroll; z-index: 101"
  >
    <div class="subtitle-1 font-weight-bold px-4 py-2">
      <span>{{ $store.state.coilId ? "Edit Coil" : "Add Coil" }}</span>
      <v-icon class="float-right" @click="close"> mdi-close-circle </v-icon>
    </div>
    <v-divider />
    <v-container>
      <v-row class="px-4 mt-4">
        <v-col cols="12" class="py-0">
          <v-combobox
            v-model.trim="selCompany"
            :items="$store.state.companies"
            item-text="name"
            label="Company"
            outlined
            color="grey"
            dense
            :return-object="false"
            @change="changeCompany"
          />
        </v-col>
        <v-col cols="12" class="py-0">
          <v-menu
            ref="menu"
            v-model="dateMenu"
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
                v-model="selDate"
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
              v-model="selDate"
              no-title
              scrollable
              @input="dateMenu = false"
              @change="searchData"
            >
            </v-date-picker>
          </v-menu>
        </v-col>
        <!-- <v-col class="py-0 my-0" cols="12">
                  <v-select
                        outlined
                        dense
                        v-model="data.shift"
                        :items="$store.state.shifts"
                        label="Select Shift"
                        item-text="name"
                        item-value="id"
                        color="grey"
                        
                        ></v-select>
                </v-col> -->
        <v-col cols="12" class="py-0">
          <v-text-field
            v-model="data.brand_no"
            outlined
            label="Parent Coil ID"
            color="grey"
            dense
          />
        </v-col>
        <v-col cols="12" class="py-0">
          <v-combobox
            v-model.number="selThickness"
            :items="$store.state.thicknessList"
            item-text="value"
            label="Thickness (mm)"
            outlined
            color="grey"
            dense
            :return-object="false"
            @change="changeThickness"
            type="number"
          />
        </v-col>
        <v-col cols="12" class="py-0">
          <v-text-field
            v-model.number="data.width"
            label="Width (mm)"
            outlined
            dense
            color="grey"
            type="number"
          />
        </v-col>
        <v-col cols="12" class="py-0">
          <v-text-field
            v-model.number="data.weight"
            label="Actual Weight (kg)"
            outlined
            dense
            color="grey"
            type="number"
          />
        </v-col>
        <v-col cols="12" class="py-0">
          <v-text-field
            v-model.number="data.formulated_weight"
            label="Billed Weight (kg)"
            outlined
            dense
            color="grey"
            type="number"
          />
        </v-col>
        <v-col cols="12" class="py-0 my-0">
          <v-radio-group class="py-0 my-0" v-model="coilStatus" row dense>
            <span class="mr-3 grey--text text--darken-2">Status</span>
            <v-radio
              label="In-Transit"
              value="in-transit"
              color="grey darken-3"
            ></v-radio>
            <v-radio
              label="Available"
              value="available"
              color="grey darken-3"
            ></v-radio>
          </v-radio-group>
        </v-col>
        <!-- <v-col cols="12" class="py-0">
                <v-text-field
                  v-model.number="data.od"
                  label="OD (mm)"
                  outlined
                  dense
                  color="grey"
                  type="number"
                />
              </v-col> -->
      </v-row>
    </v-container>
    <v-divider />
    <div class="ma-4 mt-8 float-right">
      <v-btn class="mr-2" outlined @click="close"> Cancel </v-btn>
      <v-btn @click="addCoil" :dark="validateForm" :disabled="!validateForm">
        Save
      </v-btn>
    </div>
  </v-navigation-drawer>
</template>

<script>
import coils from "@/services/coils";
import companies from "@/services/companies";
import thicknesses from "@/services/thicknesses";
export default {
  name: "AddCoil",
  data() {
    return {
      selCompany: "",
      drawer: null,
      data: {},
      maxDate: new Date().toISOString(),
      dateMenu: false,
      selDate: null,
      selThickness: null,
      coilStatus: "available",
    };
  },
  computed: {
    validateForm() {
      if (
        this.selCompany &&
        this.selDate &&
        this.data.brand_no &&
        this.selThickness &&
        this.data.width &&
        this.data.weight &&
        this.data.formulated_weight
      )
        return true;
      else return false;
    },
  },
  mounted() {
    if (this.$store.state.coilId) {
      let coilData = Object.assign({}, this.$store.state.coilData);
      let date = this.$options.filters.calendarDate(coilData.date).split(" ");
      let result = this.$store.state.companies.find(
        (item) => item.id == coilData.company
      );
      this.selCompany = result.name;

      const { brand_no, width, weight, formulated_weight, status } = coilData;
      this.selDate = date[0];
      this.selThickness = coilData.thickness;
      this.coilStatus = coilData.status;
      // this.time = date[1].split(":")[0] + ':' + date[1].split(":")[1]
      this.data = { brand_no, width, weight, formulated_weight, status };
    } else this.data = {};
  },
  methods: {
    changeThickness(name) {
      let index = this.$store.state.thicknessList.findIndex(
        (item) => item.value == name
      );
      if (index < 0 && name.trim().length > 0) {
        this.addThickness(name.trim());
      }
    },
    changeCompany(name) {
      let index = this.$store.state.companies.findIndex(
        (item) => item.name.trim().toLowerCase() == name.trim().toLowerCase()
      );
      if (index < 0 && name.trim().length > 0) {
        this.addCompany(name.trim());
      }
    },
    clearSearch(data) {
      console.log("data", data);
    },
    searchData() {},
    async addThickness(name) {
      try {
        const result = await thicknesses.add({ value: parseFloat(name) });
        console.log("result", result);
      } catch (error) {
        console.log("error", error);
      } finally {
        this.$store.dispatch("getThicknesses");
      }
    },
    async addCompany(company) {
      try {
        const result = await companies.add({ name: company });
        console.log("result", result);
      } catch (error) {
        console.log("error", error);
      } finally {
        this.$store.dispatch("getCompanies");
      }
    },
    async addCoil() {
      let tempStatus = this.data.status;
      if (tempStatus === "in-transit" && this.coilStatus === "available") {
        this.selDate = this.$options.filters.calendarDate(
          new Date().toISOString()
        );
      }
      this.data.thickness = this.selThickness;
      this.data.status = this.coilStatus;
      if (this.selCompany) {
        let result = this.$store.state.companies.find(
          (item) => item.name.trim() == this.selCompany.trim()
        );
        this.data.company = result.id;
      }
      if (this.$store.state.coilId) this.editCoil();
      else {
        this.data.date = `${this.selDate}`;
        this.data.created_at = this.$options.filters.calendarDate(
          new Date().toISOString()
        );
        try {
          this.$store.state.coilDrawer = false;
          this.$store.state.isLoading = true;
          const result = await coils.add(this.data);
          console.log("result", result);
        } catch (error) {
          console.log("error", error);
        } finally {
          this.$store.state.isLoading = false;
          this.$store.dispatch("getCoils", { page: 1, limit: 10 });
        }
      }
    },
    async editCoil() {
      this.data.status = this.coilStatus;
      this.data.date = `${this.selDate}`;
      this.data.updated_at = this.$options.filters.calendarDate(
        new Date().toISOString()
      );
      console.log("data", this.data);
      try {
        this.$store.state.coilDrawer = false;
        this.$store.state.isLoading = true;
        const result = await coils.update(this.$store.state.coilId, this.data);
        // this.rows = result.data.rows;
        console.log("result", result);
      } catch (error) {
        console.log("error", error);
      } finally {
        this.$store.state.isLoading = false;
        this.$store.dispatch("getCoils", { page: 1, limit: 10 });
      }
    },
    close() {
      this.$store.state.coilDrawer = false;
    },
  },
};
</script>