<template>
  <div class="navbarpc-comp">
    <NavbarComp class="pc" />
  </div>
</template>

<script>
import NavbarComp from "@/components/AppVue/Navbars/NavbarComp.vue";

export default {
  components: {
    NavbarComp,
  },
  name: "navbarpc-comp",
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
.navbarpc-comp {
  background-color: hsla(0, 0%, 0%, 0.3);
}

.pc {
  display: grid;
  gap: 5px;
  grid-auto-flow: column;
  justify-content: start;
}
</style>

<style>
.pc .link {
  padding: 0 5px;
  text-decoration: none;
  color: hsl(0, 0%, 100%);
}

.pc .link:hover {
  text-decoration: underline;
  background-color: hsla(0, 0%, 0%, 0.2);
}
</style>
