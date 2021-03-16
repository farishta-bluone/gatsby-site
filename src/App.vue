<template>
  <v-app>
    <component :is="layout">
      <router-view />
    </component>
  </v-app>

  <!-- <v-app>
    <component :is="layout"> </component> 
    <v-main>
      <router-view/>
    </v-main>
  </v-app> -->
</template>

<script>
const default_layout = "default";

export default {
  name: "App",
  computed: {
    layout() {
      return (this.$route.meta.layout || default_layout) + "-layout";
    },
  },
  mounted() {
    if (localStorage.getItem("access_token") && localStorage.getItem("user")) {
      this.$store.dispatch("getUsers", {
        id: JSON.parse(localStorage.getItem("user")).id,
      });
    }
  },

  data: () => ({
    //
  }),
};
</script>

<style>
.app-color {
  background-color: "#9932CC";
}
</style>
