import Axios from 'axios'
import router from '@/router'

const KanbanAPI = `http://${window.location.hostname}:3001`

export default {
  user: {
    authenticated: false
  },

  login(context, credentials, redirect) {
    Axios.post(`${KanbanAPI}/api/auth`, credentials)
              .then(({data}) => {
                context.$cookie.set('token', data.token, '1D');
              }).catch(({response: {data}}) => {
                context.snackbar = true;
                context.message = data.message;
                context.validLogin = true;
                this.user.authenticated = true;
                if (redirect) router.push(redirect);
              });
  }
}
