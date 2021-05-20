import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    alias: "/",
    name: "Home",
    component: () =>
      import(
        /* webpackChunkName: "chunckHomeView" */ "../views/Basic/HomeView.vue"
      ),
  },
  {
    path: "/proyectos",
    name: "Proyectos",
    component: () =>
      import(
        /* webpackChunkName: "chunckProyectosView" */ "../views/Proyectos/ProyectosView.vue"
      ),
  },
  {
    path: "/proyecto/:id",
    name: "Proyecto",
    component: () =>
      import(
        /* webpackChunkName: "chunckProyectoView" */ "../views/Proyectos/ProyectoView.vue"
      ),
  },
  {
    path: "*",
    name: "NotFound",
    component: () =>
      import(
        /* webpackChunkName: "chunkNotFoundView" */ "../views/Basic/NotFoundView.vue"
      ),
  },
];

const router = new VueRouter({
  scrollBehavior: function(to) {
    if (to.hash) {
      return {
        selector: to.hash,
        behavior: "smooth",
      };
    }

    return { x: 0, y: 0 };
  },
  routes,
});

export default router;
