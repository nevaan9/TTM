<template>
    <Content
      :side-bar-title="sideBarTitle"
      :listItemData="listItemData"
      @filterClicked="filterPhotos"
    >
        <v-flex
          class="grid py-0"
        >
            <v-layout
              column
              v-for="(image, i) in images"
              :key="i"
            >
                <v-flex class="py-0">
                    <img class="img" :src="image.url" :key="i" @click="index = i">
                </v-flex>
                <v-flex class="py-0">
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
        props: {
            allPhotos: {
                type: Array
            },
            error: {
                type: Object
            }
        },
        components: {
            VueGallerySlideshow,
            Content
        },
        data () {
            return {
                sideBarTitle: 'All Photos',
                index: null,
                data: [],
                listItemData: []
            }
        },
        created () {
            this.data = this.$route.params.allPhotos || [];
            this.listItemData = this.createListItemList(this.$route.params.allPhotos);
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
            filterPhotos (filterByIds) {
                if (filterByIds.size) {
                    this.data = this.allPhotos.filter(imageObj => filterByIds.has(imageObj.albumId));
                } else {
                    this.data = this.allPhotos.slice(0);
                }
            },
            createListItemList (data = []) {
                const set = new Set();
                const listItems = [];
                data.forEach(imageObj => {
                    if (!set.has(imageObj.albumId)){
                        set.add(imageObj.albumId);
                        listItems.push({
                            name: imageObj.albumName,
                            id: imageObj.albumId
                        });
                    }
                });
                return listItems
            }
        }
    }
</script>

<style scoped>
    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        grid-gap: .5rem;
    }
    .grid img {
        box-shadow: 2px 2px 6px 0px  rgba(0,0,0,0.3);
        max-width: 100%;
        max-height: 35rem;
    }
</style>