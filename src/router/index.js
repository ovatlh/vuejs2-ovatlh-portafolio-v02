import Vue from "vue";
import VueRouter from "vue-router";
import { EventBus } from "@/EventBus/event-bus.js";

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

router.beforeResolve((to, from, next) => {
  if (
    (from.path === "/" || from.path === "/home") &&
    (to.path === "/" || to.path === "/home")
  ) {
    next();
  } else {
    setTimeout(function() {
      next();
    }, 200);

    EventBus.$emit("transicion-on");
  }
});

router.afterEach(() => {
  setTimeout(function() {
    EventBus.$emit("transicion-off");
  }, 200);
});

export default router;
