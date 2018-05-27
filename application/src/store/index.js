import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios'

Vue.use(Vuex);
Vue.use(Axios);

const KanbanAPI = `http://${window.location.hostname}:3001`

import authentication from '@/components/pages/authentication'

export default new Vuex.Store({
  state: {
    projects: [],
  },
  mutations: {
    setProjects(state, { list }) {
      console.log(list);
      state.projects = list;
    }
  },
  actions: {
    getProjects({ commit }, data) {
      console.log(data.user_id);
      Axios.get(`${KanbanAPI}/api/projects`, {
        headers: { 'Authorization': authentication.getAuthenticationHeader(data.context) },
        params: { user_id: data.user_id }
      }).then((data) => {
        commit('setProjects', { list: data.data.project} );
      }).catch(error => {
        console.log(error);
      });
    }
  }
})
