<template>
  <v-app>
    <v-container fluid pt-0 pr-0 pb-0 pl-0>
      <router-view/>
    </v-container>
  </v-app>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style lang="scss">
  @import './assets/styles/style.scss';
</style>
