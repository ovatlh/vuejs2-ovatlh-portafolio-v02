<template>
  <div class="contacto-comp" @click.self="mth_ContactoToggle">
    <form class="form-contacto" @submit.prevent="mth_EnviarMensaje">
      <h4 class="title">Hola, ¿qué tal si me mandas un mensaje? 😉</h4>
      <div class="input-label">
        <span>Nombre</span>
        <input type="text" required="required" v-model="name" />
      </div>
      <div class="input-label">
        <span>eMail</span>
        <input type="email" required="required" v-model="email" />
      </div>
      <div class="input-label">
        <span>Mensaje</span>
        <textarea
          placeholder="Hey que onda ✌..."
          required="required"
          v-model="mensaje"
        ></textarea>
      </div>

      <div class="buttons">
        <input
          class="enviar"
          type="submit"
          :value="`${enviando ? 'Enviando...' : 'Enviar'}`"
          :class="`${enviando ? 'disable' : ''}`"
        />

        <button class="cancelar" @click="mth_ContactoToggle">Cancelar</button>
      </div>
    </form>
  </div>
</template>

<script>
import Vue from "vue";
import { EventBus } from "@/EventBus/event-bus.js";

export default {
  name: "contacto-comp",
  props: [],
  mounted() {
    this.documentTitle = document.title;
    document.title = "Contacto | @ovatlh";
  },
  beforeDestroy() {
    document.title = this.documentTitle;
  },
  data() {
    return {
      documentTitle: "",
      name: "",
      email: "",
      mensaje: "",
      destino: "https://formspree.io/f/mnqlanvp",
      enviando: false,
    };
  },
  methods: {
    mth_ContactoToggle() {
      EventBus.$emit("contacto-toggle");
    },
    mth_EnviarMensaje() {
      this.enviando = true;
      Vue.axios
        .post(this.destino, {
          name: this.name,
          from: this.email,
          _subject: `Portafolio | ${this.name} | GitHubPages`,
          message: this.mensaje,
        })
        .then((response) => {
          this.name = "";
          this.email = "";
          this.mensaje = "";
          this.mth_Ok();
          console.log(response.data);
        })
        .catch((error) => {
          alert(
            "Ups! ¿Parece que paso algo malo? \nNo olvides intentar de nuevo!"
          );
          console.log(error.data);
        })
        .finally(() => {
          this.enviando = false;
        });
    },
    mth_Ok() {
      alert("Listo! \nPronto me pondre en contacto contigo! :)");
    },
  },
  computed: {},
};
</script>

<style scoped>
.contacto-comp {
  display: grid;
  padding: 20px;
  place-items: center;

  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: hsla(0, 0%, 0%, 0.4);
}

.form-contacto {
  display: grid;
  gap: 10px;
  padding: 10px;
  grid-template-columns: 1fr;
  background-color: hsl(0, 0%, 96%);
  border-radius: 6px;
  border-top: 5px solid hsl(215, 65%, 5%);
  filter: drop-shadow(0px 0px 5px var(--proyecto-shadow));
}

.form-contacto .input-label {
  display: grid;
  grid-template-columns: 1fr;
}

.form-contacto .input-label span {
  color: hsl(0, 0%, 12%);
  font-weight: 600;
}

.form-contacto textarea {
  resize: none;
  min-height: 100px;
}

.form-contacto textarea,
.form-contacto input {
  padding: 5px;
}

.disable {
  opacity: 0.6;
  pointer-events: none;
}

.title {
  padding-top: 5px;
  word-wrap: break-word;
  color: hsl(0, 0%, 12%);
  text-align: center;
}

.buttons {
  display: grid;
  gap: 5px;
  grid-template-columns: 1fr auto;
}

.enviar {
  font-weight: 600;
  background-color: hsl(0, 0%, 73%);
  color: hsl(215, 65%, 5%);
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.enviar:hover {
  background-color: hsl(215, 65%, 5%);
  color: hsl(0, 0%, 100%);
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.cancelar {
  font-weight: 600;
  background-color: hsl(0, 0%, 73%);
  color: hsl(215, 65%, 5%);
  border: none;
  border-radius: 6px;
  cursor: pointer;
  padding: 5px;
  opacity: 0.6;
}

.cancelar:hover {
  background-color: hsl(0, 80%, 47%);
  color: hsl(0, 0%, 100%);
  opacity: 1;
}
</style>
