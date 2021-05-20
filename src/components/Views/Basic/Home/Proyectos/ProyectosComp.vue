<template>
  <div class="proyectos-comp">
    <h1 class="title">Proyectos</h1>
    <div class="list" v-if="cmp_ShowHomeProyectos">
      <ProyectoComp v-for="(item, index) in cmp_HomeProyectos" :key="index" :id="item.id" :img="item.img" :title="item.title" :desc="item.desc" />
    </div>
    <router-link :to="{ path: 'proyectos' }" class="todos">
      <h2>Ver todos...</h2>
    </router-link>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import ProyectoComp from "@/components/Views/Basic/Home/Proyectos/ProyectoComp.vue";

export default {
  components: {
    ProyectoComp,
  },
  name: "proyectos-comp",
  props: [],
  mounted() {},
  data() {
    return {};
  },
  methods: {},
  computed: {
    ...mapGetters({
      cmp_HomeProyectos: "get_HomeProyectos",
    }),
    cmp_ShowHomeProyectos() {
      return this.cmp_HomeProyectos.length > 0;
    },
  },
};
</script>

<style scoped>
.proyectos-comp {
  display: grid;
  gap: 10px;
  grid-template-areas: "Title" "List";
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
}

.title {
  text-align: center;
  grid-area: Title;
}

.list {
  grid-area: List;
  display: grid;
  gap: 30px;
  padding: 30px 0;
  grid-template-columns: repeat(auto-fit, minmax(240px, auto));
}

.todos {
  text-decoration: none;
  padding: 20px;
  text-align: center;
  background-color: var(--todos-bg);
  color: var(--todos-clr);
  border-radius: 6px;
  transition: 0.1s ease-in-out;
}

.todos:hover {
  background-color: var(--todos-bg-hover);
}
</style>
