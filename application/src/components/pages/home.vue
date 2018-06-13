<template>
  <v-layout>
    <app-header></app-header>
    <v-snackbar v-model="warningServer"
                top
                color="red">
      Проблемы с сервером
    </v-snackbar>
  </v-layout>
</template>

<script>

export default {
  components: {

  },
  data () {
    return {

    }
  },
  methods: {
    warningServer() {
      return this.$store.warning;
    }
  },
}
</script>

<style lang="css">
</style>
