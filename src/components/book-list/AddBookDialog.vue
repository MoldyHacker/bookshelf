<template>
<v-row justify="center">
  <v-dialog
  v-model="addBookDialog"
  fullscreen
  :scrim="false"
  transition="dialog-bottom-transition"
  >

  </v-dialog>
</v-row>
</template>

<script>
export default {
  name: "AddBookDialog"
}
</script>

<style scoped>

</style>
