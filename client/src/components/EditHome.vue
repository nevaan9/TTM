<template>
  <v-card v-if="homePageData">
    <v-toolbar dark color="primary">
      <v-btn icon dark @click="$emit('closeDialog', false)">
        <v-icon>close</v-icon>
      </v-btn>
      <v-toolbar-title>Settings</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn dark flat @click="submitForm">Save</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-container class="grid-list-lg">
      <v-layout
        row
        wrap
      >
        <!--1-->
        <v-flex xs12 md6>
          <v-card>
            <v-card-title class="headline"> About me bullets </v-card-title>
            <v-card-text>
              <v-text-field
                v-model="bio"
                box
                color="deep-purple"
                label="Bio"
              ></v-text-field>
              <v-btn
                @click="addBioBullet"
              >Add bullet point</v-btn>
            </v-card-text>
            <v-card-text>
              <v-list>
                <v-list-tile
                  v-for="(bullets, i) in homePageData.about"
                  :key="i"
                >
                  <v-list-tile-content>
                    {{ bullets }}
                  </v-list-tile-content>
                  <v-list-tile-action>
                    <v-btn
                      @click="homePageData.about.splice(i, 1)"
                    >
                      Delete
                    </v-btn>
                  </v-list-tile-action>
                </v-list-tile>
              </v-list>
            </v-card-text>
          </v-card>
        </v-flex>
        <!--2-->
        <v-flex xs12 md6>
          <v-card>
            <v-card-title class="headline"> Typer Text </v-card-title>
            <v-card-text>
              <v-text-field
                v-model="typerText"
                box
                color="deep-purple"
                label="Typer Text"
              ></v-text-field>
              <v-btn
                @click="addTyperText"
              >Add Typer Text</v-btn>
            </v-card-text>
            <v-card-text>
              <v-list>
                <v-list-tile
                  v-for="(typerText, i) in homePageData.typerText"
                  :key="i"
                >
                  <v-list-tile-content>
                    {{ typerText }}
                  </v-list-tile-content>
                  <v-list-tile-action>
                    <v-btn
                      @click="homePageData.typerText.splice(i, 1)"
                    >
                      Delete
                    </v-btn>
                  </v-list-tile-action>
                </v-list-tile>
              </v-list>
            </v-card-text>
          </v-card>
        </v-flex>
        <!--3-->
        <v-flex
          xs12
        >
          <v-card>
            <v-card-title>Image Uploader</v-card-title>
            <v-card-text>
              <v-btn>Upload</v-btn>
            </v-card-text>
          </v-card>
        </v-flex>
        <!--4-->
        <v-flex
          xs12
        >
          <v-card>
            <v-card-title>Styling and Colors</v-card-title>
            <v-card-text>
              <v-layout
                row
                wrap
              >
                <v-flex
                  shrink
                >
                  <color-picker
                    theme="light"
                    :color="color"
                    @changeColor="changeColor"
                  />
                </v-flex>
                <v-flex
                  shrink
                >
                  <v-card>
                    <v-list
                    >
                      <v-list-tile
                        class="mb-2"
                        v-for="(value, key) in homePageData.colors"
                        :key="key"
                      >
                        <v-list-tile-content>
                          {{ key }}
                        </v-list-tile-content>
                        <v-list-tile-action>
                          <v-btn
                            dark
                            @click="sumbitColor(key)"
                            small
                            fab
                          >
                            <v-icon>
                              mdi-arrow-right
                            </v-icon>
                          </v-btn>
                        </v-list-tile-action>
                        <v-list-tile-action>
                          <v-icon
                            style="border-style: solid; border-color: black"
                            x-large
                            :color="value">
                            mdi-square</v-icon>
                        </v-list-tile-action>
                      </v-list-tile>
                      <!--Margin Select-->
                      <v-list-tile
                        class="mt-5"
                      >
                        <v-list-tile-action>
                          <v-select
                            v-model="homePageData.marginAmount"
                            :items="[1,2,3,4,5]"
                            label="Margin Between Bullet Points"
                          ></v-select>
                        </v-list-tile-action>
                      </v-list-tile>
                    </v-list>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
  import colorPicker from '@caohenghu/vue-colorpicker'
  export default {
    name: 'EditHome',
    components: {
      colorPicker
    },
    data () {
      return {
        homePageData: null,
        error: null,
        bio: '',
        typerText: '',
        color: '#59c7f9',
      }
    },
    methods: {
      async fetchData () {
        const response = await this.$axios.get('/home');
        this.homePageData = response.data;
      },
      changeColor(color) {
        this.color = color.rgba.toHexString();
      },
      sumbitColor(key) {
        this.homePageData.colors[key] = this.color;
      },
      addBioBullet() {
        if (this.bio.trim() !== ''){
          this.homePageData.about.push(this.bio.trim());
          this.bio = '';
        }
      },
      addTyperText() {
        if (this.typerText.trim() !== ''){
          this.homePageData.typerText.push(this.typerText.trim());
          this.typerText = '';
        }
      },
      submitForm () {
        this.$axios.post('/home', {
          homePageData: this.homePageData
        }).then(() => {
          this.$emit('closeDialog', true);
        }).catch(e => alert(e.message));
      }
    },
    created () {
      this.fetchData().catch(e => this.error = new Error(e.message));
    }
  }
</script>

<style>
</style>