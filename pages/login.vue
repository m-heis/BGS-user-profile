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
          />
          <v-text-field
            v-model="password"
            label="Пароль"
            type="password"
            color="primary"
          />
        </v-card-text>
        <v-card-actions>
          <v-btn class="primary theme--dark" @click="login">
            Войти
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>

export default {
  layout: 'default',
  data: () => ({
    email: '',
    password: ''
  }),
  methods: {
    login () {
      this.$router.push('/')
    }
  }
}
</script>
