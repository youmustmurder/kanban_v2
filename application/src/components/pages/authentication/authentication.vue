<template>
  <v-layout row wrap align-center justify-center>
    <v-flex xs3>
      <div class="login-block">
        <v-form v-model="validLogin">
          <v-text-field v-model="credentials.username"
                        :rules="loginRules"
                        label="Логин"
                        prepend-icon="account_circle"
                        required>
          </v-text-field>
          <v-text-field v-model="credentials.password"
                        :rules="passwordRules"
                        label="Пароль"
                        prepend-icon="lock"
                        :append-icon="loginPasswordVisible ? 'visibility' : 'visibility_off'"
                        :append-icon-cb="() => (loginPasswordVisible = !loginPasswordVisible)"
                        :type="loginPasswordVisible ? 'text' : 'password'"
                        required>
          </v-text-field>
          <v-btn @click="login()">
            Войти
          </v-btn>
          <v-btn>
            Зарегистрироваться
          </v-btn>
        </v-form>
      </div>
    </v-flex>
    <v-snackbar timeout="6000"
                bottom="bottom"
                color="red lighten-1"
                v-model="scackbar">
      {{ message }}
    </v-snackbar>
  </v-layout>
</template>

<script>
import authentication from '@/components/pages/authentication'

export default {
  data () {
    return {
      credentials: {
        username: '',
        password: ''
      },
      validLogin: false,
      loginPasswordVisible: false,
      scackbar: false,
      loginRules: [
        v => !!v || 'Логин обязательн'
      ],
      passwordRules: [
        v => !!v || 'Пароль обязателен'
      ],
      message: ''
    }
  },
  methods: {
    login() {
      authentication.login(this, this.credentials, '/')
    }
  }
}
</script>

<style lang="scss">
</style>
