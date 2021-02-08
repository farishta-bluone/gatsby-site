<template>
  <v-container style= "background-color:#01579B; height: 100vh" fill-height fluid>
    <v-row 
      class="pa=0 ma-0" 
      align="center"
      justify="center"
    >
      <v-col class="text-center pa-0 ma-0" cols="6">
        <v-card
          class="mx-auto px-11 py-5"
          max-width="529"
          max-height="549"
          flat
          
        >
        <img height="100" src="../assets/images/VM_logo.png">
          <v-card-text class="text--primary">
            <p class="text-left mb-1">Username or Email Address</p>
            <v-text-field
              v-model="email"
              dense
              outlined
              single-line
              placeholder="Type email"
              color="grey"
            ></v-text-field>

            <div class="login">
              <p class="text-left mb-1">Password</p>
              <v-text-field
                v-model="pwd"
                dense
                outlined
                single-line
                placeholder="Type password"
                color="grey"
                type="password"
                @keyup.enter="submitHandler()"
              ></v-text-field>
            </div>
            
            <div class="d-flex justify-space-between mt-0">
              <div>
                <span @click="saveCreds" v-show="!rememberMe">
                  <v-icon color="grey darken-2" small>
                    mdi-circle-outline
                  </v-icon>
                </span>
                <span @click="saveCreds" v-show="rememberMe">
                  <v-icon color="green darken-2" small>
                    mdi-check-circle
                  </v-icon>
                </span>
                Remember Me
              </div>
              <div class="red--text">Forgot password?</div>
            </div>
            <div v-if="errorMsg" class="red--text text-left mt-2">{{errorMsg}}</div>
          </v-card-text>

          <v-card-actions class="mx-2">
            <v-btn 
              :dark="email.length > 0 && pwd.length > 0" 
              :disabled="email.length <= 0 || pwd.length <= 0 " 
              :loading="loading" 
              @click="submitHandler()" 
              color="#9932CC" 
              class="px-3 text-capitalize font-weight-medium" 
              >Sign In
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'Login',
  data: () => ({
    errorMsg: '',
    rememberMe: false,
    loading: false,
    email: '',
    pwd: ''
  }),
  mounted() {
    // this.$aes.setKey('myPassword')
    this.setItemsFromStorage()
  },
  methods: {
    setItemsFromStorage() {
    //   this.email = localStorage.getItem('email') ? localStorage.getItem('email') : ''
    //   this.pwd = localStorage.getItem('pwd') ? this.$aes.decrypt(localStorage.getItem('pwd')) : ''
    //   this.rememberMe = localStorage.getItem('email') === this.email 
    },
    saveCreds() {
      this.rememberMe = !this.rememberMe
    },
    async submitHandler() {
      this.loading = true
      let data = {
        email: this.email,
        password: this.pwd,
        type: "web"
      }
      console.log("data", data)
      if(this.email == "farishtav5@gmail.com" && this.pwd === "123456") {
          this.$router.push({path: '/list'})
      }
    //   try {
    //     const response = await login.userLogin(data)
    //     localStorage.setItem('access_token', response.data.token)
    //     this.$store.dispatch('user/getProfile')
    //     this.errorMsg = ''
    //     this.$router.push({path: '/news'})
    //   }
    //   catch (error) {
    //     this.errorMsg = error.response.data.message
    //   }
    //   finally {
    //     this.$store.state.logout = false
    //     if(this.rememberMe) {
    //     let encrypted = this.$aes.encrypt(this.pwd)
    //     localStorage.setItem('email', this.email)
    //     localStorage.setItem('pwd', encrypted)
    //   }
    //     this.loading = false
    //   }
    }
  }
};
</script>

<style>
.login .v-text-field.v-text-field--enclosed .v-text-field__details {
  margin-bottom: 0 !important ;
}
</style>
