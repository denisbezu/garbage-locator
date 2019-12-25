import Vue from 'vue';
import App from './components/App';
import router from './router';
import store from './store';
import VueSlider from 'vue-slider-component';
import 'vue-slider-component/theme/default.css';

Vue.component('VueSlider', VueSlider);

new Vue({
  components: { App },
  template: '<App/>',
  router,
  store
}).$mount('#app');