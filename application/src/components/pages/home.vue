<template>
  <v-layout>
    <header-custom></header-custom>
  </v-layout>
</template>

<script>
import header from '@/components/common/header'

export default {
  components: {
    'header-custom': header
  },
  data () {
    return {
      drawer: false
    }
  }
}
</script>

<style lang="css">
</style>
