<template>
  <div class="navbar-comp">
    <router-link class="link" :to="{ path: '/', hash: '#Inicio' }">Inicio</router-link>
    <router-link class="link" :to="{ path: '/', hash: '#Proyectos' }">Proyectos</router-link>
    <router-link class="link" :to="{ path: '/', hash: '#Servicios' }">Servicios</router-link>
    <router-link class="link" :to="{ path: '/', hash: '#Tecnologias' }">Tecnologías</router-link>
    <router-link class="link" :to="{ path: '/', hash: '#SobreMi' }">Sobre mi</router-link>
    <a class="link" @click="mth_Contacto">Contacto</a>
  </div>
</template>

<script>
export default {
  name: "navbar-comp",
  props: [],
  mounted() {},
  data() {
    return {};
  },
  methods: {
    mth_Contacto(){
      alert("Contacto");
    }
  },
  computed: {},
};
</script>

<style scoped>
.navbar-comp {
}

.link {
  cursor: pointer;
}
</style>
