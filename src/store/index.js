import Vue from "vue";
import Vuex from "vuex";

// Import modules
import module_home_proyectos from "./modules/module_home_proyectos.js";
import module_resumen_proyectos from "./modules/module_resumen_proyectos.js";
import module_full_proyectos from "./modules/module_full_proyectos.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    module_home_proyectos,
    module_resumen_proyectos,
    module_full_proyectos,
  },
  state: {},
  mutations: {},
  actions: {},
});
