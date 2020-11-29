<template>
  <header>
    <v-app-bar app color="#b0e0e6" class="logo">
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title
        ><router-link to="/">Life Key Support</router-link></v-toolbar-title
      >
      <v-tabs id="nav">
        <v-tab><router-link to="/">Home</router-link></v-tab>
        <v-tab><a href="https://film-key.com/company">会社概要</a></v-tab>
        <v-tab><a href="https://film-key.com/">フィルム事業部</a></v-tab>
        <v-tab><a href="https://masu2011.jp/">イベント事業部</a></v-tab>
        <v-tab
          ><a href="https://masu2011.jp/contact.html"
            >バルーンお問い合わせ</a
          ></v-tab
        >
        <v-tab
          ><a href="https://film-key.com/contact"
            >フィルムお問い合わせ</a
          ></v-tab
        >
      </v-tabs>
    </v-app-bar>
    <v-navigation-drawer class="drawer" v-model="drawer" fixed temporary>
      <v-list nav dense>
        <v-list-item-group>
          <v-list-item>
            <v-list-item-title
              ><a href="https://film-key.com/company"
                >会社概要</a
              ></v-list-item-title
            >
          </v-list-item>
          <v-list-item>
            <v-list-item-title
              ><a href="https://film-key.com/"
                >フィルム事業部</a
              ></v-list-item-title
            >
          </v-list-item>
          <v-list-item>
            <v-list-item-title
              ><a href="https://masu2011.jp/"
                >イベント事業部</a
              ></v-list-item-title
            >
          </v-list-item>
          <v-list-item>
            <v-list-item-title
              ><a href="https://masu2011.jp/contact.html"
                >バルーンお問い合わせ</a
              ></v-list-item-title
            >
          </v-list-item>
          <v-list-item>
            <v-list-item-title
              ><a href="https://film-key.com/contact"
                >フィルムお問い合わせ</a
              ></v-list-item-title
            >
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </header>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
    }
  },
}
</script>

<style lang="scss" scoped>
/* メディアクエリブレークポイント */
$xs: 600;
$sm: 960;
$md: 1264;
$lg: 1904;
$sp-max: calc($xs - 1) px;
$tb-min: $xs + px;
$tb-max: calc($sm - 1) px;
$pc-min: $sm + px;
/* PC */
@mixin display_pc {
  @media (min-width: $pc-min) {
    @content;
  }
}
/* タブレット */
@mixin display_tab {
  @media (min-width: $tb-min) and (max-width: $tb-max) {
    @content;
  }
}
/* スマホ */
@mixin display_sp {
  @media (max-width: $sp-max) {
    @content;
  }
}
#nav {
  display: flex;
  justify-content: center;
  padding: 10px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 0 10px;
}
#nav a.router-link-exact-active {
  color: white;
}
.drawer a {
  color: #2c3e50;
}
.v-toolbar__title {
  overflow: visible !important;
  margin-right: 50px !important;
}
.logo a {
  color: #2c3e50;
}
// PCのときハンバーガーメニューを非表示にする
.v-app-bar__nav-icon {
  @include display_pc {
    display: none !important;
  }
}
// PCのときのみタブメニューを表示する
.v-tab {
  display: none;
  @include display_pc {
    display: flex !important;
  }
}
</style>
