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
                    <v-card-text>{{ lorem.slice(0, 100) }}</v-card-text>
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
              lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`
          }
      },
      methods: {
      },
      computed: {
          isMobile () {
              switch (this.$vuetify.breakpoint.name) {
                  case 'sm': return true;
                  case 'xs': return true;
                  default: return false;
              }
          }
      }
  }
</script>

<style scoped>

</style>
