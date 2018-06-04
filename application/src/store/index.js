import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios'

Vue.use(Vuex);
Vue.use(Axios);

const KanbanAPI = `http://${window.location.hostname}:3001`

import authentication from '@/components/pages/authentication'

export default new Vuex.Store({
  state: {
    activeTaskDialog: false,
    projects: [],
    currentProject: {},
    currentList: [],
    currentTask: {task: '', list_id: ''},
  },
  mutations: {
    editActiveTaskDialog (state, { list_id, task }) {
      state.activeTaskDialog = !state.activeTaskDialog;
      if (task!=undefined && list_id!=undefined) {
        state.currentTask.task = task;
        state.currentTask.list_id = list_id;
      }
    },
    setProjects(state, { list }) {
      state.projects = list;
    },
    setCurrentProjct(state, { list }) {
      state.currentProject = {
        name: list.name,
        description: list.description
      };
      state.currentList = list.list;
    }
  },
  actions: {
    getProjects({ commit }, data) {
      Axios.get(`${KanbanAPI}/api/projects`, {
        headers: { 'Authorization': authentication.getAuthenticationHeader(data.context) },
        params: { user_id: data.user_id }
      }).then((data) => {
        commit('setProjects', { list: data.data.project} );
      }).catch(error => {
        console.log(error);
      });
    },
    loadProject({ commit }, data) {
      Axios.get(`${KanbanAPI}/api/project/${data.project_id}`, {
        headers: { 'Authorization': authentication.getAuthenticationHeader(data.context) },
      }).then((data) => {
        commit('setCurrentProjct', { list: data.data.project });
      }).catch(error => {
        console.log(error);
      });
    }
  }
})
