<template>
  <v-card>
    <v-toolbar dark color="primary">
      <v-btn icon dark @click="$emit('closeDialog')">
        <v-icon>close</v-icon>
      </v-btn>
      <v-toolbar-title>Settings</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn dark flat @click="$emit('closeDialog')">Save</v-btn>
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
                  v-for="(bullets, i) in bioArray"
                  :key="i"
                >
                  <v-list-tile-content>
                    {{ bullets }}
                  </v-list-tile-content>
                  <v-list-tile-action>
                    <v-btn
                      @click="bioArray.splice(i, 1)"
                    >
                      Delete
                    </v-btn>
                  </v-list-tile-action>
                </v-list-tile>
              </v-list>
            </v-card-text>
            <v-card-actions>
              <v-btn>Sumbit</v-btn>
            </v-card-actions>
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
                  v-for="(typerText, i) in typerTextArray"
                  :key="i"
                >
                  <v-list-tile-content>
                    {{ typerText }}
                  </v-list-tile-content>
                  <v-list-tile-action>
                    <v-btn
                      @click="typerTextArray.splice(i, 1)"
                    >
                      Delete
                    </v-btn>
                  </v-list-tile-action>
                </v-list-tile>
              </v-list>
            </v-card-text>
            <v-card-actions>
              <v-btn>Sumbit</v-btn>
            </v-card-actions>
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
                    :sucker-hide="false"
                    :sucker-canvas="suckerCanvas"
                    :sucker-area="suckerArea"
                    @changeColor="changeColor"
                    @openSucker="openSucker"
                  />
                </v-flex>
                <v-flex
                  shrink
                >
                  <v-card>
                    <v-list>
                      <v-radio-group v-model="radioGroup">
                        <v-list-tile
                          v-for="n in 3"
                          :key="n"
                        >
                          <v-list-tile-action>
                            <v-radio
                              :label="`Radio ${n}`"
                              :value="n"
                            ></v-radio>
                          </v-list-tile-action>
                          <v-list-tile-action>
                            <v-btn
                              @click="sumbitColor()"
                              small
                              fab
                              flat
                            >
                              <v-icon>
                                add
                              </v-icon>
                            </v-btn>
                          </v-list-tile-action>
                          <v-list-tile-action>
                            <v-icon
                              x-large
                              :color="radioColors[`${n}`]">
                              mdi-square</v-icon>
                          </v-list-tile-action>
                        </v-list-tile>
                      </v-radio-group>
                      <!---->
                      <v-list-tile>
                        <v-list-tile-action>
                          <v-select
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
        bio: '',
        bioArray: ['Hello', 'Hi'],
        typerText: '',
        typerTextArray: ['Yi', 'Hi', 'Ji'],
        color: '#59c7f9',
        suckerCanvas: null,
        suckerArea: [],
        isSucking: false,
        radioGroup: 1,
        radioColors: {
          1: 'red',
          2: 'blue',
          3: 'green'
        },
      }
    },
    methods: {
      changeColor(color) {
        const {r, g, b, a} = color.rgba;
        this.color = `rgba(${r}, ${g}, ${b}, ${a})`
      },
      openSucker(isOpen) {
        if (isOpen) {
          // ... canvas be created
          // this.suckerCanvas = canvas
          // this.suckerArea = [x1, y1, x2, y2]
        } else {
          // this.suckerCanvas && this.suckerCanvas.remove
        }
      },
      sumbitColor() {
        this.radioColors[`${this.radioGroup}`] = this.color;
      },
      addBioBullet() {
        if (this.bio.trim() !== ''){
          this.bioArray.push(this.bio.trim());
          this.bio = '';
        }
      },
      addTyperText() {
        if (this.typerText.trim() !== ''){
          this.typerTextArray.push(this.typerText.trim());
          this.typerText = '';
        }
      }
    }
  }
</script>

<style>
</style>