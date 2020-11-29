<template>
  <v-card color="#b0e0e6" href="https://masu2011.jp/" target="_blank">
    <v-card-title class="headline"
      >イベント事業部<span
        ><v-icon x-large>mdi-balloon</v-icon></span
      ></v-card-title
    >
    <v-divider class="mx-3"></v-divider>
    <v-card-text>
      <div class="body-1 mb-1">
        幼稚園・保育園・子供会・各種イベントにてショーを開催。イベント装飾や大道芸教室も開催。老若男女問わず出逢ったその瞬間・空間・時間を笑顔にできるサポートをしております。
      </div>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn href="https://www.facebook.com/profile.php?id=100007983075260"
        ><v-icon color="blue" x-large>mdi-facebook</v-icon></v-btn
      >
      <v-btn href="https://www.instagram.com/masumasu42/?hl=ja"
        ><v-icon color="red" x-large>mdi-instagram</v-icon></v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    //
  }),
}
</script>

<style scoped>
a {
  text-decoration: none;
  color: #2c3e50;
}
a:hover {
  color: #767f88;
  cursor: pointer;
  transition: 0.3s;
}
</style>
