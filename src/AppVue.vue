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
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions({
      mth_Load_HomeProyectos: "act_Load_HomeProyectos",
      mth_Load_ResumenProyectos: "act_Load_ResumenProyectos",
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
