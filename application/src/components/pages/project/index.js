import Axios from 'axios'
import router from '@/router'
import authentication from '@/components/pages/authentication'

const KanbanAPI = `http://${window.location.hostname}:3001`

export default {
  saveTask(context, project_id, list_id, task) {
    Axios.post(`${KanbanAPI}/api/save_task`,
      { projectId: project_id , listId: list_id, task: task },
      { headers: { 'Authorization': authentication.getAuthenticationHeader(context) },
    }).then((data) => {
      // commit('setProjects', { list: data.data.project} );
    }).catch(error => {
      console.log(error);
    });
  },
}
