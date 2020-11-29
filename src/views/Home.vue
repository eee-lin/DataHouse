<template>
  <div class="home">
    <Carousel />
    <div class="services">
      <Grid />
    </div>
    <div class="contact"><Contact /></div>
  </div>
</template>

<script>
import Carousel from "@/components/Carousel.vue"
import Grid from "@/components/Grid.vue"
import Contact from "@/components/Contact.vue"

export default {
  name: "Home",
  components: { Carousel, Grid, Contact },
}
</script>

<style scoped>
.home {
  margin: 30px 10%;
}
.services {
  margin: 30px 0;
}
</style>
