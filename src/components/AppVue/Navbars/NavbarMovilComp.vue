<template>
  <div class="navbarmovil-comp">
    <transition name="navbar-movil" mode="in-out">
      <NavbarComp class="movil" v-if="!isActive" />
    </transition>
    <button
      class="menu"
      :title="isActive ? 'Abrir' : 'Cerrar'"
      @click="mth_ToggleMenu"
    >
      <i :class="`fas fa-${isActive ? iconMenu : iconClose}`"></i>
    </button>
  </div>
</template>

<script>
import NavbarComp from "@/components/AppVue/Navbars/NavbarComp.vue";

export default {
  components: {
    NavbarComp,
  },
  name: "navbarmovil-comp",
  props: [],
  mounted() {},
  data() {
    return {
      isActive: true,
      iconMenu: "bars",
      iconClose: "times",
    };
  },
  methods: {
    mth_ToggleMenu() {
      this.isActive = !this.isActive;
    },
  },
  computed: {},
};
</script>

<style scoped>
.navbarmovil-comp {
}

.movil {
  display: grid;
  grid-auto-flow: row;
}

.navbar-movil-enter-active {
  animation: enter-anim 0.1s ease-out 0s 1 normal forwards;
}

.navbar-movil-leave-active {
  animation: enter-anim 0.1s ease-out 0s 1 reverse forwards;
}

@keyframes enter-anim {
  from {
    opacity: 0;
    transform: translateY(10px);
  }

  to {
    transform: translateY(0px);
    opacity: 1;
  }
}

.menu {
  width: 40px;
  height: 40px;
  font-size: 16px;
  justify-self: end;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  filter: drop-shadow(0px 0px 5px var(--btm-menu-shadow));
}
</style>

<style>
.movil {
  gap: 5px;
}

.movil .link {
  text-decoration: none;
  background-color: hsl(0, 0%, 100%);
  color: hsl(0, 0%, 6%);
  text-align: center;
  border-radius: 6px;
  padding: 5px 10px;
  font-weight: 600;
  filter: drop-shadow(0px 0px 5px var(--btm-menu-shadow));
}

.movil .link:hover {
  background-color: hsl(0, 0%, 85%);
} 
</style>
