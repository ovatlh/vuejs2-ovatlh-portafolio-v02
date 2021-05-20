import Vue from "vue";
import App from "./AppVue.vue";
import router from "./router";
import store from "./store";
import VueRellax from "vue-rellax";

Vue.use(VueRellax);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");