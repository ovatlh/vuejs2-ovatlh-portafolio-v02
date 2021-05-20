<template>
  <div class="app-vue" id="app">
    <router-view class="view" />
    <FooterComp class="footer" />
    <NavbarPC class="pc" />
    <NavbarMovil class="movil" />

    <transition name="contacto" mode="in-out">
      <ContactoComp class="contacto" v-if="showContacto" />
    </transition>
    <transition name="transicion" mode="in-out">
      <TransicionComp class="transicion" v-if="showTransicion" />
    </transition>
  </div>
</template>

<script>
import { mapActions } from "vuex";

import NavbarPC from "@/components/AppVue/Navbars/NavbarPCComp.vue";
import NavbarMovil from "@/components/AppVue/Navbars/NavbarMovilComp.vue";

import ContactoComp from "@/components/AppVue/Contacto/ContactoComp.vue";
import TransicionComp from "@/components/AppVue/Transicion/TransicionComp.vue";

import FooterComp from "@/components/AppVue/FooterComp.vue";

import { EventBus } from "@/EventBus/event-bus.js";

export default {
  components: {
    FooterComp,
    NavbarPC,
    NavbarMovil,
    ContactoComp,
    TransicionComp,
  },
  name: "app-vue",
  props: [],
  mounted() {
    this.mth_Load_HomeProyectos();
    this.mth_Load_ResumenProyectos();
    this.mth_Load_FullProyectos();
  },
  data() {
    return {
      showContacto: false,
      showTransicion: false,
    };
  },
  methods: {
    ...mapActions({
      mth_Load_HomeProyectos: "act_Load_HomeProyectos",
      mth_Load_ResumenProyectos: "act_Load_ResumenProyectos",
      mth_Load_FullProyectos: "act_Load_FullProyectos",
    }),
  },
  computed: {},
  created() {
    EventBus.$on("contacto-toggle", () => {
      this.showContacto = !this.showContacto;
    });
    EventBus.$on("transicion-on", () => {
      this.showTransicion = true;
    });
    EventBus.$on("transicion-off", () => {
      this.showTransicion = false;
    });
  },
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

.contacto {
  z-index: 4;
}

.contacto-enter-active {
  animation: contacto-anim 0.1s ease-in-out 0s 1 normal forwards;
}

.contacto-leave-active {
  animation: contacto-anim 0.1s ease-in-out 0s 1 reverse forwards;
}

@keyframes contacto-anim {
  from {
    opacity: 0;
    transform: scale(1.1);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
}

.transicion {
  z-index: 5;
}

.transicion-enter-active {
  animation: transicion-anim-in 0.1s ease-out 0s 1 normal forwards;
}

.transicion-leave-active {
  animation: transicion-anim-out 0.1s ease-out 0s 1 normal forwards;
}

@keyframes transicion-anim-in {
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(0%);
  }
}

@keyframes transicion-anim-out {
  from {
    transform: translateX(0%);
  }

  to {
    transform: translateX(100%);
  }
}
</style>
