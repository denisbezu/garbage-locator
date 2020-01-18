import Vue from 'vue';
import App from './components/App';
import router from './router';
import store from './store';
import VueSlider from 'vue-slider-component';
import 'vue-slider-component/theme/default.css';
import Vuelidate from 'vuelidate';
import VueProgressBar from 'vue-progressbar';

Vue.component('VueSlider', VueSlider);
Vue.use(Vuelidate);

Vue.use(VueProgressBar, {
  color: 'rgb(32, 133, 57)',
  failedColor: 'red',
  height: '3px'
});

new Vue({
  components: { App },
  template: '<App/>',
  router,
  store
}).$mount('#app');