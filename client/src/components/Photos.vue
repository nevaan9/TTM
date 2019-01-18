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
            <v-treeview
                    v-model="tree"
                    :load-children="fetch"
                    :items="treeItems"
                    active-class="grey lighten-4 indigo--text"
                    selected-color="indigo"
                    open-on-click
                    selectable
                    expand-icon="mdi-chevron-down"
                    on-icon="mdi-bookmark"
                    off-icon="mdi-bookmark-outline"
                    indeterminate-icon="mdi-bookmark-minus"
            >
            </v-treeview>
        </v-navigation-drawer>

        <!--PHOTOS-->
        <v-container fluid grid-list-lg style="padding-top: 0px">
            <v-layout
                    row
                    wrap
            >
                <v-flex
                        class="grid"
                >
                    <img class="img" v-for="(image, i) in images" :src="image" :key="i" @click="index = i">
                    <vue-gallery-slideshow :images="images" :index="index" @close="index = null"></vue-gallery-slideshow>
                </v-flex>
            </v-layout>
        </v-container>
    </v-layout>
</template>

<script>
    import VueGallerySlideshow from 'vue-gallery-slideshow';
    import image1 from '../images/captain.jpeg'
    import image2 from '../images/snow.jpeg'
    export default {
        name: 'Photos',
        components: {
            VueGallerySlideshow
        },
        data () {
            return {
                drawer: null,
                items: [
                    { title: 'All Photos', icon: 'dashboard' },
                    { title: 'SLU', icon: 'question_answer' },
                    { title: 'China', icon: 'question_answer' },
                ],
                right: null,
                images: [
                    image2,
                    'https://placekitten.com/801/800',
                    'https://placekitten.com/802/800',
                    'https://placekitten.com/803/800',
                    'https://placekitten.com/804/800',
                    'https://placekitten.com/805/800',
                    image1
                ],
                index: null,
                breweries: [],
                isLoading: false,
                tree: [],
                types: [],
                treeItems: [
                    {
                        id: 1,
                        name: 'All Photos',
                        children: [
                            {
                                id: 2,
                                name: 'SLU'
                            },
                            {
                                id: 3,
                                name: 'Pub 56'
                            },
                            {
                                id: 4,
                                name: 'China'
                            },
                            {
                                id: 5,
                                name: 'Israel'
                            },
                        ]
                    }
                ]
            }
        },
        methods: {
            fetch () {
                setTimeout(() => {
                }, 3000)
            }
        }
    }
</script>

<style scoped>
    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        grid-gap: 20px;
        align-items: center;
    }
    .grid img {
        box-shadow: 2px 2px 6px 0px  rgba(0,0,0,0.3);
        max-width: 100%;
    }
</style>