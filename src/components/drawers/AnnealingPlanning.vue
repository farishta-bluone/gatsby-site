<template>
  <v-navigation-drawer
    v-if="$store.state.annealing.drawer"
    v-model="$store.state.annealing.drawer"
    temporary
    right
    width="400"
    style="position: fixed; top: 0; right: 0; overflow-y: scroll; z-index: 101"
  >
    <div class="subtitle-1 font-weight-bold px-4 py-2">
      <span>{{ $store.state.annealing.batchId ? "Edit Planning" : "Create Planning" }}</span>
      <v-icon class="float-right" @click="close"> mdi-close-circle </v-icon>
    </div>
    <v-divider />
    <v-container>
      <v-row class="px-4 mt-4">
        <v-col cols="12" class="py-0">
          <v-autocomplete
            v-model.trim="selCoils"
            :items="$store.state.slittedCoils"
            item-text="slit_no"
            item-value="ID"
            label="Select Coils"
            outlined
            color="grey"
            dense
            :return-object="false"
            multiple
            :readonly="$store.state.annealing.batchId ? true : false"
          />
        </v-col>
        <v-col class="py-0 my-0" cols="6">
            <v-select
                outlined
                dense
                v-model="data.base"
                :items="$store.state.bases.baseList"
                label="Select Base"
                item-text="name"
                item-value="id"
                color="grey" 
            ></v-select>
        </v-col>
        <v-col class="py-0 my-0" cols="6">
            <v-select
                outlined
                dense
                v-model="data.furnace"
                :items="$store.state.furnaces.furnaceList"
                label="Select Furnace"
                item-text="name"
                item-value="id"
                color="grey" 
            ></v-select>
        </v-col>
        <v-col cols="6" class="py-0">
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
        <v-col class="py-0 my-0" cols="6">
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
        </v-col>
        <v-col cols="6" class="py-0">
          <v-text-field
            v-model="data.charge_no"
            label="Charge No"
            outlined
            dense
            color="grey"
          />
        </v-col>
        <v-col class="py-0 my-0" cols="6">
            <v-select
                outlined
                dense
                v-model="data.priority"
                :items="priorities"
                label="Select Priority"
                color="grey" 
            ></v-select>
        </v-col>
        <v-col class="py-0" cols="12">
          <v-textarea
            v-model="data.notes"
            outlined
            color="grey"
            auto-grow
            dense
            rows="1"
            label="Remarks"
          ></v-textarea>
        </v-col>
      </v-row>
    </v-container>
    <v-divider />
    <div class="ma-4 mt-8 float-right">
      <v-btn class="mr-2" outlined @click="close"> Cancel </v-btn>
      <v-btn @click="submitHandler()" :dark="validateForm" :disabled="!validateForm">
        Save
      </v-btn>
    </div>
  </v-navigation-drawer>
</template>

<script>
import annealing from "@/services/annealing";
import thicknesses from "@/services/thicknesses";
export default {
  name: "AddCoil",
  data() {
    return {
      selCoils: [],
      drawer: null,
      data: {},
      maxDate: new Date().toISOString(),
      dateMenu: false,
      selDate: null,
      selThickness: null,
      coilStatus: "available",
      priorities: ["P1", "P2", "P3", "P4", "P5", "P6"],
      prevStatus: ""
    };
  },
  computed: {
    validateForm() {
      if (
        this.selCoils.length > 0 &&
        this.data.shift &&
        this.data.base &&
        this.selDate &&
        this.data.furnace &&
        this.data.charge_no &&
        this.data.priority
      )
        return true;
      else return false;
    },
  },
  mounted() {
    if (this.$store.state.annealing.batchId) {
      let coilData = Object.assign({}, this.$store.state.annealing.selItem);
      let date = this.$options.filters.calendarDate(coilData.date).split(" ");
      this.selDate  = date;
      this.prevStatus = coilData.status
      for(let item of coilData.coils.split(",")) {
          this.selCoils.push(parseInt(item))
      }
      const { base, furnace, shift, charge_no, priority, notes } = coilData;
      this.selDate = date[0];
      this.data = { base, furnace, shift, charge_no, priority, notes };
    } else {
      this.data = {};
      this.selCoils = []
      this.selDate = null
    }
  },
  methods: {
    submitHandler() {
        if(this.$store.state.annealing.batchId) this.editBatch()
        else this.addBatch()
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
    async addBatch() {
        let date = this.$options.filters.calendarDate(
          new Date().toISOString()
        );
        this.data.date = this.selDate
        this.data.created_at = date
        this.data.updated_at = date
        this.data.coils = this.selCoils.toString()
        this.data.status = "in-queue for annealing"
        try {
          this.$store.state.annealing.drawer = false;
          this.$store.state.isLoading = true;
          const result = await annealing.add(this.data);
          console.log("result", result);
        } catch (error) {
          console.log("error", error);
        } finally {
          this.$store.state.isLoading = false;
          if (this.$store.state.annealing.batchId) this.$store.dispatch('annealing/getBatches', {status: 'in-queue for annealing,in-process for annealing,approve for annealing'})
          else this.$store.dispatch("getSlittedCoils", { status: "rolled,rewinded", page: 1, limit: 10 })
        }
     
    },
    async editBatch() {
        let date = this.$options.filters.calendarDate(
          new Date().toISOString()
        );
        this.data.date = this.selDate
        this.data.updated_at = date
        this.data.coils = this.selCoils.toString()
        this.data.status = this.prevStatus === "approve for annealing" ? "annealed" : "in-queue for annealing"
        try {
          this.$store.state.annealing.drawer = false;
          this.$store.state.isLoading = true;
          const result = await annealing.update(this.$store.state.annealing.batchId, this.data);
          console.log("result", result);
        } catch (error) {
          console.log("error", error);
        } finally {
          this.$store.state.isLoading = false;
          if (this.$store.state.annealing.batchId) this.$store.dispatch('annealing/getBatches', {status: 'in-queue for annealing,in-process for annealing,approve for annealing'})
          else this.$store.dispatch("getSlittedCoils", { status: "rolled,rewinded", page: 1, limit: 10 })
        }
     
    },
    close() {
      this.$store.state.annealing.drawer = false;
    },
  },
};
</script>