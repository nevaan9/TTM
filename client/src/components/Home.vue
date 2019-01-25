<template>
    <v-container fill-height fluid grid-list-md>
        <v-layout
          row
          wrap>
            <!--Web-->
            <v-flex v-if="!isMobile" d-flex xs12 md8>
                <v-img :src="aboutData.img" aspect-ratio="1:10">
                </v-img>
            </v-flex>
            <v-flex d-flex xs12 md4>
                <v-card :color="aboutData.cardColor">
                    <v-card-text
                      :class="['text-xs-center', 'text-md-left', 'headline', `${aboutData.textColor}--text`]"
                      v-for="(aboutItem, index) in aboutData.about"
                      :key="index"
                    >
                        {{ aboutItem }}
                    </v-card-text>
                    <v-card-text
                      :class="['text-xs-center', 'text-md-left', 'headline', `${aboutData.textColor}--text`]"
                    >
                        <vue-typer
                          :text='["Student","Economist","Traveller","Lover","Dreamer"]'
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
                    </v-card-text>
                </v-card>
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
