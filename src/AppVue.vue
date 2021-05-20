<template>
  <div class="app-vue" id="app">
    <router-view />
    <FooterComp />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import FooterComp from "@/components/AppVue/FooterComp.vue";

export default {
  components: {
    FooterComp,
  },
  name: "app-vue",
  props: [],
  mounted() {
    this.mth_Load_HomeProyectos();
    this.mth_Load_ResumenProyectos();
    this.mth_Load_FullProyectos();
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions({
      mth_Load_HomeProyectos: "act_Load_HomeProyectos",
      mth_Load_ResumenProyectos: "act_Load_ResumenProyectos",
      mth_Load_FullProyectos: "act_Load_FullProyectos",
    }),
  },
  computed: {},
};
</script>

<style src="@/assets/css/main-css.css"></style>

<style scoped>
.app-vue {
}
</style>
