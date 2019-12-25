<template>
  <div>
    <div class="row col">
      <h1>EcoWalk</h1>
    </div>

    <div class="row col">
      <p v-if="isAuthenticated && user !== null">
        {{ 'Hello, ' + user.firstname + ' ' + user.lastname }}
      </p>
      <p v-else>
        Try to register or log in to be able to participate in EcoWalk game.
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      isAuthenticated() {
        return this.$store.getters["security/isAuthenticated"];
      },
      user() {
        return this.$store.getters["security/user"];
      },
    },
  }
</script>

<style scoped>

</style>