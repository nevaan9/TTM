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
            <v-list class="pt-0" dense>
                <v-divider light></v-divider>

                <v-list-tile
                        v-for="item in items"
                        :key="item.title"
                >
                    <v-list-tile-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-tile-action>

                    <v-list-tile-content>
                        <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
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
                index: null
            }
        }
    }
</script>

<style>
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