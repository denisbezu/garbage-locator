<template>
  <div>
    <div class="row col">
      <h1>My account</h1>
    </div>

    <div class="card" v-if="isAuthenticated && user !== null">
      <form class="card-body">
        <div class="form-group">
          <label for="email">Email address</label>
          <input
              v-model="user.email"
              type="email"
              class="form-control"
          >
        </div>
        <div class="form-group">
          <label for="firstname">Firstname</label>
          <input
              v-model="user.firstname"
              type="text"
              class="form-control"
          >
        </div>
        <div class="form-group">
          <label for="lastname">Lastname</label>
          <input
              v-model="user.lastname"
              type="text"
              class="form-control">
        </div>
        <button
            :disabled="user.email.length === 0 || user.firstname.length === 0 || user.lastname.length === 0 || isLoading"
            type="button"
            class="btn btn-primary"
            @click="saveAccountSettings()">
          Save
        </button>
      </form>
    </div>

    <div class="row col">
      <h2 class="m-0 pt-3">Change password</h2>
    </div>

    <div class="card mt-3">
      <form class="card-body">
        <div class="form-group">
          <label for="password">Password</label>
          <input
              v-model="password"
              type="password"
              class="form-control"
          >
        </div>
        <div class="form-group">
          <label for="repeatPassword">Repeat Password</label>
          <input
              v-model="repeatPassword"
              type="password"
              class="form-control"
          >
        </div>
        <button
            :disabled="password !== repeatPassword || password.length < 6"
            type="button"
            class="btn btn-primary"
            @click="savePasswordSettings()"
        >
          Save
        </button>
      </form>
    </div>

    <div
        v-if="isLoading"
        class="row col"
    >
      <p>Loading...</p>
    </div>

    <div
        v-else-if="hasError"
        class="row col"
    >
      <error-message :error="error"/>
    </div>
  </div>
</template>

<script>
  import user from '../../mixins/user';
  import ErrorMessage from '../ErrorMessage';

  export default {
    components: {
      ErrorMessage
    },
    data() {
      return {
        password: '',
        repeatPassword: '',
      }
    },
    methods: {
      async saveAccountSettings() {
        let payload = {
          email: this.user.email,
          firstname: this.user.firstname,
          lastname: this.user.lastname
        };
        const response = await this.$store.dispatch('account/modifyAccount', payload);
        if (response !== null) {
          this.$store.dispatch('security/onRefresh', {
            isAuthenticated: true,
            user: response
          });
        }
      },
      async savePasswordSettings() {
        let payload = {
          password: this.password,
          repeatPassword: this.repeatPassword
        };
        await this.$store.dispatch('account/changePassword', payload);
        if (!this.hasError) {
          this.password = '';
          this.repeatPassword = '';
        }
      }
    },
    computed: {
      isLoading() {
        return this.$store.getters['account/isLoading'];
      },
      hasError() {
        return this.$store.getters['account/hasError'];
      },
      error() {
        return this.$store.getters['account/error'];
      }
    },
    mixins: [user],
  }
</script>

<style scoped>

</style>