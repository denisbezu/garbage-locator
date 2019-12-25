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
    <event-map v-if="isAuthenticated"></event-map>
  </div>
</template>

<script>
  import user from '../../mixins/user';
  import EventMap from '../../components/map/EventMap';

  export default {
    mixins: [user],
    components: {
      EventMap
    }
  }
</script>

<style scoped>

</style>