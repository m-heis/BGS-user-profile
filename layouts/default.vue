<template>
  <v-app>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      dark
      color="primary"
    >
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn
        color="secondary"
      >
        Email
      </v-btn>
      <v-btn
        color="secondary"
        class="ml-4"
        @click="logout"
      >
        Выйти
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer
      :absolute="!fixed"
      app
      color="primary"
      dark
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      fixed: false,
      title: 'BGS user profile'
    }
  },
  methods: {
    logout() {
      this.$router.push('/login')
    }
  }
}
</script>
