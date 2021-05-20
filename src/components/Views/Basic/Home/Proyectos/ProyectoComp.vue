<template>
  <router-link :to="{ path: `proyecto/${id}` }" class="proyecto-comp" :title="title">
    <img :src="img" alt="proyecto" class="bg" />
    <h3 class="title">{{ title }}</h3>
    <p class="desc">{{ desc }}</p>
  </router-link>
</template>

<script>
export default {
  name: "proyecto-comp",
  props: ["id", "img", "title", "desc"],
  mounted() {},
  data() {
    return {};
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
  align-content: start;

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
  min-height: 200px;
  max-height: 200px;
  border-radius: 6px 6px 0 0;
}

.title {
  z-index: 2;
  grid-area: Title;
  padding: 0 10px 0 10px;
  word-break: break-all;
}

.desc {
  z-index: 3;
  grid-area: Desc;
  padding: 0 10px 10px 10px;
}
</style>
