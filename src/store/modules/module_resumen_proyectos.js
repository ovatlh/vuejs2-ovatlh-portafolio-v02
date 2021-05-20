import Vue from "vue";

export default {
  state: {
    resumen_proyectos: [],
  },
  mutations: {
    mut_Save_ResumenProyectos(state, params) {
      state.resumen_proyectos = params;
    },
  },
  actions: {
    act_Load_ResumenProyectos(context) {
      var info_json_link = "https://raw.githubusercontent.com/ovatlh/ovatlh.github.io/main/portafolio/info_json/resumen_proyectos.json";

      Vue.axios
        .get(info_json_link)
        .then((response) => {
          context.commit("mut_Save_ResumenProyectos", response.data);
        })
        .catch((error) => {
          console.error("Data: error", error);
        });
    },
  },
  getters: {
    get_ResumenProyectos(state) {
      return state.resumen_proyectos;
    },
  },
};
