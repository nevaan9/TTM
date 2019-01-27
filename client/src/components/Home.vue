<template>
    <v-container fill-height fluid grid-list-md>
        <v-layout
          row
          wrap>
            <!--Web-->
            <v-flex v-if="!isMobile" d-flex xs12 sm6 md8>
                <div :color="aboutData.cardColor">
                    <v-card-text
                      :class="['text-md-left', 'title', `${aboutData.textColor}--text`, `mb-${aboutData.marginAmount}`]"
                      v-for="(aboutItem, index) in aboutData.about"
                      :key="index"
                    >
                        {{ aboutItem }}
                    </v-card-text>
                </div>
            </v-flex>
            <v-flex v-if="!isMobile" d-flex xs12 sm6 md4>
                <v-img :src="aboutData.img" aspect-ratio="1:10">
                    <v-layout
                      class="align-center justify-center"
                    >
                        <v-flex
                          class="headline ml-1 mt-1"
                        >
                            <vue-typer
                              :text=aboutData.typerText
                              :repeat='Infinity'
                              :shuffle='false'
                              initial-action='typing'
                              :pre-type-delay='70'
                              :type-delay='70'
                              :pre-erase-delay='2000'
                              :erase-delay='250'
                              erase-style='clear'
                              :erase-on-complete='false'
                              caret-animation='blink'
                            >
                            </vue-typer>
                        </v-flex>
                    </v-layout>
                </v-img>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import { VueTyper } from 'vue-typer'
  export default {
      name: 'Home',
      components: {
          VueTyper
      },
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
    v-card-text {
        background-color: black;
    }
</style>
