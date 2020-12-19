import Vue from 'vue';
import './plugins/toasts';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import VueSimpleAlert from "vue-simple-alert";
import VueEllipseProgress from 'vue-ellipse-progress';
import VueTheMask from 'vue-the-mask'
import App from './App.vue';
import store from './store';
import router from './router';

Vue.use(VueEllipseProgress);
Vue.use(VueSimpleAlert);
Vue.use(VueTheMask)

Vue.config.productionTip = false;

Vue.directive("scroll", {
  inserted: function(el, binding) {
    let f = function(evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener("scroll", f);
      }
    };
    window.addEventListener("scroll", f);
  }
});

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app');
