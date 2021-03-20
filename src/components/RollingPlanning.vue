<template>
  <v-container>
    <v-row>
      <v-dialog
        v-model="$store.state.rolling.dialog"
        max-width="700px"
        class="py-5"
        @click:outside="clearData"
      >
        <v-card>
          <v-card-title>
            <p class="body-1 font-weight-bold">{{ formTitle }}</p>
          </v-card-title>

          <v-card-text>
            <v-container>
              <v-row
                v-for="(item, index) in $store.state.rolling.selRows"
                :key="index"
              >
                <v-col cols="3" class="py-0">
                  <v-text-field
                    outlined
                    readonly
                    color="grey"
                    dense
                    v-model="item.slit_no"
                    label="Coil No"
                  ></v-text-field>
                </v-col>
                <v-col cols="3" class="py-0">
                  <v-menu
                    ref="dates"
                    v-model="item.dateMenu"
                    :close-on-content-click="true"
                    transition="scale-transition"
                    offset-y
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        dense
                        outlined
                        color="grey"
                        v-model="item.rolling_date"
                        placeholder="Date"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                        clearable
                        class="body-1"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="item.rolling_date"
                      no-title
                      scrollable
                      @input="item.dateMenu = false"
                    >
                    </v-date-picker>
                  </v-menu>
                </v-col>
                <v-col class="py-0 my-0" cols="3">
                  <v-select
                    outlined
                    dense
                    v-model.number="item.rolling_shift"
                    :items="$store.state.shifts"
                    label="Shift"
                    item-text="name"
                    item-value="id"
                    color="grey"
                  ></v-select>
                </v-col>
                <v-col class="py-0 my-0" cols="3">
                  <v-text-field
                    outlined
                    dense
                    v-model.number="item.rolling_thickness"
                    label="Final Thickness"
                    type="number"
                    color="grey"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>

          <v-card-actions class="pb-5 mt-3">
            <v-spacer></v-spacer>
            <v-btn outlined text @click="close"> Cancel </v-btn>
            <v-btn @click="savePlanning" :dark="!haltSave" :disabled="haltSave">
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-container>
</template>

<script>
import slittedCoils from "@/services/slittedCoils";
export default {
  components: {},
  data() {
    return {
      selDate: null,
      dateMenu: false,
    };
  },
  mounted() {
    this.$store.dispatch("getShifts");
  },
  computed: {
    formTitle() {
      if (this.$route.path === "/rolling-stock")
        return "Create Rolling Planning";
      else return "Edit Rolling Planning";
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
    clearData() {
      this.$store.state.rolling.selRows = [];
    },
    async savePlanning() {
      let data = [];
      let calendarDate = this.$options.filters.calendarDate(
        new Date().toISOString()
      );
      // data.status = "in-process for pickilng";
      // data.slittedItems = [...this.$store.state.rolling.selRows];
      this.$store.state.rolling.selRows.map((item) => {
        data.push({
          rolling_shift: item.rolling_shift,
          rolling_thickness: item.rolling_thickness,
          rolling_date: item.rolling_date,
          status: "in-process for rolling",
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
        this.$store.state.rolling.dialog = false;
        let payload = {
          status: "in-process for rolling,approve for rolling",
        };
        if (this.$route.path == "/rolling-stock")
          payload = { status: "pickled" };
        this.$store.dispatch("getSlittedCoils", payload);
      }
    },
    close() {
      this.$store.state.rolling.dialog = false;
      this.$store.state.rolling.selRows = [];
    },
  },
};
</script>
