<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm8
      md6
    >
      <div class="text-center">
      </div>
      <v-card class="elevation-12" max-width="700">
        <v-toolbar color="primary" dark flat>
          <v-toolbar-title>Войти</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-card-text>
          <v-text-field
            v-model="email"
            label="Адрес электронной почты"
            color="primary"
          />
          <v-text-field
            v-model="password"
            label="Пароль"
            type="password"
            color="primary"
          />
          <div style="font-size: 15px" class="mt-4">
            У вас еще нет аккаунта?
            <span
              class="primary--text"
              style="cursor: pointer"
              @click="toRegistration"
            >
                    Регистрация
                  </span>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn class="primary theme--dark" @click="login">
            Войти
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>

export default {
  layout: 'default',
  data: () => ({
    email: '',
    password: ''
  }),
  components: {
  },
  methods: {
    login () {

    },
    toRegistration () {

    }
  }
}
</script>
