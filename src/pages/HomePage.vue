<template>
  <v-container fluid class="mt-">
    <v-card flat>
      <v-tabs v-model="tabs" color="black">
        <v-tab><h3>Total Coils</h3></v-tab>
      </v-tabs>

      <v-tabs-items v-model="tabs" class="mt-4">
        <v-tab-item>
          <avilable-coils-list />
        </v-tab-item>
        <!-- <v-tab-item>
        <SlittedCoilsList />
      </v-tab-item> -->
      </v-tabs-items>
    </v-card>
  </v-container>
</template>

<script>
import AvilableCoilsList from "@/components/AvilableCoilsList";
// import SlittedCoilsList from '@/components/SlittedCoilsList';
export default {
  name: "HomePage",
  data() {
    return {
      tabs: null,
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    };
  },
  components: {
    AvilableCoilsList,
    // SlittedCoilsList
  },
};
</script>