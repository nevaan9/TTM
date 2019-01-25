<template>
    <Content
      :side-bar-title="sideBarTitle"
    >
        <v-flex
          class="grid"
        >
            <v-layout
              column
              v-for="(image, i) in images"
            >
                <v-flex>
                    <img class="img" :src="image.url" :key="i" @click="index = i">
                </v-flex>
                <v-flex>
                    <span>{{ image.caption }}</span>
                </v-flex>
            </v-layout>
            <vue-gallery-slideshow :images="galleryImages" :index="index" @close="index = null"></vue-gallery-slideshow>
        </v-flex>
    </Content>
</template>

<script>
    import Content from './Content'
    import VueGallerySlideshow from 'vue-gallery-slideshow';
    export default {
        name: 'Photos',
        components: {
            VueGallerySlideshow,
            Content
        },
        data () {
            return {
                sideBarTitle: 'All Photos',
                data: null,
                index: null,
            }
        },
        created () {
            this.fetchData ();
        },
        computed: {
            images () {
                return this.data
            },
            galleryImages() {
                return this.data ? this.data.map(imageOb => imageOb.url) : []
            }
        },
        methods: {
            async fetchData() {
                const response = await this.$axios.get('/photos');
                this.data = response.data;
            }
        }
    }
</script>

<style scoped>
    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        grid-gap: 1rem;
        align-items: center;
    }
    .grid img {
        box-shadow: 2px 2px 6px 0px  rgba(0,0,0,0.3);
        max-width: 100%;
        max-height: 35rem;
    }
</style>