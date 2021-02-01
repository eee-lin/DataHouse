<template>
    <div>
         <v-card
            class="mx-auto"
            max-width="500"
        >
            <v-toolbar
            color="#00ACC1"
            dark
            >

            <v-toolbar-title>Offer Data</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>
            </v-toolbar>

            <v-container fluid>
            <v-row dense>
                <v-col
                v-for="card in cards"
                :key="card.title"
                :cols="card.flex"
                >
                <v-card>
                    <v-img
                    :src="card.src"
                    class="white--text align-end"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                    height="200px"
                    >
                    <v-card-title v-text="card.title"></v-card-title>
                    </v-img>

                    <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn icon to="/offerdata2">
                        <v-icon>mdi-chevron-right</v-icon>
                    </v-btn>
                    </v-card-actions>
                </v-card>
                </v-col>
            </v-row>
            </v-container>
        </v-card>
    </div>
 
</template>

<script>
  export default {
    data: () => ({
      cards: [
        { title: '保険会社から選ぶ', src: 'https://thumb.ac-illust.com/5f/5f494c85ccc1ac62446587e117f1602f_w.jpeg', flex: 12 },
        { title: 'カルテの写真を撮る', src: 'https://img.fumumu.net/wp-content/uploads/2018/06/sirabee20180620phone1-1200x800.jpg', flex: 6 },
        { title: 'ペットから選ぶ', src: 'https://www.advance-real.co.jp/web/blog/wp-content/uploads/2020/06/suginami_salon_0.jpg', flex: 6 },
      ],
    }),
  }
</script>