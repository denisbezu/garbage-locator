import CommentsAPI from '../api/comments';
import {eventsEmmiter} from "../events/emitters";

export default {
  namespaced: true,
  state: {},
  mutations: {
    addComment(state, payload) {
      if (this.state.events.openedEvent['id']) {
        this.state.events.openedEvent.comments.push(payload);
        eventsEmmiter.$emit('addComment');
      }
    },
    addScore(state, payload) {
      if (this.state.events.openedEvent['id']) {
        this.state.events.openedEvent.comments.forEach(comment => {
          if (comment.id === payload) {
            comment.score++;
          }
        });
      }
    },
    removeScore(state, payload) {
      if (this.state.events.openedEvent['id']) {
        this.state.events.openedEvent.comments.forEach(comment => {
          if (comment.id === payload) {
            comment.score--;
          }
        });
      }
    }
  },
  actions: {
    async addComment({commit}, payload) {
      const response = await CommentsAPI.addComment(payload.text, payload.eventId);
      if (response.data) {
        commit('addComment', response.data);
      }
    },
    async addCommentScore({commit}, payload) {
      const response = await CommentsAPI.addCommentScore(payload);
      commit('addScore', payload);
    },
    async removeCommentScore({commit}, payload) {
      const response = await CommentsAPI.removeCommentScore(payload);
      commit('removeScore', payload);
    }
  },
  getters: {},
}