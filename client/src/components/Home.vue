<template>
    <v-container fill-height fluid grid-list-md>
        <v-layout
          v-if="aboutData"
          row
          wrap>
            <v-flex v-if="!isMobile" d-flex xs12 sm6 md8>
                <div :style="cardStyles">
                    <v-card-text
                      :class="['text-md-left', 'title', `mb-${aboutData.marginAmount}`]"
                      v-for="(aboutItem, index) in aboutData.about"
                      :key="index"
                    >
                        {{ aboutItem }}
                    </v-card-text>
                </div>
            </v-flex>
            <v-flex d-flex xs12 sm6 md4>
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
        <div v-else-if="error">{{ error.message }}</div>
    </v-container>
</template>

<script>
    import { VueTyper } from 'vue-typer'
  export default {
      name: 'Home',
      props: {
          aboutData: {
              type: Object
          },
          error: {
              type: Object
          }
      },
      components: {
          VueTyper
      },
      computed: {
          isMobile () {
              switch (this.$vuetify.breakpoint.name) {
                  case 'xs': return true;
                  default: return false;
              }
          },
          cardStyles() {
              return {
                  'background-color': `${this.aboutData.colors.cardColor}`,
                  'color': `${this.aboutData.colors.textColor}`
              }
          }
      }
  }
</script>

<style scoped>
</style>
