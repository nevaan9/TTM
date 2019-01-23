<template>
    <v-container fill-height fluid grid-list-md>
        <v-layout
          row
          wrap>
            <!--Web-->
            <v-flex v-if="!isMobile" d-flex xs12 md8>
                <v-img src="https://picsum.photos/510/300" aspect-ratio="1:10"></v-img>
            </v-flex>
            <v-flex d-flex xs12 md4>
                <v-card color="blue lighten-2" dark>
                    <v-card-text>
                        <ul>
                            <li
                              v-for="(aboutItem, index) in aboutData.about"
                              :key="index"
                            > {{ aboutItem }}</li>
                        </ul>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
  export default {
      name: 'Home',
      data: function () {
          return {
              url: '/home',
              requestData: null
          }
      },
      methods: {
          async fetchData () {
              const response = await this.$axios.get(this.url);
              this.requestData = response.data;
          }
      },
      computed: {
          isMobile () {
              switch (this.$vuetify.breakpoint.name) {
                  case 'sm': return true;
                  case 'xs': return true;
                  default: return false;
              }
          },
          aboutData () {
              return this.requestData || 'Loading...'
          }
      },
      created() {
          this.fetchData().catch(e => this.requestData = new Error(e));
      }
  }
</script>

<style scoped>

</style>
