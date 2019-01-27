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
              <v-textarea>
              </v-textarea>
              <v-btn>Add bullet point</v-btn>
            </v-card-text>
            <v-card-text>
              <ul>
                <li v-for="n in 7"
                    :key="n"
                > {{ n }}</li>
              </ul>
            </v-card-text>
            <v-card-actions>
              <v-btn>Sumbit</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
        <!--2-->
        <v-flex xs12 md6>
          <v-card>
            <v-card-title class="headline"> About me bullets </v-card-title>
            <v-card-text>
              <v-textarea>
              </v-textarea>
              <v-btn>Add bullet point</v-btn>
            </v-card-text>
            <v-card-text>
              <ul>
                <li v-for="n in 7"
                    :key="n"
                > {{ n }}</li>
              </ul>
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
              <color-picker v-model="color"></color-picker>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
  export default {
    name: 'EditHome',
    data () {
      return {
      }
    }
  }
</script>

<style>
</style>