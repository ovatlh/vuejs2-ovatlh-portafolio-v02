<template>
  <p class="footer-comp">
    Creado con 💖 por <a class="repo" href="https://github.com/ovatlh/vuejs2-ovatlh-portafolio-v02" target="_blank" title="Github repo: portafolio">Tavo López Hernández</a>
  </p>
</template>

<script>
export default {
  name: "footer-comp",
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
.footer-comp {
  background-color: var(--footer-bg);
  color: var(--footer-clr);
  padding: 60px 10px;
  text-align: center;
}

.repo {
  color: var(--footer-clr);
}
</style>
