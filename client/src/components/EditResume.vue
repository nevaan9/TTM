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
    <h2>EDIT PHOTOS</h2>
  </v-card>
</template>

<script>
</script>

<style>
</style>