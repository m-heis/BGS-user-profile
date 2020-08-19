<template>
  <v-row align="center" justify="center">
    <v-col cols="12" sm="8" md="4">
      <v-card class="elevation-12" max-width="500">
        <v-card-text>
          <v-img
            :src="this.$store.state.currentUser.img"
            height="194"
          ></v-img>
        </v-card-text>
        <v-card-text>
          <v-row>
            <v-col class="text-center">
              <h3>
                {{ this.$store.state.currentUser.name }}
              </h3>
            </v-col>
            <v-col>
              <h3>
                {{ this.$store.state.currentUser.email }}
              </h3>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>

export default {
  layout: 'default',
  mounted() {
    if (Object.keys(this.$store.state.currentUser).length == 0) {
      this.$router.push('/login')
    }
  }
}
</script>
