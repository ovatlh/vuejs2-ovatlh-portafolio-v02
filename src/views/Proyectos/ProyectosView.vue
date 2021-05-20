<template>
  <div class="proyectos-view">
    <div class="content">
      <h1 class="title">Proyectos</h1>
      <div class="list" v-if="cmp_ShowResumenProyectos">
        <ProyectoComp
          class="item"
          v-for="(item, index) in cmp_ResumenProyectos"
          :key="index"
          :id="item.id"
          :img="item.img"
          :title="item.title"
          :desc="item.desc"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import ProyectoComp from "@/components/Views/Basic/Home/Proyectos/ProyectoComp.vue";

export default {
  components: {
    ProyectoComp,
  },
  name: "proyectos-view",
  props: [],
  mounted() {
    this.mth_Titulo();
  },
  data() {
    return {};
  },
  methods: {
    mth_Titulo() {
      document.title = "Proyectos | @ovatlh";
    },
  },
  computed: {
    ...mapGetters({
      cmp_ResumenProyectos: "get_ResumenProyectos",
    }),
    cmp_ShowResumenProyectos() {
      return this.cmp_ResumenProyectos.length > 0;
    },
  },
};
</script>

<style scoped>
.proyectos-view {
  display: grid;
  padding: 20px;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  justify-items: center;

  background-color: var(--proyectos-bg);
}

.content {
  display: grid;
  gap: 10px;
  grid-template-areas: "Title" "List";
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  min-height: 100vh;
  max-width: 1400px;
}

.title {
  grid-area: Title;
  text-align: center;
}

.list {
  grid-area: List;
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(auto-fill, minmax(300px, auto));
  grid-template-rows: auto;
  justify-content: stretch;
  align-content: start;
}

@media screen and (min-width: 0px) and (max-width: 767px) {
  .list {
    grid-template-columns: repeat(auto-fill, minmax(260px, auto));
  }
}
</style>
