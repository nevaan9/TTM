<template>
    <v-layout
            wrap
    >
        <!--ALBUMS NAV DRAWER-->
        <v-btn
                class="accent mt-0 ml-0"
                @click.stop="drawer = !drawer"
        >
            <v-icon>mdi-image-album</v-icon>
        </v-btn>
        <v-navigation-drawer
                v-model="drawer"
                small
                absolute
                temporary
        >
            <p>Add Blog Sidebar Here</p>
        </v-navigation-drawer>
    </v-layout>
</template>

<script>
    export default {
        data () {
            return {
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