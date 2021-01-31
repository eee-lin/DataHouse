<template>
 <div>
   <p>柴犬を選択してください</p>
    <v-card
      class="mx-auto, my-5"
    >
      <v-container>

          <v-col
            v-for="(item, i) in items"
            :key="i"
            cols="12"
          >
            <v-card
              :color="item.color"
              dark
            >
              <div class="d-flex flex-no-wrap justify-space-between">
                <div>
                  <v-card-title
                    class="headline"
                    v-text="item.title"
                  ></v-card-title>

                  <v-card-subtitle v-text="item.age"></v-card-subtitle>

                  <v-card-actions>
      
                    <v-btn
                      class="ml-2 mt-5"
                      outlined
                      rounded
                      small
                    >
                      詳細
                    </v-btn>
                    
                  </v-card-actions>
                </div>

                <v-avatar
                  class="ma-3"
                  size="125"
                  tile
                >
                  <v-img :src="item.src"></v-img>
                </v-avatar>
              </div>
            </v-card>
          </v-col>
        
      </v-container>
    </v-card>
    
    <div 
    class="text-center, my-5"
    >
    <v-btn
      to="/offerdata4"
      rounded
      color="#556B2F"
      dark
    >
    次へ
    </v-btn>
    </div>

  </div>
</template>


<script>
  export default {
    data: () => ({
      items: [
        {
          color: '#952175',
          src: 'https://pbs.twimg.com/profile_images/1209993799260225536/SSdZ4FG3_400x400.jpg',
          title: 'ぽち',
          age: '8才6ヶ月',
        },
        {
          color: '#1F7087',
          src: 'https://www.petfamilyins.co.jp/pns/wp-content/uploads/2019/06/1M-Apidon_shutterstock_628398320-300x200.jpg.webp',
          title: 'にゃあ',
          age: '2才9ヶ月',
        },
        {
          color: '#1F7087',
          src: 'https://d1e3tkalbms7za.cloudfront.net/wp-content/uploads/2015/02/06114657/8c80cbf41ffd3c075939cd923792384b-e1483617235580.jpg',
          title: 'レオン',
          age: '1才3ヶ月',
          //species: 'スコティッシュ・フォールド',
        },
      ],
    }),
  }
</script>