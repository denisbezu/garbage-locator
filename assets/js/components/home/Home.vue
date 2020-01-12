<template>
  <div class="container home-page">
    <div class="row col">
      <h1>Welcome to EcoWalk</h1>
    </div>
    <div class="row col">
      <p v-if="isAuthenticated && user !== null">
        {{ 'Hello, ' + user.firstname + ' ' + user.lastname }}
      </p>
      <p v-else>
        Try to register or log in to be able to participate in EcoWalk game.
      </p>
    </div>
    <div class="intro-img-holder">
      <img alt="intro-photo" class="intro" src="/img/eco.png">
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