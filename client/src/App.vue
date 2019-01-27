<template>
  <v-app :dark="darkTheme">
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
          :color="darkTheme === false ? (routeName === item.title ? `black` : `grey`) : (routeName === item.title ? `white` : `grey`)"
        >{{ item.title }}
        </v-btn>
        <v-btn
          color="grey"
          flat
          @click="toggleButton"
        >
          Toggle darkTheme
        </v-btn>
        <v-btn
          fab
          flat
          v-if="isAdmin"
          @click="toggleEditDialog(routeName)"
        >
          <v-icon
          >
            mdi-pencil-outline
          </v-icon>
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
    <v-footer
      height="auto"
    >
      <v-card
        class="flex"
        flat
        tile
      >
        <v-card-title :class="{white: !darkTheme, black: darkTheme, 'darken-3': true, 'justify-center': true,  'py-0': true}">
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-3"
            icon
          >
            <v-icon
              :color="darkTheme ? 'white' : 'black'"
              size="24px"
            >{{ icon }}</v-icon>
          </v-btn>
        </v-card-title>
      </v-card>
    </v-footer>

    <!--EDIT DIALOG-->
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <component
        :is="selectedComponent"
        @closeDialog="dialog = false"
      ></component>
    </v-dialog>
  </v-app>
</template>

<script>
  import EditHome from './components/EditHome'
  import EditPhotos from './components/EditPhotos'
  import EditBlog from './components/EditBlog'
  import EditResume from './components/EditResume'
export default {
  name: 'App',
  components: {
    EditHome,
    EditPhotos,
    EditBlog,
    EditResume
  },
  data () {
    return {
      drawer: null,
      items: [
        { title: 'Home', icon: 'dashboard' },
        { title: 'Photos', icon: 'question_answer' },
        { title: 'Blog', icon: 'question_answer' },
        { title: 'Resume', icon: 'question_answer' },
      ],
      darkTheme: false,
      icons: [
        'mdi-facebook',
        'mdi-instagram',
        'mdi-linkedin',
        'mdi-twitter',
      ],
      selectedComponent: '',
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false

    }
  },
  methods: {
    goToNamedRoute(namedRoute) {
      this.$router.push({ name: namedRoute });
    },
    toggleButton () {
      this.darkTheme = !this.darkTheme;
    },
    toggleEditDialog (routeName) {
      this.selectedComponent = `Edit${routeName}`;
      this.dialog = true;
    }
  },
  computed: {
    routeName () {
      return this.$route.name;
    },
    isAdmin() {
      return this.$admin;
    }
  }
}
</script>
