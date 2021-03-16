<template>
  <v-container fluid>
    <v-row justify="space-between" class="my-3">
      <v-col cols="auto">
        <h2 class="font-weight-bold">Compare Slits</h2>
      </v-col>
      <v-col cols="auto" class="text-right">
        <v-btn dark @click="addSlits" class="mr-1 body-2 font-weight-bold"
          >Add Filter</v-btn
        >
      </v-col>
    </v-row>
    <v-row class="justify-center">
      <v-col
        lg="4"
        sm="6"
        cols="12"
        class="d-flex flex-column"
        v-for="(item, index) in $store.state.slitCards"
        :key="index"
      >
        <SlitsCard :card="item" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SlitsCard from "@/components/SlitsCard";
export default {
  components: {
    SlitsCard,
  },
  data() {
    return {
      count: 1,
    };
  },
  mounted() {
    this.$store.state.slitCards = [
      { id: 1, thickness: null, slittedCoils: [] },
    ];
    this.$store.dispatch("getThicknesses");
  },
  methods: {
    addSlits() {
      this.count++;
      this.$store.state.slitCards.push({
        id: this.count,
        thickness: null,
        slittedCoils: [],
      });
    },
  },
};
</script>