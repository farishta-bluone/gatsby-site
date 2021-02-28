<template>
  <v-card class="flex d-flex flex-column">
    <v-card-title>
      <v-row justify="space-between">
        <v-col
          class="py-0"
          cols="8"
        >
          <v-select
            v-model.number="card.thickness"
            :items="$store.state.thicknessList"
            label="Select Thickness"
            item-text="value"
            item-value="value"
            color="grey"
            @input="setOptions"
            clearable
            @click:clear="clearSearch()"
            class="select-box"
          ></v-select>
        </v-col>
        <v-col cols="auto">
          <v-btn small outlined @click="close">Close</v-btn>
        </v-col>
      </v-row>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="card.slittedCoils"
      hide-default-footer
      :loading="isLoading"
    ></v-data-table>
  </v-card>
</template>

<script>
import slittedCoils from '@/services/slittedCoils';
  export default {
    data () {
      return {
        slittedCoils: [],
        isLoading: false,
        selThickness: null,
        headers: [
          {
            text: 'Coil No',
            sortable: false,
            filterable: false,
            value: 'slit_no',
          },
          { text: 'Width (mm)', value: 'slitted_width', sortable: false },
          { text: 'Weight (kg)', value: 'slitted_weight', sortable: false}
        ]
      }
    },
    props: {card: Object},
    mounted() {
      this.$store.dispatch('getThicknesses');
    },
    methods: {
      setOptions() {
        let payload = {status: "slitted"}
        if(this.card.thickness) {
          payload.thickness = this.card.thickness; 
          this.getSlittedCoils(payload);
        }
        else this.card.slittedCoils = []
      },
      clearSearch() {
        this.card.thickness = null
        this.setOptions();
      },
      getSlittedCoils(payload) {
        this.isLoading = true
        return slittedCoils.get(payload)
          .then((res) => {
            this.card.slittedCoils = res.data.rows;
          })
          .catch((error) => console.log("error",error))
          .finally(() => this.isLoading = false)
      },
      close() {
        let index = this.$store.state.slitCards.findIndex(item => item.id == this.card.id)
        this.$store.state.slitCards.splice(index,1)
      }
    }
  }
</script>