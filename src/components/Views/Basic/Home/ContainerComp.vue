<template>
  <div class="container-comp">
    <ProyectosComp class="proyectos" id="Proyectos" />
    <ServiciosComp class="servicios" id="Servicios" />
    <TecnologiasComp class="tecnologias" id="Tecnologias" />
    <SobreMiComp class="sobremi" id="SobreMi" />
  </div>
</template>

<script>
import ProyectosComp from "@/components/Views/Basic/Home/Proyectos/ProyectosComp.vue";
import ServiciosComp from "@/components/Views/Basic/Home/Servicios/ServiciosComp.vue";
import TecnologiasComp from "@/components/Views/Basic/Home/Tecnologias/TecnologiasComp.vue";
import SobreMiComp from "@/components/Views/Basic/Home/SobreMi/SobreMiComp.vue";

export default {
  components: {
    ProyectosComp,
    ServiciosComp,
    TecnologiasComp,
    SobreMiComp,
  },
  name: "container-comp",
  props: [],
  mounted() {},
  data() {
    return {};
  },
  methods: {},
  computed: {},
};
</script>

<style scoped>
.container-comp {
  display: grid;
  gap: 100px;
  padding: 30px 30px 60px 30px;
  grid-template-columns: minmax(auto, 1400px);
  justify-content: center;
}

.proyectos, .servicios, .tecnologias, .sobremi {
  padding-top: 50px;
}
</style>
