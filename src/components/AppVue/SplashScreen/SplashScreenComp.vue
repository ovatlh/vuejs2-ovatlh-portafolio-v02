<template>
  <div class="splashscreen-comp">
    <svg
      id="ovatlh"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1187.59 262.93"
    >
      <path
        id="h"
        d="M1173,63.26q14.55,17.35,14.55,47v87.28h-59V117.72q0-10.68-5.74-17t-15.35-6.27q-9.88,0-15.48,6.27t-5.61,17v79.81h-59.26V0h59.26V69.94A53.53,53.53,0,0,1,1105,52.59q11.63-6.68,27.63-6.68Q1158.49,45.91,1173,63.26Z"
      />
      <path id="l" d="M1000.47,0V197.53H941.21V0Z" />
      <path
        id="t"
        d="M918.52,147.08v50.45H896.1q-61.94,0-61.93-61.66V96.37H815.49V47h18.68V10.68h59.26V47H918V96.37H893.43v40.57c0,3.56.84,6.14,2.54,7.74s4.49,2.4,8.41,2.4Z"
      />
      <path
        id="a"
        d="M643.45,81q8.13-17.49,22.29-26.7a57,57,0,0,1,31.76-9.21q14.68,0,25.36,6a40.64,40.64,0,0,1,16.28,16.42V47h59V197.53h-59V177a40.7,40.7,0,0,1-16.28,16.42q-10.68,6-25.36,6a57,57,0,0,1-31.76-9.21Q651.58,181,643.45,163.5t-8.14-41.24Q635.31,98.5,643.45,81Z"
      />
      <path
        id="v"
        d="M540.54,141.21l24-94.23h63L577.38,197.53H503.44L453.26,47h63Z"
      />
      <path
        id="at"
        d="M209,26.69q24.83,12.56,38.31,35.11t13.48,51.65q0,24-8.54,43.38a70.24,70.24,0,0,1-25.1,30.56q-16.54,11.22-39.77,11.21-14.69,0-25-5.34a31.83,31.83,0,0,1-14.81-15.21,43.67,43.67,0,0,1-17.75,15.88,56.23,56.23,0,0,1-25.23,5.47q-19.48,0-30.43-11.21t-10.95-31.5a87,87,0,0,1,7.48-35.77A68.54,68.54,0,0,1,91.56,93.83a47.8,47.8,0,0,1,29.9-10.28q10.94,0,18.28,4.54a23,23,0,0,1,10,12.28l2.67-15.48h45.91l-10.41,59a29.87,29.87,0,0,0-.8,6.67q0,10.15,8.55,10.15,10.67,0,16.15-12.95t5.47-32.7q0-18.42-8.68-32.43a58,58,0,0,0-24.56-21.76q-15.88-7.74-37.23-7.74A103.46,103.46,0,0,0,42.71,157q0,30.43,17.62,48.32t48.31,17.88q27.24,0,49.65-9.61l10.15,37.11Q140.68,262.93,106,262.93q-31.77,0-55.79-12.54a89.13,89.13,0,0,1-37.1-35.64Q0,191.67,0,161.23,0,118.8,20,85.29A140.69,140.69,0,0,1,74.74,33q34.71-18.82,77.15-18.82Q184.19,14.15,209,26.69Z"
      />
      <path
        id="o"
        d="M325.13,190.06a68.86,68.86,0,0,1-28.43-26.83q-10.27-17.47-10.28-41t10.28-41a68.9,68.9,0,0,1,28.43-26.82q18.15-9.35,40.84-9.35t40.84,9.35a68.9,68.9,0,0,1,28.43,26.82q10.27,17.49,10.28,41t-10.28,41a68.86,68.86,0,0,1-28.43,26.83Q388.66,199.4,366,199.4T325.13,190.06Z"
      />
    </svg>
  </div>
</template>

<script>
import { EventBus } from "@/EventBus/event-bus.js";

export default {
  name: "splashscreen-comp",
  props: [],
  mounted() {},
  data() {
    return {};
  },
  methods: {
    mth_SplashScreen_Animations() {
      // eslint-disable-next-line no-undef
      gsap.set("#ovatlh", { scale: 0 });
      // eslint-disable-next-line no-undef
      gsap.set("#o", { x: 250 });
      // eslint-disable-next-line no-undef
      gsap.set("#v", { x: 75, opacity: 0 });
      // eslint-disable-next-line no-undef
      gsap.set("#a", { x: -105, opacity: 0 });
      // eslint-disable-next-line no-undef
      gsap.set("#t", { x: -245, opacity: 0 });
      // eslint-disable-next-line no-undef
      gsap.set("#l", { x: -350, opacity: 0 });
      // eslint-disable-next-line no-undef
      gsap.set("#h", { x: -450, opacity: 0 });
      // eslint-disable-next-line no-undef
      gsap.set("#at", { x: 470, opacity: 0 });

      //create a timeline instance
      // eslint-disable-next-line no-undef
      var tl = gsap.timeline();
      // eslint-disable-next-line no-undef
      tl.add(
        // eslint-disable-next-line no-undef
        gsap.to("#ovatlh", {
          delay: 2,
          duration: 1,
          scale: 1,
          ease: "bounce.out",
        })
      );
      // eslint-disable-next-line no-undef
      gsap.to("#o", {
        delay: 3,
        duration: 1,
        x: 0,
        ease: "expo.out",
        opacity: 1,
      });
      // eslint-disable-next-line no-undef
      gsap.to("#v", {
        delay: 3,
        duration: 1,
        x: 0,
        ease: "expo.out",
        opacity: 1,
      });
      // eslint-disable-next-line no-undef
      gsap.to("#a", {
        delay: 3,
        duration: 1,
        x: 0,
        ease: "expo.out",
        opacity: 1,
      });
      // eslint-disable-next-line no-undef
      gsap.to("#t", {
        delay: 3,
        duration: 1,
        x: 0,
        ease: "expo.out",
        opacity: 1,
      });
      // eslint-disable-next-line no-undef
      gsap.to("#l", {
        delay: 3,
        duration: 1,
        x: 0,
        ease: "expo.out",
        opacity: 1,
      });
      // eslint-disable-next-line no-undef
      gsap.to("#h", {
        delay: 3,
        duration: 1,
        x: 0,
        ease: "expo.out",
        opacity: 1,
      });
      // eslint-disable-next-line no-undef
      gsap.to("#at", {
        delay: 3,
        duration: 1,
        x: 0,
        ease: "expo.out",
        opacity: 1,
      });
      // eslint-disable-next-line no-undef
      gsap.to("#ovatlh", {
        delay: 4,
        duration: 1.5,
        ease: "power3.out",
        scale: 30,
      });
      // eslint-disable-next-line no-undef
      gsap.to(".splashscreen-comp", {
        delay: 4.1,
        duration: 1,
        ease: "power3.out",
        opacity: 0,
      });

      setTimeout(() => {
        EventBus.$emit("splashscreen-off");
      }, 6000);
    },
  },
  computed: {},
  created() {
    EventBus.$on("splashscreen-start", () => {
      this.mth_SplashScreen_Animations();
    });
  },
};
</script>

<style scoped>
.splashscreen-comp {
  display: grid;
  padding: clamp(20px, 50vw, 100px);
  place-items: center;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;

  background-color: var(--home-bg);
}

#ovatlh {
  fill: hsl(0, 0%, 100%);
}

#at,
#v,
#a,
#t,
#l,
#h {
  z-index: 1;
}

#o {
  z-index: 2;
}
</style>
