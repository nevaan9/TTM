<template>
    <v-layout
      row
      wrap
    >
        <!--NAV DRAWER-->
        <v-btn
          class="mt-0 ml-0"
          @click.stop="drawer = !drawer"
        >
            Albums
            <v-icon>mdi-menu-right</v-icon>
        </v-btn>
        <v-navigation-drawer
          v-model="drawer"
          small
          absolute
          temporary
        >
            <v-list
            >
                <v-subheader>Filter by Album</v-subheader>

                <v-list-tile
                  v-for="(album, i) in listItemData"
                  :key="i"
                  @click="">
                    <v-list-tile-action>
                        <v-checkbox v-model="checkboxes" :value="album.id"></v-checkbox>
                    </v-list-tile-action>

                    <v-list-tile-content
                      @click="listItemClicked(album.id)"
                    >
                        <v-list-tile-title>{{ album.name }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <!--SLOT TO INJECT BLOG OR PHOTOS-->
        <v-container
          class="pt-0 px-2"
          fluid grid-list-sm>
            <v-layout
              row
              wrap
            >
                <slot></slot>
            </v-layout>
        </v-container>
    </v-layout>
</template>

<script>
export default {
    name: 'Content',
    props: {
        sideBarTitle: {
            type: String,
            required: true
        },
        listItemData: {
            type: Array,
            required: true,
            default: () => []
        }
    },
    data () {
        return {
            drawer: null,
            checkboxes: []
        }
    },
    methods: {
        listItemClicked(id) {
            if (this.checkboxes.includes(id)){
                this.checkboxes = this.checkboxes.filter(albumId => albumId !== id);
            } else {
                this.checkboxes.push(id);
            }
        }
    },
    watch: {
        checkboxes: function (value) {
            console.log('Emiting...');
            this.$emit('filterClicked', new Set(value))
        }
    }
}
</script>

<style scoped>
</style>