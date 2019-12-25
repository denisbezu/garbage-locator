import AccountAPI from '../api/account';

export default {
  namespaced: true,
  state: {
    isLoading: false,
    error: null
  },
  mutations: {
    startLoading(state) {
      state.isLoading = true;
      state.error = null;
    },
    successLoading(state) {
      state.isLoading = false;
      state.error = null;
    },
    errorLoading(state, error) {
      state.isLoading = false;
      state.error = error;
    },
  },
  actions: {
    async modifyAccount({commit}, payload) {
      commit('startLoading');
      try {
        let response = await AccountAPI.modifyAccount(payload.email, payload.firstname, payload.lastname);
        commit('successLoading');
        return response.data;
      } catch (error) {
        commit('errorLoading', error);
        return null;
      }
    },
    async changePassword({commit}, payload) {
      commit('startLoading');
      try {
        let response = await AccountAPI.changePassword(payload.password, payload.repeatPassword);
        commit('successLoading');
        return response.data;
      } catch (error) {
        commit('errorLoading', error);
        return null;
      }
    }
  },
  getters: {
    isLoading(state) {
      return state.isLoading;
    },
    hasError(state) {
      return state.error !== null;
    },
    error(state) {
      return state.error;
    }
  },
}