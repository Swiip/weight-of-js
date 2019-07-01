import Vue from "vue";
import App from "./App.vue";
import store from "./store";

import * as VueX from "vuex";
import * as VueRouter from "vue-router";
import * as Vuetify from "vuetify";
// import * as MaterialIcons from "vue-material-design-icons";

console.log("full!", VueX, VueRouter, Vuetify);

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
