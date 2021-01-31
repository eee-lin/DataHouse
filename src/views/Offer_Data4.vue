<template>
    <div>
        <v-card
            max-width="600"
            class="mx-auto"
        >
            <v-toolbar
            color="#00ACC1"
            dark
            >
            <v-app-bar-nav-icon></v-app-bar-nav-icon>

            <v-toolbar-title>診療データ</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>

            <v-btn icon>
                <v-icon>mdi-view-module</v-icon>
            </v-btn>
            </v-toolbar>

            <v-list
            subheader
            two-line
            >
            <v-subheader inset>Folders</v-subheader>

            <v-list-item
                v-for="folder in folders"
                :key="folder.title"
            >
                <v-list-item-avatar>
                <v-icon
                    class="grey lighten-1"
                    dark
                >
                    mdi-folder
                </v-icon>
                </v-list-item-avatar>

                <v-list-item-content>
                <v-list-item-title v-text="folder.title"></v-list-item-title>

                <v-list-item-subtitle v-text="folder.subtitle"></v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-action>
                <v-btn icon>
                    <v-icon color="grey lighten-1">mdi-information</v-icon>
                </v-btn>
                </v-list-item-action>
            </v-list-item>

            <v-divider inset></v-divider>

            <v-subheader inset>Files</v-subheader>

            <v-list-item
                v-for="file in files"
                :key="file.title"
            >
                <v-list-item-avatar>
                <v-icon
                    :class="file.color"
                    dark
                    v-text="file.icon"
                ></v-icon>
                </v-list-item-avatar>

                <v-list-item-content>
                <v-list-item-title v-text="file.title"></v-list-item-title>

                <v-list-item-subtitle v-text="file.subtitle"></v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-action>
                <v-btn icon>
                    <v-icon color="grey lighten-1">mdi-information</v-icon>
                </v-btn>
                </v-list-item-action>
            </v-list-item>
            </v-list>
        </v-card>

        <v-container fluid>
            <v-checkbox v-model="checkbox">
            <template v-slot:label>
                <div>
                私は
                <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                    <a
                        target="_blank"
                        href="http://vuetifyjs.com"
                        @click.stop
                        v-on="on"
                    >
                        DataHouseの規約
                    </a>
                    </template>
                    Opens in new window
                </v-tooltip>
                に同意します
                </div>
            </template>
            </v-checkbox>
        </v-container>

            <v-btn
      to="/offerdata5"
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
      files: [
        {
          color: 'blue',
          icon: 'mdi-clipboard-text',
          subtitle: 'Jan 20, 2014',
          title: '健康診断結果',
        },
        {
          color: 'amber',
          icon: 'mdi-gesture-tap-button',
          subtitle: 'Jan 10, 2014',
          title: '歯周病治療',
        },
      ],
      folders: [
        {
          subtitle: 'Jan 9, 2014',
          title: '皮膚疾患',
        },
        {
          subtitle: 'Jan 17, 2014',
          title: '外傷関係',
        },
        {
          subtitle: 'Jan 28, 2014',
          title: '白内障',
        },
      ],
    }),
  }
</script>