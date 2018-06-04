<template>
  <v-layout row wrap>
    <v-flex xs3 class="board-list__item" v-for="list in getList" :key="list._id">
      <v-card>
        <v-card-title>
          <div class="headline">{{ list.name }}</div>
        </v-card-title>

        <task-list :tasks="list.tasks" :list_id="list._id"></task-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import task_list from './task_list';
import dragula from 'dragula';

export default {
  components: {
    'task-list': task_list
  },
  data () {
    return {

    }
  },
  computed: {
    getList () {
      return this.$store.state.currentList;
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
