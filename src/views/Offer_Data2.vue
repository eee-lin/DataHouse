<template>
    <div>
        <v-card
            class="mx-auto my-5"
            max-width="344"
        >
            <v-img
            src="https://media.istockphoto.com/vectors/pet-insurance-vector-id1206532252"
            height="200px"
            ></v-img>

            <v-card-title>
            アニポット損害保険株式会社
            </v-card-title>

            <v-card-subtitle>
            獲得可能報酬：2000ポイント
            </v-card-subtitle>

            <v-card-actions>
            <v-btn
                color="orange lighten-2"
                text
            >
                詳細
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn
                icon
                @click="show = !show"
            >
                <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-btn>
            </v-card-actions>

            <v-expand-transition>
            <div v-show="show">
                <v-divider></v-divider>

                <v-list-item>
                <v-list-item-action>
                <v-icon>mdi-database-arrow-up</v-icon>
                </v-list-item-action>

                <v-list-item-content>
                <v-list-item-title>必要データ</v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                <v-list-item-title>柴犬</v-list-item-title>
                </v-list-item-action>
            </v-list-item>

            <v-divider inset></v-divider>
            
            <v-list-item>
                <v-list-item-action>
                <v-icon>mdi-cash-100</v-icon>
                </v-list-item-action>

                <v-list-item-content>
                <v-list-item-title>報酬額</v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                <v-list-item-title>2000P</v-list-item-title>
                </v-list-item-action>
            </v-list-item>
            
            <v-divider inset></v-divider>

            <v-list-item>
                <v-list-item-action>
                <!--<v-icon>mdi-cash-100</v-icon>-->
                </v-list-item-action>

                <v-list-item-content>
                <v-list-item-title color="#64829D">データをオファーする</v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                <v-btn icon to="/offerdata3">
                        <v-icon>mdi-chevron-right</v-icon>
                </v-btn>
                </v-list-item-action>
            </v-list-item>
            
            <v-divider inset></v-divider>

            </div>
            </v-expand-transition>
        </v-card>

        <v-card
            class="mx-auto my-5"
            max-width="344"
        >
            <v-img
            src="https://t.pimg.jp/024/971/321/1/24971321.jpg"
            height="200px"
            ></v-img>

            <v-card-title>
            〇〇損害保険株式会社
            </v-card-title>

            <v-card-subtitle>
            獲得可能報酬：1000ポイント
            </v-card-subtitle>

            <v-card-actions>
            <v-btn
                color="orange lighten-2"
                text
            >
                詳細
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn
                icon
                @click="show = !show"
            >
                <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-btn>
            </v-card-actions>

            <v-expand-transition>
            <div v-show="show">
                <v-divider></v-divider>

                <v-card-text>
                    にゃあちゃんかわい！！！！！
                </v-card-text>
            </div>
            </v-expand-transition>
        </v-card>
        <v-card
            class="mx-auto my-5"
            max-width="344"
        >
            <v-img
            src="https://t.pimg.jp/041/109/138/1/41109138.jpg"
            height="200px"
            ></v-img>

            <v-card-title>
            〇〇少額短期保険株式会社
            </v-card-title>

            <v-card-subtitle>
            獲得可能報酬：500ポイント
            </v-card-subtitle>

            <v-card-actions>
            <v-btn
                color="orange lighten-2"
                text
            >
                詳細
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn
                icon
                @click="show = !show"
            >
                <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-btn>
            </v-card-actions>

            <v-expand-transition>
            <div v-show="show">
                <v-divider></v-divider>

                <v-list-item>
                <v-list-item-action>
                <v-icon>mdi-paw</v-icon>
                </v-list-item-action>

                <v-list-item-content>
                <v-list-item-title>名前</v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                <v-icon>mdi-chevron-right</v-icon>
                </v-list-item-action>
            </v-list-item>

            <v-divider inset></v-divider>
            
                <v-card-text>
                    にゃあちゃんかわい！！！！！
                </v-card-text>
            </div>
            </v-expand-transition>
        </v-card>
    </div>
</template>

<script>
  export default {
    data: () => ({
      show: false,
    }),
  }
</script>