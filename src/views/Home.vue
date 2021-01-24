<template>
  <div class="home">
    <Card />
  </div>
</template>

<script>
import Card from "@/components/Card_Top.vue"
// import Grid from "@/components/Grid.vue"
// import Contact from "@/components/Contact.vue"

export default {
  name: "Home",

  components: { Card },
}
</script>

<style scoped>
.home {
  margin: 30px 10%;
  /* background-color: #d7dbde; */
}
</style>
