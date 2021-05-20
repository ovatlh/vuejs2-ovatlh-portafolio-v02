<template>
  <div class="app-vue" id="app">
    <router-view class="view" />
    <FooterComp class="footer" />
    <NavbarPC class="pc" />
    <NavbarMovil class="movil" />
  </div>
</template>

<script>
import { mapActions } from "vuex";

import NavbarPC from "@/components/AppVue/Navbars/NavbarPCComp.vue";
import NavbarMovil from "@/components/AppVue/Navbars/NavbarMovilComp.vue";

import FooterComp from "@/components/AppVue/FooterComp.vue";

export default {
  components: {
    FooterComp,
    NavbarPC,
    NavbarMovil,
  },
  name: "app-vue",
  props: [],
  mounted() {
    this.mth_Load_HomeProyectos();
    this.mth_Load_ResumenProyectos();
    this.mth_Load_FullProyectos();
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions({
      mth_Load_HomeProyectos: "act_Load_HomeProyectos",
      mth_Load_ResumenProyectos: "act_Load_ResumenProyectos",
      mth_Load_FullProyectos: "act_Load_FullProyectos",
    }),
  },
  computed: {},
};
</script>

<style src="@/assets/css/main-css.css"></style>

<style scoped>
.app-vue {
}

.view {
  z-index: 1;
}

/* .view-enter-active {
  animation: enter-anim 0.1s ease-in-out 0s 1 normal forwards;
}

.view-leave-active {
  animation: enter-anim 0.1s ease-in-out 0s 1 reverse forwards;
}

@keyframes enter-anim {
  from {
    opacity: 0;
    transform: translateY(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0px);
  }
} */

.footer {
  z-index: 2;
}

.pc,
.movil {
  position: fixed;
  z-index: 3;
}

.pc {
  left: 0;
  top: 0;
  width: 100%;
  display: grid;
}

.movil {
  display: none;
  right: 20px;
  bottom: 20px;
}

@media screen and (min-width: 0px) and (max-width: 767px) {
  .pc {
    display: none;
  }

  .movil {
    display: grid;
  }
}
</style>
