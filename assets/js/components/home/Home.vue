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
  import user from '../../mixins/user';

  export default {
    mixins: [user]
  }
</script>

<style scoped>

</style>