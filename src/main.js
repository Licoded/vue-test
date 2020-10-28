import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
import router from "./router/index";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import moment from 'moment'

// Vue.filter('dateFormat', function (dateStr,pattern = "YYYY-MM-DD HH:mm:ss") {
//   return moment(dateStr).format(pattern);
// })
Vue.use(ElementUI);
Vue.config.productionTip = false;

axios.defaults.baseURL = "/api";
Vue.prototype.$http = axios;
Vue.prototype.$moment = moment;

new Vue({
  el: "#app",
  render: (h) => h(App),
  router,
});
