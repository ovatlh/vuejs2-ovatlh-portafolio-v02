<template>
  <div class="cover-comp">
    <img v-rellax="rellax.img04" :src="bg04" alt="bg-04" class="img img-04" />
    <div v-rellax="rellax.content" class="content">
      <h1 class="tavo">Tavo</h1>
    </div>
    <img v-rellax="rellax.img03" :src="bg03" alt="bg-03" class="img img-03" />
    <img v-rellax="rellax.img02" :src="bg02" alt="bg-02" class="img img-02" />
    <img v-rellax="rellax.img01" :src="bg01" alt="bg-01" class="img img-01" />
    <div class="shadow"></div>
  </div>
</template>

<script>
export default {
  name: "cover-comp",
  props: [],
  mounted() {},
  data() {
    return {
      bg04: require("@/assets/imgs/bg-parallax/bg-04.jpg"),
      bg03: require("@/assets/imgs/bg-parallax/bg-03.png"),
      bg02: require("@/assets/imgs/bg-parallax/bg-02.png"),
      bg01: require("@/assets/imgs/bg-parallax/bg-01.png"),
      rellax: {
        img04: {
          speed: -10,
          percentage: 0.5,
        },
        content: {
          speed: -8,
          percentage: 0.5,
        },
        img03: {
          speed: -6,
          percentage: 0.5,
        },
        img02: {
          speed: -4,
          percentage: 0.5,
        },
        img01: {
          speed: 0,
          percentage: 0.5,
        },
      },
    };
  },
  methods: {},
  computed: {},
};
</script>

<style scoped>
.cover-comp {
  height: 100vh;

  display: grid;
  grid-template-areas: "Area-Cover";
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  background-color: hsl(250, 4%, 71%)
}

.img, .content, .shadow {
  grid-area: Area-Cover;
}

.img {
  width: 100%;
  height: 100vh;
  object-fit: cover;
  pointer-events: none;
}

.img-04 {
  z-index: 1;
}

.content {
  z-index: 2;
  display: grid;
  place-items: center;
}

.tavo {
  font-size: clamp(40px, 10vw, 300px);
}

.img-03 {
  z-index: 3;
}

.img-02 {
  z-index: 4;
}

.img-01 {
  z-index: 5;
}

.shadow {
  z-index: 6;
  width: 100%;
  align-self: end;
  height: clamp(100px, 10vh, 200px);
  background: linear-gradient(180deg, hsla(0, 0%, 0%, 0) 0%, var(--home-bg) 90%);
}
</style>
