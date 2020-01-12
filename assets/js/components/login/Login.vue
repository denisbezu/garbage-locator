<template>
  <div class="container login-page">
    <div class="row col">
      <p>Please, log in</p>
    </div>

    <div class="card">
      <form class="card-body">
        <div class="form-row">
          <div class="col-4">
            <input
                v-model="email"
                type="email"
                 placeholder="Email address"
                class="form-control"
            >
          </div>
          <div class="col-4">
            <input
                v-model="password"
                type="password"
                placeholder="Password"
                class="form-control"
            >
          </div>
          <div class="col-4">
            <button
                :disabled="email.length === 0 || password.length === 0 || isLoading"
                type="button"
                class="btn log-btn"
                @click="performLogin()"
            >
              Login
            </button>
          </div>
        </div>
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
      <error-message :error="error" />
    </div>
  </div>
</template>

<script>
  import ErrorMessage from "../../components/ErrorMessage";

  export default {
    name: "Login",
    components: {
      ErrorMessage,
    },
    data() {
      return {
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
      async performLogin() {
        let payload = {email: this.$data.email, password: this.$data.password},
          redirect = this.$route.query.redirect;

        await this.$store.dispatch("security/login", payload);
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