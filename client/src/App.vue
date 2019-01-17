<template>
  <v-app :dark="theme">
    <!--Toolbar-->
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span class="font-weight-light">TATIANA TALI MAKOVSKY</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!--Web-->
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
                v-for="(item, index) in items"
                :key="index"
                flat
                @click="goToNamedRoute(item.title)"
        >{{ item.title }}
        </v-btn>
        <v-btn
                flat
                @click="theme = !theme"
        >
          Toggle Theme
        </v-btn>
      </v-toolbar-items>
      <!--Mobile-->
      <v-toolbar-items class="hidden-md-and-up">
        <v-toolbar-side-icon
                @click.stop="drawer = !drawer"
        ></v-toolbar-side-icon>
      </v-toolbar-items>
    </v-toolbar>
    <!--Body-->
    <v-content>
      <router-view></router-view>
    </v-content>
    <!--Mobile-->
    <v-navigation-drawer
            v-model="drawer"
            temporary
            right
            mini-variant
            absolute
    >
      <v-list class="pa-1">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>John Leider</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <v-list class="pt-0" dense>
        <v-divider></v-divider>

        <v-list-tile
                v-for="item in items"
                :key="item.title"
                @click="goToNamedRoute(item.title)"
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <!--Footer-->
    <v-footer class="footer">
      <span style="margin: auto">&copy; 2019 </span>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
        isAdmin: true,
        drawer: null,
        items: [
            { title: 'Home', icon: 'dashboard' },
            { title: 'Photos', icon: 'question_answer' },
            { title: 'Blog', icon: 'question_answer' },
            { title: 'Resume', icon: 'question_answer' },
        ],
        theme: true
    }
  },
    methods: {
      goToNamedRoute(namedRoute) {
          this.$router.push({ name: namedRoute });
      }
    },
    mounted () {
    }
}
</script>
