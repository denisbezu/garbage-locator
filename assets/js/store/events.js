import EventsAPI from '../api/events';
import {eventsEmmiter} from '../events/emitters';

export default {
  namespaced: true,
  state: {
    markers: []
  },
  mutations: {
    setMarkers(state, payload) {
      state.markers = payload;
      eventsEmmiter.$emit('setMarkers');
    }
  },
  actions: {
    async addEvent({commit}, payload) {
      try {
        let response = await EventsAPI.addEvent(
          payload.type,
          payload.description,
          payload.images,
          payload.position,
          payload.level
        );
        return response.data;
      } catch (error) {
        return null;
      }
    },
    async fetchMarkers({commit}, payload) {
      try {
        let response = await EventsAPI.getMarkers();
        commit('setMarkers', response.data);
        return response.data;
      } catch (error) {
        return null;
      }
    }
  },
  getters: {
    markers(state) {
      return state.markers;
    }
  },
}