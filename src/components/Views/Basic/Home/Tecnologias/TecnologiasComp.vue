<template>
  <div class="tecnologias-comp">
    <h2 class="title">Tecnologías</h2>
    <p class="list">{{tecnologias.join(", ")}}</p>
  </div>
</template>

<script>
export default {
  name: "tecnologias-comp",
  props: [],
  mounted() {},
  data() {
    return {
      tecnologias: [
        "GitHub",
        "MySQL",
        ".NET Core",
        "C#",
        "Vue.js",
        "HTML 5",
        "CSS 3",
        "Javascript",
        "Xamarin.Forms",
        "Adobe Illustrator",
        "Adobe XD",
        "WPF"
      ],
    };
  },
  methods: {},
  computed: {},
};
</script>

<style scoped>
.tecnologias-comp {
  display: grid;
  gap: 20px;
  text-align: center;
}
</style>
