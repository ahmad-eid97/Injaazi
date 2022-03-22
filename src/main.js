import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue } from 'bootstrap-vue'
// import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import VueCarousel from 'vue-carousel';

Vue.use(VueCarousel);

Vue.use(BootstrapVue)

// import VueCropper from 'vue-cropperjs';
// import 'cropperjs/dist/cropper.css';
// Vue.component(VueCropper);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
