import Vue from "vue";

export default {
  state: {
    home_proyectos: [],
  },
  mutations: {
    mut_Save_HomeProyectos(state, params) {
      state.home_proyectos = params;
    },
  },
  actions: {
    act_Load_HomeProyectos(context) {
      var info_json_link = "https://raw.githubusercontent.com/ovatlh/ovatlh.github.io/main/portafolio/info_json/home_proyectos.json";

      Vue.axios
        .get(info_json_link)
        .then((response) => {
          context.commit("mut_Save_HomeProyectos", response.data);
        })
        .catch((error) => {
          console.error("Data: error", error);
        });
    },
  },
  getters: {
    get_HomeProyectos(state) {
      return state.home_proyectos;
    },
  },
};
