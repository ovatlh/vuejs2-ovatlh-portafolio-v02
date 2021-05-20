<template>
  <div class="proyecto-view">
    <div class="proyecto" v-if="cmp_ShowProyecto">
      <img
        class="cover"
        :src="cmp_Proyecto.options.cover.link"
        :alt="cmp_Proyecto.title"
        :style="`background-color: ${cmp_Proyecto.options.cover.bg_clr}`"
      />

      <div class="info">
        <img
          class="icon"
          :src="cmp_Proyecto.options.icon.link"
          :alt="cmp_Proyecto.title"
          v-if="cmp_ShowProyectoIcon"
        />
        <h2 class="title">{{ cmp_Proyecto.title }}</h2>

        <div class="desc" v-if="cmp_ShowProyectoDesc">
          <p v-for="(item, index) in cmp_Proyecto.info.desc" :key="index">
            {{ item }}
          </p>
        </div>

        <div class="utils" v-if="cmp_ShowProyectoUtils">
          <h3>Que se utilizo en este proyecto:</h3>
          <p v-for="(item, index) in cmp_Proyecto.info.utils" :key="index">
            - {{ item }}
          </p>
        </div>

        <div class="links" v-if="cmp_ShowProyectoLinks">
          <h3>Links:</h3>
          <a
            class="link"
            v-for="(item, index) in cmp_Proyecto.info.links"
            :key="index"
            :href="item.link"
            target="_blank"
            :style="cmp_LinkStyle"
          >
            > {{ item.name }}
          </a>
        </div>

        <div
          class="t-carousel t-h"
          :id="cmp_Proyecto.id"
          data-tc-time-sec="10"
          data-tc-direction="right"
          v-if="cmp_ShowProyectotCarousel"
        >
          <div class="t-items">
            <div
              v-for="(item, index) in cmp_Proyecto.carousel_images_links"
              :key="index"
              class="t-item"
            >
              <img class="img_item" :src="item" :alt="`IMG: ${index}`" />
            </div>
          </div>

          <button class="t-btn t-left">
            <i class="fas fa-caret-left"></i>
          </button>
          <button class="t-btn t-right">
            <i class="fas fa-caret-right"></i>
          </button>
          <button class="t-btn t-up">
            <i class="fas fa-caret-up"></i>
          </button>
          <button class="t-btn t-down">
            <i class="fas fa-caret-down"></i>
          </button>
        </div>
      </div>
    </div>
    <div class="no-proyecto" v-else>
      <h1>Parece que el proyecto que buscas no existe 🤔...</h1>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "proyecto-view",
  props: [],
  beforeRouteUpdate(to, from, next) {
    this.id = to.params.id;
    this.mth_tCarousel_tInit();
    this.mth_Titulo();
    next();
  },
  beforeDestroy() {
    this.mth_tCarousel_tClear();
  },
  mounted() {
    this.mth_tCarousel_tInit();
    this.mth_Titulo();
  },
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  methods: {
    mth_tCarousel_tInit() {
      // eslint-disable-next-line no-undef
      setTimeout(tCarousel.tInit(), 500);
    },
    mth_tCarousel_tClear() {
      // eslint-disable-next-line no-undef
      tCarousel.tClear();
    },
    mth_Titulo(){
      document.title = `${this.cmp_Proyecto.title} | @ovatlh`;
    },
  },
  computed: {
    ...mapGetters({
      cmp_ProyectoByID: "get_ProyectoByID",
    }),
    cmp_Proyecto() {
      return this.cmp_ProyectoByID(this.id);
    },
    cmp_ShowProyecto() {
      if (this.cmp_Proyecto) {
        return true;
      }
      return false;
    },
    cmp_ShowProyectoIcon() {
      if (this.cmp_Proyecto.options.icon.link.length > 0) {
        return true;
      }

      return false;
    },
    cmp_ShowProyectoDesc() {
      if (this.cmp_Proyecto.info.desc.length > 0) {
        return true;
      }

      return false;
    },
    cmp_ShowProyectoUtils() {
      if (this.cmp_Proyecto.info.utils.length > 0) {
        return true;
      }

      return false;
    },
    cmp_ShowProyectoLinks() {
      if (this.cmp_Proyecto.info.links.length > 0) {
        return true;
      }

      return false;
    },
    cmp_LinkStyle() {
      if (this.cmp_ShowProyectoLinks) {
        return {
          "--bg-hover": this.cmp_Proyecto.options.links.bg_hover,
          "--clr-hover": this.cmp_Proyecto.options.links.clr_hover,
        };
      }

      return {};
    },
    cmp_ShowProyectotCarousel() {
      if (this.cmp_Proyecto.carousel_images_links.length > 0) {
        return true;
      }

      return false;
    },
  },
};
</script>

<style scoped>
.proyecto-view {
  background-color: var(--proyectoview-bg);
  color: var(--proyectoview-clr);
}

.proyecto {
  display: grid;
  grid-template-columns: 1fr;
  align-content: start;
  min-height: 100vh;
  position: relative;
}

.no-proyecto {
  display: grid;
  place-items: center;
  min-height: 100vh;
}

.no-proyecto h1 {
  text-align: center;
  padding: 10px;
}

.cover {
  z-index: 1;
  width: 100%;
  height: clamp(100px, 50vh, 300px);
  object-fit: contain;
}

.info {
  z-index: 2;
  display: grid;
  gap: 20px;
  padding: 10px;
  grid-template-columns: 1fr;
  align-content: start;
  justify-self: center;
  width: 100%;
  max-width: 1400px;
  position: relative;
}

.icon {
  width: clamp(100px, 50vw, 120px);
  height: clamp(100px, 50vw, 120px);
  object-fit: contain;
  position: absolute;
  left: clamp(100px, 50vw, 120px);
  top: 0;
  transform: translateY(-50%);
  filter: drop-shadow(0px 0px 15px var(--proyectoview-icon-shadow));
}

.title {
  text-align: center;
}

@media screen and (min-width: 0px) and (max-width: 767px) {
  .icon {
    transform: translateY(0) translateX(0);
    position: relative;
    width: 100%;
    left: 0;
  }
}

.links {
  display: grid;
  grid-template-columns: 1fr;
}

.link {
  padding: 5px;
  text-decoration: none;
  font-weight: 600;
  color: var(--proyectoview-link-clr);
}

.link:hover {
  background-color: var(--bg-hover);
  color: var(--clr-hover);
}

.t-carousel {
  width: 100%;
  max-width: 1000px;
  justify-self: center;
}

.img_item {
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: cover;
}
</style>
