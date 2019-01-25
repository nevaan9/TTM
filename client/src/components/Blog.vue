<template>
    <Content
            :side-bar-title="sideBarTitle"
    >
        <v-flex
          v-for="n in 10"
          :key="n"
          xs12 sm6>
            <v-card
              class="mx-auto"
              color="#26c6da"
              dark
            >
                <v-card-title>
                    <v-icon
                      large
                      left
                    >
                        mdi-twitter
                    </v-icon>
                    <span class="title font-weight-light">Title</span>
                </v-card-title>

                <v-card-text class="title font-weight-bold">
                    "Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well."
                </v-card-text>

                <v-card-actions>
                    <v-list-tile class="grow">
                        <v-list-tile-content>
                            <v-list-tile-title>{{ new Date() }}</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-btn
                      small
                    > Read More </v-btn>
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