<template>
  <v-card max-width="500" class="mx-auto" flat>
    <v-container>
      <v-row>
        <v-col cols="12">
          <router-link to="/your_pet">
            <v-card color="#385F73" dark>
              <v-layout row justify-center>
                <v-card-title class="headline">
                  Your Pet
                </v-card-title>

                <v-icon dark right>
                  mdi-dog
                </v-icon>
              </v-layout>
            </v-card>
          </router-link>
        </v-col>
        <v-col cols="12">
          <router-link to="/offerdata1">
            <v-card color="#385F73" dark>
              <v-layout row justify-center>
                <v-card-title class="headline">
                  Offer Data
                </v-card-title>

                <v-icon dark right>
                  mdi-chart-bar
                </v-icon>
              </v-layout>
            </v-card>
          </router-link>
        </v-col>
        <v-col cols="12">
          <router-link to="/reward">
            <v-card color="#385F73" dark>
              <v-layout row justify-center>
                <v-card-title class="headline">
                  Reward
                </v-card-title>

                <v-icon dark right>
                   mdi-gift 
                </v-icon>
              </v-layout>
            </v-card>
          </router-link>
        </v-col>

        <!-- <v-col v-for="(item, i) in items" :key="i" cols="12">
          <v-card :color="item.color" dark>
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title
                  class="headline"
                  v-text="item.title"
                ></v-card-title>
              </div>
            </div>
          </v-card>
        </v-col> -->
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data: () => ({}),
}
</script>
