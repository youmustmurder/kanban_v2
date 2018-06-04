<template>
  <v-list-tile>
    {{ task.detail }}
    Time: {{ task.time }}
    Risk: {{ task.risk }}
    Status: {{ task.status }}
  </v-list-tile>
  <!-- <li class="task-list__item" v-bind:key="task.id">
    <div class="task-list__title" v-on:click="show=!show">{{task.name}}</div>
    <transition name="fade">
      <div v-if="show">
        <div class="task-list__detail">{{task.detail}}</div>
        <div class="task-list_time">{{task.time}} + {{task.risk}} = {{fullTime}}</div>
        <subtasks_list :task-id="task.id"></subtasks_list>
      </div>
    </transition>
    <div class="task-list__btn-wrap">
      <button class="task-list__btn task-list__btn_edit" v-on:click="editTask(task)"></button>
      <button class="task-list__btn task-list__btn_delete" v-on:click="deleteTask(task.id)"></button>
    </div>
  </li> -->
</template>

<script>
  import subtasks_list from './subtasks_list.vue';

  export default {
    components: {
      subtasks_list
    },
    props: [
      'task',
    ],
    data () {
      return {
        show: false,
      }
    },
    computed: {
      // fullTime: function() {
      //   return 1*this.task.time + 1*this.task.risk;
      // }
    },
    methods: {
      // deleteTask: function(id) {
      //   this.$dialog.confirm({
      //     message: 'Удалить задачу?',
      //     cancelText: 'Отменить',
      //     confirmText: 'Удалить',
      //     onConfirm: () => {
      //       this.$store.commit('deleteTask', id);
      //       this.$toast.open({
      //         message: 'Задача удалена',
      //       });
      //     }
      //   });
      // },
      // editTask(task) {
      //   this.$store.commit('editModalFormActive');
      //   this.$bus.$emit('edit_task', task);
      // }
    },
  }
</script>
