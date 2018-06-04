<template>
  <div class="subtask">
    <ul class="list-unstyled subtasks-list">
      <subtask v-for="task in getSubtask" :key="task.id" :subtask="task"></subtask>
    </ul>
  </div>
</template>

<script>
import subtask from './subtask.vue';

export default {
  components: {
    subtask
  },
  props: ['taskId'],
  computed: {
    getSubtask() {
      return this.$store.getters.getSubtask(this.taskId);
    }
  }
}
</script>
