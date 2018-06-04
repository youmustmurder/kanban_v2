<template>
  <v-dialog v-model="activeTaskDialog" fullscreen hide-overlay transition="dialog-bottom-transition" lazy>
    <v-card>
      <v-card-title>Задача</v-card-title>
      <v-card-text>
        <v-container grid-list-md>
          <v-layout wrap>
            <v-flex xs12>
              <v-text-field label="Название задачи" required v-model="currentTask.name"></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field multi-line label="Описание" v-model="currentTask.detail"></v-text-field>
            </v-flex>
            <v-flex xs6>
              <v-text-field label="Время" suffix="мин" type="number" v-model="currentTask.time"></v-text-field>
            </v-flex>
            <v-flex xs6>
              <v-text-field label="Риски" suffix="мин" type="number" v-model="currentTask.risk"></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn flat @click.native="activeTaskDialog=false">Отмена</v-btn>
        <v-btn flat @click.native="saveTask()">{{ TaskDialogSubmitText }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import api from './index.js'

export default {
  data () {
    return {
      TaskDialogSubmitText: 'Сохранить'
    }
  },
  computed: {
    currentTask () {
      return this.$store.state.currentTask.task;
    },
    activeTaskDialog: {
      get() {
        return this.$store.state.activeTaskDialog;
      },
      set() {
        this.$store.commit('editActiveTaskDialog');
      }
    },
  },
  methods: {
    saveTask() {
      api.saveTask(this, this.$route.params.project_id, this.$store.state.currentTask.list_id, this.currentTask);
    }
  }
}
</script>
