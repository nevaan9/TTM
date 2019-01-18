<template>
    <Content
            :side-bar-title="sideBarTitle"
    >
        <v-flex
                class="grid"
        >
            <img class="img" v-for="(image, i) in images" :src="image" :key="i" @click="index = i">
            <vue-gallery-slideshow :images="images" :index="index" @close="index = null"></vue-gallery-slideshow>
        </v-flex>
    </Content>
</template>

<script>
    import Content from './Content'
    import VueGallerySlideshow from 'vue-gallery-slideshow';
    import image1 from '../images/captain.jpeg'
    import image2 from '../images/snow.jpeg'
    export default {
        name: 'Photos',
        components: {
            VueGallerySlideshow,
            Content
        },
        data () {
            return {
                sideBarTitle: 'All Photos',
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