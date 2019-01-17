<template>
    <v-layout
            wrap
    >
        <!--ALBUMS NAV DRAWER-->
        <v-btn
                small
                block
                @click.stop="drawer = !drawer"
                style="margin-left: 40%; margin-right: 40%"
        >
            Albums
        </v-btn>
        <v-navigation-drawer
                v-model="drawer"
                absolute
                dark
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
        <v-container fluid grid-list-sm style="padding-top: 0px">
            <v-layout
                    row
                    wrap
            >
                <v-flex
                        v-for="n in 10"
                        :key="n"
                        xs6
                        sm4
                >
                    <v-img src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg">
                        <div class="fill-height bottom-gradient"></div>
                    </v-img>
                </v-flex>
            </v-layout>
        </v-container>
    </v-layout>
</template>

<script>
    export default {
        data () {
            return {
                drawer: null,
                items: [
                    { title: 'Home', icon: 'dashboard' },
                    { title: 'About', icon: 'question_answer' }
                ],
                right: null
            }
        }
    }
</script>

<style>

</style>