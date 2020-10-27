import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
import router from "./router/index";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI);
Vue.config.productionTip = false;

axios.defaults.baseURL = "/api";
Vue.prototype.$http = axios;

new Vue({
  el: "#app",
  render: (h) => h(App),
  router,
});
