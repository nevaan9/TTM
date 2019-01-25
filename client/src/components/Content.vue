<template>
    <v-layout
      wrap
    >
        <!--NAV DRAWER-->
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
        <!--SLOT TO INJECT BLOG OR PHOTOS-->
        <v-container fluid grid-list-lg style="padding-top: 0px">
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
        }
    },
    data () {
        return {
            drawer: null,
            breweries: [],
            isLoading: false,
            tree: [],
            types: [],
            treeItems: [
              {
                  id: 1,
                  name: this.sideBarTitle,
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
                      }
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
</style>