<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="12" md="6" lg="6">
        <CardFilm outlined tile />
      </v-col>
      <v-col cols="12" sm="12" md="6" lg="6">
        <CardEvent />
        <!-- <v-card class="pa-2" outlined tile> </v-card> -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CardFilm from "@/components/Card_film.vue"
import CardEvent from "@/components/Card_event.vue"
export default {
  components: {
    CardFilm,
    CardEvent,
  },
}
</script>

<style></style>
