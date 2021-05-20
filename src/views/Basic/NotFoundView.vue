<template>
  <div class="notfound-view">
    <div class="content">
      <h1 class="title">Parece que nos perdimos 😅...</h1>
      <h1 class="title">404</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "notfound-view",
  props: [],
  mounted() {
    this.mth_Titulo();
  },
  data() {
    return {};
  },
  methods: {
    mth_Titulo() {
      document.title = "404 | @ovatlh";
    },
  },
  computed: {},
};
</script>

<style scoped>
.notfound-view {
  display: grid;
  place-items: center;
  min-height: 100vh;
  background-color: var(--home-bg);
}

.title {
  text-align: center;
}
</style>
