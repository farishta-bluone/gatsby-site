<template>
  <div>
    <v-app-bar
      color="#01579B"
      dark
      fixed
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    <!-- <v-avatar
        color="white"
        class="mx-5"
        size="45"
        >
        <img  src="../assets/images/VM_logo.png">
    </v-avatar> -->
    
      <v-toolbar-title class="title font-weight-bold">Vanser Metallics</v-toolbar-title>

      <v-spacer></v-spacer>

      <span class="subtitle-1 font-weight-bold mx-3">Farishta Sharma</span>
    
      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>

      

      <!-- <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn> -->

      <v-btn icon>
        <v-icon>mdi-login</v-icon>
      </v-btn>
      <div style="cursor: pointer">Logout</div>
    </v-app-bar>
  </div>
</template>