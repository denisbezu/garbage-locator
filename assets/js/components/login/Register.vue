<template>
  <div class="container register-page">
    <div class="row col">
      <p>Please, register your profile</p>
    </div>

    <div class="card">
      <form class="card-body" novalidate>
        <div class="form-group">
          <input
              v-model.trim="$v.email.$model"
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
        <div class="form-group">
          <input
              v-model="$v.firstname.$model"
              type="text"
              placeholder="Firstname"
              class="form-control"
              :class="{'is-invalid': $v.firstname.$error}"
          >
          <div v-if="!$v.firstname.required"
               class="invalid-feedback">
            Firstname is required.
          </div>
          <div v-if="!$v.firstname.minLength"
               class="invalid-feedback">
            Name must have at least {{ $v.firstname.$params.minLength.min }} letters.
          </div>
        </div>
        <div class="form-group">
          <input
              v-model="$v.lastname.$model"
              type="text"
              placeholder="Lastname"
              class="form-control"
              :class="{'is-invalid': $v.lastname.$error}"
          >
          <div v-if="!$v.lastname.required"
               class="invalid-feedback">
            Lastname is required.
          </div>
          <div v-if="!$v.lastname.minLength"
               class="invalid-feedback">
            Lastname must have at least {{ $v.lastname.$params.minLength.min }} letters.
          </div>
        </div>
        <div class="form-group">
          <input
              v-model.trim="$v.password.$model"
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
        <div class="form-group">
          <input
              v-model.trim="$v.repeatPassword.$model"
              type="password"
              placeholder="Reapeat password"
              class="form-control"
              :class="{'is-invalid': $v.repeatPassword.$error}"
          >
          <div v-if="!$v.repeatPassword.sameAsPassword"
               class="invalid-feedback">
            Passwords must be identical.
          </div>
        </div>
        <button
            :disabled="!isFormValid || isLoading"
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
  import ErrorMessage from '../../components/ErrorMessage';

  const {required, minLength, email, sameAs} = require('vuelidate/lib/validators');

  export default {
    name: "Register",
    components: {
      ErrorMessage,
    },
    data() {
      return {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        repeatPassword: ''
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
      },
      isFormValid() {
        return !this.$v.$invalid;
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
        this.$v.$touch();
        if (!this.isFormValid) {
          return;
        }
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
    },
    validations: {
      firstname: {
        minLength: minLength(3),
        required
      },
      lastname: {
        minLength: minLength(3),
        required
      },
      email: {
        email,
        required
      },
      password: {
        minLength: minLength(3),
        required
      },
      repeatPassword: {
        sameAsPassword: sameAs('password')
      }
    }
  }
</script>

<style scoped>

</style>