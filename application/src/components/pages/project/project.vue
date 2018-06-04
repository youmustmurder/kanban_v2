<template>
  <v-content row wrap>
    <app-header></app-header>
    <board></board>
  </v-content>
</template>

<script>
import board from './board';

export default {
  components: {
    'board': board
  },
  data () {
    return {

    }
  },
  mounted () {
    this.$store.dispatch('loadProject', { context: this, project_id: this.$route.params.project_id });
  },
  beforeRouteUpdate (to, from, next) {
    this.$store.dispatch('loadProject', { context: this, project_id: to.params.project_id });
    next();
  }
}
</script>

<style lang="scss">
</style>
