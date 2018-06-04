<template>
  <li class="subtasks-list__item">
    <div class="subtask-list__name">
      {{subtask.name}}
    </div>
    <div class="subtask-list__wrap">
      <button class="task-list__btn task-list__btn_edit" v-on:click="editTask(subtask)"></button>
      <button class="task-list__btn task-list__btn_delete" v-on:click="deleteTask(subtask.id)"></button>
    </div>
  </li>
</template>

<script>
export default {
  props: [
    'subtask'
  ],
  methods: {
    deleteTask: function(id) {
      this.$dialog.confirm({
        message: 'Удалить подзадачу?',
        cancelText: 'Отменить',
        confirmText: 'Удалить',
        onConfirm: () => {
          this.$store.commit('deleteTask', id);
          this.$toast.open({
            message: 'Подзадача удалена',
          });
        }
      });
    },
    editTask(subtask) {
      this.$store.commit('editModalFormActive');
      this.$bus.$emit('edit_task', subtask);
    }
  },
}
</script>
