<template>
  <div class="container register-page">
    <div class="row col">
      <p>Please, register your profile</p>
    </div>

    <div class="card">
      <form class="card-body">
        <div class="form-group"> 
          <input
              v-model="email"
              type="email"
              placeholder="Email address"
              class="form-control"
          >
        </div>
        <div class="form-group"> 
          <input
              v-model="firstname"
              type="text"
              placeholder="Firstname"
              class="form-control"
          >
        </div>
        <div class="form-group">
          <input
              v-model="lastname"
              type="text"
              placeholder="Lastname"
              class="form-control"
          >
        </div>
        <div class="form-group">
          <input
              v-model="password"
              type="password"
              placeholder="Password"
              class="form-control"
          >
        </div>
        <button
            :disabled="email.length === 0 || password.length === 0 || isLoading"
            type="button"
            class="btn reg-btn"
            @click="performRegister()"
        >
          Register
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
  import ErrorMessage from "../../components/ErrorMessage";

  export default {
    name: "Register",
    components: {
      ErrorMessage,
    },
    data() {
      return {
        firstname: "",
        lastname: "",
        email: "",
        password: ""
      };
    },
    computed: {
      isLoading() {
        return this.$store.getters["security/isLoading"];
      },
      hasError() {
        return this.$store.getters["security/hasError"];
      },
      error() {
        return this.$store.getters["security/error"];
      }
    },
    created() {
      let redirect = this.$route.query.redirect;

      if (this.$store.getters["security/isAuthenticated"]) {
        if (typeof redirect !== "undefined") {
          this.$router.push({path: redirect});
        } else {
          this.$router.push({path: "/home"});
        }
      }
    },
    methods: {
      async performRegister() {
        let payload = {
            email: this.email,
            password: this.password,
            firstname: this.firstname,
            lastname: this.lastname
          },
          redirect = this.$route.query.redirect;

        await this.$store.dispatch("security/register", payload);
        if (!this.$store.getters["security/hasError"]) {
          if (typeof redirect !== "undefined") {
            this.$router.push({path: redirect});
          } else {
            this.$router.push({path: "/home"});
          }
        }
      }
    }
  }
</script>

<style scoped>

</style>