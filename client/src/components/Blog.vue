<template>
  <Content
    :side-bar-title="sideBarTitle"
    :listItemData="listItemData"
  >
    <v-flex
      class="pa-1"
      xs12
      sm4
    >
      <p class="headline">Pinned</p>
      <v-divider></v-divider>
      <v-card
        v-for="(pin, i) in pinned"
        :key="i"
        class="my-2"
        color="teal"
      >
        <v-card-title>
          <div>
            <div class="headline">{{ pin.title }}</div>
            <span>{{ pin.preview }}</span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat >Listen now</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
    <v-flex
      class="pa-1"
      xs12 sm8>
      <p class="headline">Blogs</p>
      <v-divider></v-divider>
      <h2 v-if="!blogs.length">No blogs posted yet!</h2>
      <template v-else>
        <v-card
          v-for="(blog, i) in blogs"
          :key="i"
          class="mx-2 my-2"
        >
          <v-img
            class="white--text"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          >
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <span class="display-3">{{ blog.title }}</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>
          <v-card-title>
            <div>
              <p class="subheading">{{ blog.preview }}</p>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat color="orange">Share</v-btn>
            <v-btn flat color="orange">Explore</v-btn>
          </v-card-actions>
        </v-card>
        <div class="text-xs-center">
          <v-pagination
            v-model="page"
            :length="totalPageCount"
          ></v-pagination>
        </div>
      </template>
    </v-flex>
  </Content>
</template>

<script>
  import Content from './Content'
  export default {
    name: 'Blog',
    components: {
      Content
    },
    data () {
      return {
        sideBarTitle: 'All Blogs',
        drawer: null,
        blogs: [],
        pinned: [],
        totalPageCount: 1,
        page: null,
        limit: null,
        filter: null,
        listItemData: []
      }
    },
    methods: {
      async fetchData () {
        // eslint-disable-next-line
        console.log('Inside fetch');
        const response = await this.$axios.get(this.$route.fullPath);
        this.totalPageCount = response.data.pageCount;
        this.blogs = response.data.blogs;
        this.pinned = response.data.pinned;
      }
    },
    watch: {
      page(val) {
        // eslint-disable-next-line
        this.$router.push(
          { query: { limit: this.limit, page: val || 1 } });
      },
      '$route' () {
        // eslint-disable-next-line
        this.fetchData();
      }
    },
    beforeRouteEnter (to, from, next) {
      next(vm => {
        // eslint-disable-next-line
        if (from.path === '/') vm.fetchData();
        vm.page = parseInt(vm.$route.query.page) || 1;
        vm.limit = 3;
      });
    }
  }
</script>

<style scoped>
</style>