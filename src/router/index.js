import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode:'history',
  routes: [
    {
      path: "/page01",
      component: ()=>import('../pages/Page01.vue'),
    },
    {
      path: "/page02",
      component: ()=>import('../pages/Page02.vue'),
    },
    {
      path: "/page03",
      component: ()=>import('../pages/Page03.vue'),
    },
    {
      path: "/page04",
      component: ()=>import('../pages/Page04.vue'),
    },
    {
      path: "/page05",
      component: ()=>import('../pages/Page05.vue'),
    }
  ],
});
