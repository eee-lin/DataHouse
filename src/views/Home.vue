<template>
  <div class="home">
    <Card />
  </div>
</template>

<script>
import Card from "@/components/Card_Top.vue"
import firebase from "../firebase/firebase"
// import Grid from "@/components/Grid.vue"
// import Contact from "@/components/Contact.vue"

export default {
  name: "Home",
  components: { Card },
  methods: {
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

<style scoped>
.home {
  margin: 30px 10%;
  /* background-color: #d7dbde; */
}
</style>
