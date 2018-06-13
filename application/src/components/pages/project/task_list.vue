<template>
  <v-flex xs12>
    <v-list>
      <v-list-group v-for="task in tasks"
                    :key="task._id"
                     no-action>
         <v-list-tile slot="activator">
           <v-list-tile-content>
             <v-list-tile-title>{{ task.name }}</v-list-tile-title>
           </v-list-tile-content>
           <v-list-tile-action>
             <v-icon @click.stop="editTask(task)">edit</v-icon>
           </v-list-tile-action>
         </v-list-tile>
         <task :task="task"></task>
      </v-list-group>
    </v-list>
  </v-flex>
</template>

<script>
import task from './task';
import dragula from 'dragula';

export default {
  components: {
    'task': task
  },
  props: [
    'tasks',
    'list_id'
  ],
  data () {
    return {

    }
  },
  methods: {
    editTask(task) {
      this.$store.commit('editActiveTaskDialog');
      this.$store.commit('setCurrentTask', { list_id: this.list_id, task: task });
    }
  },
  mounted: function() {
    // var self = this;
    // var drake = dragula({
    //   isContainer: function (el) {
    //     return el.classList.contains('drag-inner-list');
    //   }
    // }).on('drag', function(el) {
    //   el.classList.add('is-moving');
    // }).on('drop', function(block, list) {
    //   let index = 0;
    //   for (index = 0; index < list.children.length; index += 1) {
    //     if (list.children[index].classList.contains('is-moving')) break;
    //   }
    //   self.$store.commit('updateList', {id: block.dataset.blockId, status: list.dataset.status})
    // }).on('dragend', function(el) {
    //   el.classList.remove('is-moving');
    //   window.setTimeout(() => {
    //     el.classList.add('is-moved');
    //     window.setTimeout(() => {
    //       el.classList.remove('is-moved');
    //     }, 600);
    //     }, 100);
    // });
  },
}
</script>
