<template>
  <div class="sobremi-comp">
    <h2 class="title">Sobre mi...</h2>
    <div class="content">
      <img
        src="https://raw.githubusercontent.com/ovatlh/ovatlh.github.io/main/portafolio/ovatlh_1.jpg"
        alt="tavo"
        class="img_profile"
      />
      <div class="desc">
        <p>
          Hey que onda, me llamo Ezequiel Gus<strong>tavo</strong>, tengo
          {{ edad }} años y soy un full-stack developer. Me encanta escribir código y crear cosas
          interesantes.
        </p>
        <p>
          Soy egresado del <strong>ITESRC</strong> en Villa de Agujita, Coahuila
          de Zaragoza, México.
          <small><i>( AGO 2016 - DIC 2020 )</i></small>
        </p>
        <div class="redes">
          <p>Me puedes encontrar en:</p>
          <a
            v-for="(item, index) in redes"
            :key="index"
            :href="item.link"
            target="_blank"
            :title="item.tootltip"
            >> {{ item.text }}</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "sobremi-comp",
  props: [],
  mounted() {
    this.mthCalcularEdad();
  },
  data() {
    return {
      edad: 23,
      fechaNacimiento: new Date(1997, 10, 23),
      redes: [
        {
          text: "linkedin",
          tootltip: "linkedin: @ovatlh",
          link: "https://www.linkedin.com/in/ovatlh",
        },
        {
          text: "github",
          tootltip: "github: @ovatlh",
          link: "https://github.com/ovatlh",
        },
        {
          text: "twitter",
          tootltip: "twitter: @ovatlh",
          link: "https://twitter.com/ovatlh",
        },
        {
          text: "instagram",
          tootltip: "instagram: @ovatlh",
          link: "https://www.instagram.com/ovatlh",
        },
        {
          text: "facebook",
          tootltip: "facebook: @ovatlh",
          link: "https://www.facebook.com/ovatlh",
        },
        {
          text: "myanimelist",
          tootltip: "myanimelist: @ovatlh",
          link: "https://myanimelist.net/profile/ovatlh",
        },
      ],
    };
  },
  methods: {
    mthCalcularEdad() {
      var diff_ms = Date.now() - this.fechaNacimiento.getTime();
      var age_dt = new Date(diff_ms);
      this.edad = Math.abs(age_dt.getUTCFullYear() - 1970);
    },
  },
  computed: {},
};
</script>

<style scoped>
.sobremi-comp {
  display: grid;
  gap: 20px;
  grid-template-areas: "Title" "Content";
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  justify-items: center;
}

.title {
  grid-area: Title;
}

.content {
  grid-area: Content;
  display: grid;
  gap: 20px;
  grid-template-areas: "IMG Desc";
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  justify-items: center;
}

@media screen and (min-width: 0px) and (max-width: 767px) {
  .content {
    grid-template-areas: "IMG" "Desc";
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
  }
}

.img_profile {
  grid-area: IMG;
  width: clamp(120px, 10vw, 240px);
  height: clamp(120px, 10vw, 240px);
  object-fit: contain;
  border-radius: 100%;
  border: 10px solid #fff;
  box-shadow: 0 0 30px 0 #000;
}

.desc {
  grid-area: Desc;
}

.redes {
  padding-top: 10px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.redes a {
  text-decoration: none;
  font-weight: 600;
  color: var(--redes-clr);
}

.redes a:hover {
  text-decoration: underline;
}
</style>
