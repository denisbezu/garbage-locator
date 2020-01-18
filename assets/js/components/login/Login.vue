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
                v-model="$v.email.$model"
                type="email"
                placeholder="Email address"
                class="form-control"
                :class="{'is-invalid': $v.email.$error}"
            >
            <div v-if="!$v.email.email"
                 class="invalid-feedback">
              Please provide a valid email.
            </div>
            <div v-if="!$v.email.required"
                 class="invalid-feedback">
              Email could not be empty.
            </div>
          </div>
          <div class="col-4">
            <input
                v-model="$v.password.$model"
                type="password"
                placeholder="Password"
                class="form-control"
                :class="{'is-invalid': $v.password.$error}"
            >
            <div v-if="!$v.password.required"
                 class="invalid-feedback">
              Password is required.
            </div>
            <div v-if="!$v.password.minLength"
                 class="invalid-feedback">
              Password must have at least {{ $v.password.$params.minLength.min }} letters.
            </div>
          </div>
          <div class="col-4">
            <button
                :disabled="!isFormValid || isLoading"
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
      <error-message :error="error"/>
    </div>
  </div>
</template>

<script>
  import ErrorMessage from "../../components/ErrorMessage";
  const {required, minLength, email} = require('vuelidate/lib/validators');

  export default {
    name: "Login",
    components: {
      ErrorMessage,
    },
    data() {
      return {
        email: '',
        password: ''
      };
    },
    computed: {
      isLoading() {
        return this.$store.getters['security/isLoading'];
      },
      hasError() {
        return this.$store.getters['security/hasError'];
      },
      error() {
        return this.$store.getters['security/error'];
      },
      isFormValid() {
        return !this.$v.$invalid;
      }
    },
    created() {
      let redirect = this.$route.query.redirect;

      if (this.$store.getters['security/isAuthenticated']) {
        if (typeof redirect !== 'undefined') {
          this.$router.push({path: redirect});
        } else {
          this.$router.push({path: '/home'});
        }
      }
    },
    methods: {
      async performLogin() {
        this.$v.$touch();
        if (!this.isFormValid) {
          return;
        }
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
    },
    validations: {
      email: {
        email,
        required
      },
      password: {
        minLength: minLength(3),
        required
      }
    }
  }
</script>