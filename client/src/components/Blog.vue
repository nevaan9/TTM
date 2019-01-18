<template>
    <Content
            :side-bar-title="sideBarTitle"
    >
        <v-flex>
            <h2>Blogs</h2>
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