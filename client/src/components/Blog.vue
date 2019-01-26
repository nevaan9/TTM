<template>
    <Content
            :side-bar-title="sideBarTitle"
    >
        <v-flex
          class="pa-1"
          xs12
          sm4
        >
            <p class="headline">Pinned</p>
            <v-divider></v-divider>
            <v-card
              v-for="n in 5"
              :key="n"
              class="my-2"
              color="teal"
            >
                <v-card-title>
                    <div>
                        <div class="headline">Unlimited music now</div>
                        <span>Listen to your favorite artists and albums whenever and wherever, online and offline.</span>
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
            <v-card
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
                                <span class="display-3">Title</span>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-img>
                <v-card-title>
                    <div>
                        <p class="subheading">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam commodi cupiditate fugit impedit in ipsum mollitia officiis quae quidem, quod quos sapiente soluta ullam. Deleniti excepturi ipsum perspiciatis vel veritatis?</p>
                    </div>
                </v-card-title>
                <v-card-actions>
                    <v-btn flat color="orange">Share</v-btn>
                    <v-btn flat color="orange">Explore</v-btn>
                </v-card-actions>
            </v-card>
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
                items: [
                    { title: 'All Photos', icon: 'dashboard' },
                    { title: 'SLU', icon: 'question_answer' },
                    { title: 'China', icon: 'question_answer' },
                ],
                right: null,
            }
        }
    }
</script>

<style scoped>
</style>