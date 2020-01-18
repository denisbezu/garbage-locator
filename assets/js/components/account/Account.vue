<template>
  <div class="container login-page account-page">
    <div class="row col">
      <p>My account</p>
    </div>

    <div class="card" v-if="isAuthenticated && user !== null">
      <form class="card-body">
        <div class="form-group">
          <label for="email">Email address</label>
          <input
              v-model="$v.user.email.$model"
              type="email"
              class="form-control"
              :class="{'is-invalid': $v.user.email.$error}"
          >
          <div v-if="!$v.user.email.email"
               class="invalid-feedback">
            Please provide a valid email.
          </div>
          <div v-if="!$v.user.email.required"
               class="invalid-feedback">
            Email could not be empty.
          </div>
        </div>
        <div class="form-group">
          <label for="firstname">Firstname</label>
          <input
              v-model="$v.user.firstname.$model"
              type="text"
              class="form-control"
              :class="{'is-invalid': $v.user.firstname.$error}"
          >
          <div v-if="!$v.user.firstname.required"
               class="invalid-feedback">
            Firstname is required.
          </div>
          <div v-if="!$v.user.firstname.minLength"
               class="invalid-feedback">
            Firstname must have at least {{ $v.user.firstname.$params.minLength.min }} letters.
          </div>
        </div>
        <div class="form-group">
          <label for="lastname">Lastname</label>
          <input
              v-model="$v.user.lastname.$model"
              type="text"
              class="form-control"
              :class="{'is-invalid': $v.user.lastname.$error}"
          >
          <div v-if="!$v.user.lastname.required"
               class="invalid-feedback">
            Lastname is required.
          </div>
          <div v-if="!$v.user.lastname.minLength"
               class="invalid-feedback">
            Lastname must have at least {{ $v.user.lastname.$params.minLength.min }} letters.
          </div>
        </div>
        <button
            :disabled="!isTopFormValid || isLoading"
            type="button"
            class="btn"
            @click="saveAccountSettings()">
          Save
        </button>
      </form>
    </div>

    <div class="row col">
      <p class="m-0 pt-3">Change password</p>
    </div>

    <div class="card mt-3 password-card">
      <form class="card-body">
        <div class="form-group">
          <label for="password">Password</label>
          <input
              v-model="$v.password.$model"
              type="password"
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
          <label for="repeatPassword">Repeat Password</label>
          <input
              v-model="$v.repeatPassword.$model"
              type="password"
              class="form-control"
              :class="{'is-invalid': $v.repeatPassword.$error}"
          >
          <div v-if="!$v.repeatPassword.sameAsPassword"
               class="invalid-feedback">
            Passwords must be identical.
          </div>
        </div>
        <button
            :disabled="!isBottomFormValid"
            type="button"
            class="btn"
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

  const {required, minLength, email, sameAs} = require('vuelidate/lib/validators');

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
          this.$v.$reset();
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
      },
      isTopFormValid() {
        return !this.$v.user.firstname.$invalid
          && !this.$v.user.lastname.$invalid
          && !this.$v.user.email.$invalid;
      },
      isBottomFormValid() {
        return !this.$v.password.$invalid && !this.$v.repeatPassword.$invalid;
      }
    },
    mixins: [user],
    validations: {
      user: {
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
  .account-page {
    margin-bottom: 40px;
  }
</style>