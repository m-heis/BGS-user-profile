<template>
  <v-row align="center" justify="center">
    <v-col cols="12" sm="8" md="4">
      <v-card class="elevation-12" max-width="500">
        <v-toolbar color="primary" dark flat>
          <v-toolbar-title>Войти</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-card-text>
          <v-text-field
            v-model="email"
            label="Email"
            color="primary"
            :rules="emailRules"
          />
          <v-text-field
            v-model="password"
            label="Пароль"
            type="password"
            color="primary"
            :rules="passwordRules"
          />
        </v-card-text>
        <v-card-actions>
          <v-btn class="primary theme--dark" @click="login">
            Войти
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
    <v-col cols="12">
      <v-snackbar
        v-model="snackbar"
      >
        Такого пользователя не существует

        <template v-slot:action="{ attrs }">
          <v-btn
            color="pink"
            text
            v-bind="attrs"
            @click="snackbar = false"
          >
            Закрыть
          </v-btn>
        </template>
      </v-snackbar>
      <v-snackbar
        v-model="passwordSnackbar"
      >
        Неправильный пароль. Попробуйте, еще раз.

        <template v-slot:action="{ attrs }">
          <v-btn
            color="pink"
            text
            v-bind="attrs"
            @click="passwordSnackbar = false"
          >
            Закрыть
          </v-btn>
        </template>
      </v-snackbar>
    </v-col>
  </v-row>
</template>

<script>

export default {
  layout: 'default',
  data: () => ({
    email: '',
    password: '',
    user: {},
    snackbar: false,
    passwordSnackbar: false,
    emailRules: [
      v => !!v || 'Пропишите свой e-mail',
      v => /.+@.+\..+/.test(v) || 'E-mail не правильного формата',
    ],
    passwordRules: [
      v => !!v || 'Пропишите свой пароль',
    ],
  }),
  computed: {
    users () {
      return this.$store.state.users
    }
  },
  methods: {
    login () {
      this.user = this.users.filter(user => this.email === user.email);
      if(this.user.length === 0){
        this.snackbar = true
        this.email = ''
        this.password = ''
      } else {
        if (this.user[0].password === this.password) {
          this.$router.push('/')
          this.$store.dispatch('loadCurrentUser', this.user[0])
        } else {
          this.password = ''
          this.passwordSnackbar = true
        }
      }
    }
  }
}
</script>
