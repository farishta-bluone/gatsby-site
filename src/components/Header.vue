<template>
  <div>
    <v-app-bar
      color="#455A64"
      dark
      fixed
      style="z-index: 11"
    >
      <v-app-bar-nav-icon  @click="showMenu()"></v-app-bar-nav-icon>
    <!-- <v-avatar
        color="white"
        class="mx-5"
        size="45"
        >
        <img  src="../assets/images/VM_logo.png">
    </v-avatar> -->
    
      <v-toolbar-title class="title font-weight-bold">Vanser Metallics</v-toolbar-title>

      <v-spacer></v-spacer>

      <span class="subtitle-1 font-weight-bold mx-3 text-capitalize">{{user.name}}</span>
      <span class="subtitle-1 font-weight-bold mx-3 text-capitalize">{{user.role}}</span>
    
      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>

      

      <!-- <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn> -->

      <v-btn icon>
        <v-icon>mdi-login</v-icon>
      </v-btn>
      <div @click="logout" style="cursor: pointer">Logout</div>
    </v-app-bar>
  </div>
</template>

<script>

  export default {
    name: 'Header',
    data () {
      return { 

      }
    },
    computed: {
      user() {
        return JSON.parse(localStorage.getItem('user'))
      },
    },
    methods: {
      showMenu() {
      this.$store.state.menu = true
      this.$store.state.miniMenu = !this.$store.state.miniMenu
    },
    logout () {
      // this.$store.state.logout = true
      localStorage.removeItem('privileges');
      localStorage.removeItem('user');
      localStorage.removeItem('access_token');
      this.$router.push({path: '/login'})
    },
    }
  }
</script>
