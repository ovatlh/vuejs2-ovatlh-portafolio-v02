<template>
  <div class="home-view">
    <CoverComp class="cover" />
    <ContainerComp class="container" />
  </div>
</template>

<script>
import CoverComp from "@/components/Views/Basic/Home/CoverComp.vue";
import ContainerComp from "@/components/Views/Basic/Home/ContainerComp.vue";

export default {
  components: {
    CoverComp,
    ContainerComp,
  },
  name: "home-view",
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
.home-view {
  display: grid;
  grid-template-areas: "Cover" "Container";
  grid-template-columns: 1fr;
  grid-template-rows: 100vh 1fr;
  overflow: hidden;
}

.cover {
  z-index: 1;
  grid-area: Cover;
}

.container {
  z-index: 2;
  grid-area: Container;
  background-color: var(--home-bg);
}
</style>
