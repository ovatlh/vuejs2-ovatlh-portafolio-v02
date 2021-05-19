<template>
  <div class="servicios-comp">
    <h1 class="title">Servicios</h1>
    <div class="list">
      <div v-for="(item, index) in servicios" :key="index" class="servicio">
        <h3>{{ item.title }}</h3>
        <p>{{ item.desc }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "servicios-comp",
  props: [],
  mounted() {},
  data() {
    return {
      servicios: [
        {
          title: "Bases de Datos",
          desc: "Diseño y Administración de bases de datos MySQL",
        },
        {
          title: "Back-end",
          desc: "Web API RESTful con .NET Core",
        },
        {
          title: "Front-end",
          desc:
            "Páginas web con HTML, CSS y JS. Aplicaciones web (SPA) con Vue.js",
        },
        {
          title: "UI/UX",
          desc:
            "Creación de diseños interactivos de UI/UX para una experiencia de usuario sencilla y fluida",
        },
        {
          title: "Aplicaciones Móviles",
          desc: "Aplicaciones con Xamarin.Forms para móviles Android y iOS",
        },
      ],
    };
  },
  methods: {},
  computed: {},
};
</script>

<style scoped>
.servicios-comp {
  display: grid;
  gap: 10px;
  grid-template-areas: "Title" "List";
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
}

.title {
  grid-area: Title;
  text-align: center;
}

.list {
  grid-area: List;
  display: grid;
  gap: 30px;
}
</style>
