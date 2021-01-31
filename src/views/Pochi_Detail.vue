<template>
 <div>
    <v-row justify="center">
        <v-col
        cols="12"
        sm="8"
        >
        <v-card>
            <v-card-title class="cyan darken-1">
            <span class="headline white--text">ペットを登録</span>

            <v-spacer></v-spacer>

            <v-btn
                dark
                icon
                to="/your_pet"
            >
            <v-icon class="my-auto">mdi-close</v-icon>
                
                    <!--<router-link to="/your_pet"><v-icon class="my-auto">mdi-close</v-icon></router-link>-->
                
            </v-btn>
            </v-card-title>

            <v-list>
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

            <v-list-item>
                <v-list-item-action>
                <v-icon>mdi-gender-male-female</v-icon>
                </v-list-item-action>

                <v-list-item-content>
                <v-list-item-title>性別</v-list-item-title>
                </v-list-item-content>

                <v-list-item-action>
                <v-icon>mdi-chevron-right</v-icon>
                </v-list-item-action>
            </v-list-item>

            <v-divider inset></v-divider>
            
            <v-list-item>
                <v-list-item-action>
                <v-icon>mdi-cake-variant</v-icon>
                </v-list-item-action>

                <v-list-item-content>
                <v-list-item-title>誕生日</v-list-item-title>
                </v-list-item-content>

                <v-list-item-action>
                <v-icon>mdi-chevron-right</v-icon>
                </v-list-item-action>
            </v-list-item>

            <v-divider inset></v-divider>

            <v-list-item>
                <v-list-item-action>
                <v-icon>mdi-dog-side</v-icon>
                </v-list-item-action>

                <v-list-item-content>
                <v-list-item-title>種</v-list-item-title>
                </v-list-item-content>

                <v-list-item-action>
                <v-icon>mdi-chevron-right</v-icon>
                </v-list-item-action>
            </v-list-item>

            <v-divider inset></v-divider>

            <v-list-item>
                <v-list-item-action>
                <v-icon>mdi-account-child</v-icon>
                </v-list-item-action>

                <v-list-item-content>
                <v-list-item-title>家族へ迎えた日</v-list-item-title>
                </v-list-item-content>

                <v-list-item-action>
                <v-icon>mdi-chevron-right</v-icon>
                </v-list-item-action>
            </v-list-item>

            <v-divider inset></v-divider>

            <v-list-item>
                <v-list-item-action>
                <v-icon>mdi-camera-plus</v-icon>
                </v-list-item-action>

                <v-list-item-content>
                <v-list-item-title>写真を追加</v-list-item-title>
                </v-list-item-content>

                <v-list-item-action>
                <v-icon>mdi-chevron-right</v-icon>
                </v-list-item-action>
            </v-list-item>

            <v-divider inset></v-divider>

            <v-list-item>
                <v-list-item-action>
                <v-icon>mdi-map-marker</v-icon>
                </v-list-item-action>

                <v-list-item-content>
                <v-list-item-title>住所</v-list-item-title>
                </v-list-item-content>

                <v-list-item-action>
                <v-icon>mdi-chevron-right</v-icon>
                </v-list-item-action>
            </v-list-item>

            <v-divider inset></v-divider>

            <v-list-item>
                <v-list-item-action>
                <v-icon>mdi-pencil-plus</v-icon>
                </v-list-item-action>

                <v-list-item-content>
                <v-list-item-title>その他メモ</v-list-item-title>
                </v-list-item-content>

                <v-list-item-action>
                <v-icon>mdi-chevron-right</v-icon>
                </v-list-item-action>
            </v-list-item>

            <v-divider inset></v-divider>


            </v-list>
        </v-card>
        </v-col>
    </v-row>
    <v-btn
      rounded
      color="#556B2F"
      dark
    >
    次へ
    
    </v-btn>
 </div>
  
</template>


<script>
  export default {
    data: () => ({
      show: false,
    }),
  }
</script>