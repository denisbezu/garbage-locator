import Vue from 'vue';
import Vuex from 'vuex';
import SecurityModule from './security';
import AccountModule from './account';
import EventsModule from './events';
import CommentsModule from './comments';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    security: SecurityModule,
    account: AccountModule,
    events: EventsModule,
    comments: CommentsModule
  }
});