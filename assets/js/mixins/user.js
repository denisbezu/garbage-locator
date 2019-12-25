'use strict';

export default {
  computed: {
    isAuthenticated() {
      return this.$store.getters['security/isAuthenticated'];
    },
    user() {
      return this.$store.getters['security/user'];
    }
  }
}