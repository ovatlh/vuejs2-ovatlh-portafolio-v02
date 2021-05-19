<template>
  <router-link :to="{ path: `proyecto/${link}`}" class="proyecto-comp">
    <img :src="bg" alt="proyecto" class="bg" />
    <h1 class="title">Proyecto</h1>
    <p class="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, ad?</p>
  </router-link>
</template>

<script>
export default {
  name: "proyecto-comp",
  props: ["link"],
  mounted() {},
  data() {
    return {
      bg: require("@/assets/imgs/1.png"),
    };
  },
  methods: {},
  computed: {},
};
</script>

<style scoped>
.proyecto-comp {
  z-index: 1;
  text-decoration: none;
  display: grid;
  gap: 10px;
  grid-template-areas: "BG" "Title" "Desc";
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto;

  background-color: var(--proyecto-bg);
  color: var(--proyecto-clr);
  border-radius: 6px;
  transition: 0.1s ease-in-out;
}

.proyecto-comp:hover {
  z-index: 2;
  transform: translateY(-10px) scale(1.025);
  filter: drop-shadow(0px 0px 5px var(--proyecto-shadow));
}

.bg {
  z-index: 1;
  grid-area: BG;
  object-fit: cover;
  width: 100%;
  max-height: 200px;
  border-radius: 6px 6px 0 0;
}

.title {
  z-index: 2;
  grid-area: Title;
  padding: 0 10px 0 10px;
}

.desc {
  z-index: 3;
  grid-area: Desc;
  padding: 0 10px 10px 10px;
}
</style>
