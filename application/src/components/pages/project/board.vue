<template>
  <v-layout row wrap class="board-list">
    <task-list-block></task-list-block>
    <modal-task></modal-task>
  </v-layout>
</template>

<script>
import task_list_block from './task_list_block'
import modal_task from './modal_task'

export default {
  components: {
    'task-list-block': task_list_block,
    'modal-task': modal_task
  },
  data () {
    return {

    }
  },
  computed: {

  }
}
</script>

<style lang="scss">
</style>
