import Vue from "vue";

export default {
  state: {
    full_proyectos: [],
  },
  mutations: {
    mut_Save_FullProyectos(state, params) {
      state.full_proyectos = params;
    },
  },
  actions: {
    act_Load_FullProyectos(context) {
      var info_json_link =
        "https://raw.githubusercontent.com/ovatlh/ovatlh.github.io/main/portafolio/info_json/full_proyectos.json";

      Vue.axios
        .get(info_json_link)
        .then((response) => {
          context.commit("mut_Save_FullProyectos", response.data);
        })
        .catch((error) => {
          console.error("Data: error", error);
        });
    },
  },
  getters: {
    get_FullProyectos(state) {
      return state.full_proyectos;
    },
  },
};
