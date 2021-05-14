<template>
  <v-container>
    <v-row>
      <v-dialog
        v-model="$store.state.annealing.report"
        max-width="750px"
        class="py-5"
        @click:outside="clearData"
      >
        <v-card>
          <v-card-title>
            <p class="body-1 font-weight-bold">{{ formTitle }}</p>
          </v-card-title>

          <v-card-text>
              <v-container >
                  <v-row style="border: 1px solid black">
                      <v-col cols="3" class="pr-0">
                          <b>Base Number</b>
                      </v-col>
                      <v-col cols="1" class="pr-0"><b>01</b></v-col>
                      <v-col cols="1" class="pr-0"><b>02</b></v-col>
                      <v-col cols="1" class="pr-0"><b>03</b></v-col>
                      <v-col cols="1" class="pr-0"><b>04</b></v-col>
                      <v-col cols="1" class="pr-0"><b>05</b></v-col>
                      <v-col cols="1" class="pr-0"><b>06</b></v-col>
                      <v-col cols="1" class="pr-0"><b>07</b></v-col>
                      <v-col cols="1" class="pr-0"><b>08</b></v-col>
                  </v-row>
                  <v-row style="border: 1px solid black; min-height: 90px" align="center">
                      <v-col cols="3" class="pr-0">
                          <b>Charge Number</b>
                      </v-col>
                      <v-col
                        cols="1"
                        class="pr-0"
                      >
                        {{data[0].charge ? data[0].charge : "N/A"}}
                      </v-col>
                      <v-col
                        cols="1"
                        class="pr-0"
                      >
                        {{data[1].charge ? data[1].charge : "N/A"}}
                      </v-col>
                      <v-col
                        cols="1"
                        class="pr-0"
                      >
                        {{data[2].charge ? data[2].charge : "N/A"}}
                      </v-col>
                      <v-col
                        cols="1"
                        class="pr-0"
                      >
                        {{data[3].charge ? data[3].charge : "N/A"}}
                      </v-col>
                      <v-col
                        cols="1"
                        class="pr-0"
                      >
                        {{data[4].charge ? data[4].charge : "N/A"}}
                      </v-col>
                      <v-col
                        cols="1"
                        class="pr-0"
                      >
                        {{data[5].charge ? data[5].charge : "N/A"}}
                      </v-col>
                      <v-col
                        cols="1"
                        class="pr-0"
                      >
                        {{data[6].charge ? data[6].charge : "N/A"}}
                      </v-col>
                      <v-col
                        cols="1"
                        class="pr-0"
                      >
                        {{data[7].charge ? data[7].charge : "N/A"}}
                      </v-col>
                      
                  </v-row>
                  <v-row style="border: 1px solid black; min-height: 90px" align="center">
                      <v-col cols="3" class="pr-0">
                          <b>Temperature (°C)</b>
                      </v-col>
                      <v-col
                        cols="1"
                        class="pr-0"
                      >
                        <v-text-field
                          v-model="data[0].temp"
                        ></v-text-field>
                      </v-col>
                      <v-col
                        cols="1"
                        class="pr-0"
                      >
                        <v-text-field
                          v-model="data[1].temp"
                        ></v-text-field>
                      </v-col>
                      <v-col
                        class="pr-0"
                        cols="1"
                      >
                        <v-text-field
                          v-model="data[2].temp"
                        ></v-text-field>
                      </v-col>
                      <v-col
                        cols="1"
                        class="pr-0"
                      >
                        <v-text-field
                          v-model="data[3].temp"
                        ></v-text-field>
                      </v-col>
                      <v-col
                        cols="1"
                        class="pr-0"
                      >
                        <v-text-field
                          v-model="data[4].temp"
                        ></v-text-field>
                      </v-col>
                      <v-col
                        cols="1"
                        class="pr-0"
                      >
                        <v-text-field
                          v-model="data[5].temp"
                        ></v-text-field>
                      </v-col>
                      <v-col
                        cols="1"
                        class="pr-0"
                      >
                        <v-text-field
                          v-model="data[6].temp"
                        ></v-text-field>
                      </v-col>
                      <v-col
                        cols="1"
                        class="pr-0"
                      >
                        <v-text-field
                          v-model="data[7].temp"
                        ></v-text-field>
                      </v-col>
                  </v-row>
              </v-container>
          </v-card-text>

          <v-card-actions class="pb-5 mt-3">
            <v-spacer></v-spacer>
            <v-btn outlined text @click="close"> Cancel </v-btn>
            <v-btn @click="savePlanning" dark>
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-container>
</template>

<script>
// import slittedCoils from "@/services/slittedCoils";
import annealing from "@/services/annealing";
export default {
  components: {},
  data() {
    return {
      selDate: null,
      dateMenu: false,
      batches: [],
      data: [
        {id: null, charge: null, temp: null, base: 1},
        {id: null, charge: null, temp: null, base: 2},
        {id: null, charge: null, temp: null, base: 3},
        {id: null, charge: null, temp: null, base: 4},
        {id: null, charge: null, temp: null, base: 5},
        {id: null, charge: null, temp: null, base: 6},
        {id: null, charge: null, temp: null, base: 7},
        {id: null, charge: null, temp: null, base: 8},
      ]
    };
  },
  mounted() {
    this.getBatches()
  },
  computed: {
    getSelBatch(base_no) {
      let selBatch = this.batches.filter(item => item.base == base_no)
      if(selBatch.length > 0) return selBatch[0]
      else return {charge_no: "", temperature: 0}
    },
    formTitle() {
      return "Furnace Report";
    },
    haltSave() {
      let flag = false;
      if (this.$store.state.rolling.selRows.length > 0) {
        for (let item of this.$store.state.rolling.selRows) {
          if (!item.rolling_date || !item.rolling_shift || !item.rolling_thickness) {
            flag = true;
            break;
          }
        }

        return flag;
      } else {
        return true;
      }
    },
  },
  methods: {
    getBatches() {
        return annealing.get({status: 'in-process for annealing'})
          .then((res) => {
            this.batches = res.data.rows
            this.setReport()
          })
          .catch((error) => console.log("error", error))
      },
    setReport() {
      for(let item of this.batches) {
        let index = this.data.findIndex(val => val.base == item.base)
        this.data[index].id = item.id
        this.data[index].charge = item.charge_no
        this.data[index].temp = item.temperature
      }
    },
    clearData() {
      this.$store.state.rolling.selRows = [];
    },
    async savePlanning() {
      let _data = this.data.filter(item => item.id)
      await annealing.updateReport(_data)
      this.$store.state.annealing.report = false
      this.$store.dispatch('annealing/getBatches', {status: 'in-queue for annealing,in-process for annealing,approve for annealing'})
    },
    close() {
      this.$store.state.annealing.report = false;
      this.$store.state.annealing.selRows = [];
    },
  },
};
</script>
