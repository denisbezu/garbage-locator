import EventsAPI from '../api/events';
import {eventsEmmiter} from '../events/emitters';

export default {
  namespaced: true,
  state: {
    markers: [],
    selectedEvents: [],
    openedEvent: false
  },
  mutations: {
    setMarkers(state, payload) {
      state.markers = payload;
      eventsEmmiter.$emit('setMarkers');
    },
    setSelectedEvents(state, payload) {
      state.selectedEvents = payload;
      eventsEmmiter.$emit('setSelectedEvents');
    },
    setOpenedEvent(state, payload) {
      state.openedEvent = payload;
      eventsEmmiter.$emit('setOpenedEvent', payload);
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
    },
    async selectMarker({commit}, payload) {
      let response = await EventsAPI.getEvents(payload.longitude, payload.latitude);
      commit('setSelectedEvents', response.data);
    },
    async clearSelectedEvents({commit}) {
      commit('setSelectedEvents', []);
    },
    async setOpenedEvent({commit}, payload) {
      commit('setOpenedEvent', payload);
    },
    async toggleEventUserResult({commit}, payload) {
      let response = await EventsAPI.toggleEventResult(payload);
      commit('setOpenedEvent', response.data);
    },
    async cleanMarkers({commit}, payload) {
      commit('setMarkers', []);
    }
  },
  getters: {
    markers(state) {
      return state.markers;
    },
    selectedEvents(state) {
      return state.selectedEvents;
    },
    openedEvent(state) {
      return state.openedEvent;
    }
  },
}