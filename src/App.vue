<template>
  <div id="app">
    <v-app>
      <TheNavigation />
      <v-main>
        <v-container fluid>
          <div class="container" v-if="authenticatedUser">
            <router-view></router-view>
          </div>
          <div class="login" v-else>
            <v-container py-10 px-20 class="mx-auto">
              <v-text-field
                v-model="mailaddress"
                :rules="rules"
                label="メールアドレス"
                placeholder="abc@gmail.com"
                outlined
              />
              <v-text-field
                v-model="password"
                :rules="rules"
                label="パスワード"
                placeholder="パスワード"
                outlined
              />
              <v-btn color="success" class="ma-2 white--text" @click="signupUser"
                >サインアップ</v-btn
              >
              <v-btn color="info" class="ma-2 white--text" @click="loginUser"
                >ログイン</v-btn
              >
            </v-container>
          </div> 
        </v-container>
      </v-main>

      <v-footer app>
        <Footer />
      </v-footer>
    </v-app>
  </div>
</template>

<script>
import firebase from "./firebase/firebase"
import TheNavigation from "@/components/TheNavigation.vue"
import Footer from "@/components/Footer.vue"
export default {
  components: {
    TheNavigation,
    Footer,
  },
  data() {
    return {
      authenticatedUser: false,
      mailaddress: null,
      password: null,
    }
  },

  methods: {
    //サインアップ
    signupUser() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.mailaddress, this.password)
        .then(
          // 成功時の処理
          alert("サインアップ成功")
        )
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code
          var errorMessage = error.message
          console.log(errorCode)
          console.log(errorMessage)
        })
    },
    /* ログイン */
    loginUser() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.mailaddress, this.password)
        .then(
          // 成功時の処理
          alert("Success!")
        )
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code
          var errorMessage = error.message
          console.log(errorCode)
          console.log(errorMessage)
        })
    },
    /* ログアウト */
    logoutUser() {
      firebase.auth().signOut()
    },
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log("login")
        this.authenticatedUser = true
      } else {
        console.log("logout")
        this.authenticatedUser = false
      }
    })
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
a {
  text-decoration: none;
}
</style>
