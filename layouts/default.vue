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
  }
}
</script>
