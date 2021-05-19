<template>
  <div class="app-vue" id="app">
    <router-view />
    <FooterComp />
  </div>
</template>

<script>
import FooterComp from "@/components/AppVue/FooterComp.vue";

export default {
  components: {
    FooterComp,
  },
  name: "app-vue",
  props: [],
  mounted() {},
  data() {
    return {};
  },
  methods: {},
  computed: {},
};
</script>

<style src="@/assets/css/main-css.css"></style>

<style scoped>
.app-vue {
}
</style>
