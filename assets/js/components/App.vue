<template>
  <div class="wrapper">
    <div class="content">
    <nav v-on:click="navcollapse" class="navbar navbar-expand-lg navbar-light">
      <router-link class="navbar-brand" to="/home">
        <img class="logo" alt="logo" src="/img/logo.png" />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="navbarNav" class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <router-link
            class="nav-item"
            tag="li"
            to="/home"
            active-class="active"
          >
            <a class="nav-link">Home</a>
          </router-link>
          <router-link
            v-if="isAuthenticated"
            class="nav-item"
            tag="li"
            to="/account"
            active-class="active"
          >
            <a class="nav-link">My account</a>
          </router-link>
          <router-link
            v-if="!isAuthenticated"
            class="nav-item"
            tag="li"
            to="/login"
            active-class="active"
          >
            <a class="nav-link">Login</a>
          </router-link>
          <router-link
            v-if="!isAuthenticated"
            class="nav-item"
            tag="li"
            to="/register"
            active-class="active"
          >
            <a class="nav-link">Registration</a>
          </router-link>
          <router-link
            class="nav-item"
            tag="li"
            to="/about"
            active-class="active"
          >
            <a class="nav-link">About</a>
          </router-link>
        <li
                v-if="isAuthenticated && isAdmin"
                class="nav-item"
        >
            <a
                    class="nav-link"
                    href="/admin"
            >Admin panel</a>
        </li>
          <li
              v-if="isAuthenticated"
              class="nav-item"
          >
            <a
                class="nav-link"
                href="/api/security/logout"
            >Logout</a>
          </li>
        </ul>
      </div>
    </nav>
    <router-view />
    <vue-progress-bar></vue-progress-bar>
   </div>
    <Footer />
  </div>
</template>

<script>
import axios from "axios";
import Footer from "./footer/Footer.vue";

export default {
  components: {
    Footer
  },
  name: "App",
  computed: {
    isAuthenticated() {
      return this.$store.getters["security/isAuthenticated"];
    },
      isAdmin() {
          return this.isAuthenticated && this.user.roles.includes('ROLE_ADMIN');
      },
      user() {
          return this.$store.getters['security/user'];
      }
  },
  methods: {
    navcollapse: function() {
      $("#navbarNav").toggleClass("show");
    }
  },
  created() {
    const self = this;
    let isAuthenticated = JSON.parse(
        this.$parent.$el.attributes["data-is-authenticated"].value
      ),
      user = JSON.parse(this.$parent.$el.attributes["data-user"].value);

    let payload = { isAuthenticated: isAuthenticated, user: user };
    this.$store.dispatch("security/onRefresh", payload);

    axios.interceptors.response.use(undefined, err => {
      return new Promise(() => {
        if (err.response.status === 401) {
          this.$router.push({ path: "/login" });
        } else if (err.response.status === 500) {
          document.open();
          document.write(err.response.data);
          document.close();
        }

        throw err;
      });
    });

    axios.interceptors.request.use(config => {
      self.$Progress.start(); // for every request start the progress
      return config;
    });

    axios.interceptors.response.use(response => {
      self.$Progress.finish(); // finish when a response is received
      return response;
    });
  }
};
</script>
