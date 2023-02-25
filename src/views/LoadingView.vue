<template>
  <div class="loading">
    <div class="loading__background">
      <div class="loading__logo"></div>
      <div
        class="loading__image"
        :style="{ backgroundPositionX: imagePosition }"
      ></div>
    </div>
    <div class="loading__text">
      {{ texts[textIndex] }}
    </div>
    <div class="loading__progress">
      <div class="loading__progress-bar">
        <div class="loading__bar" :style="{ width: progressWidth }"></div>
      </div>
    </div>
    <div class="loading__progress-indicator">{{ percentage }}%</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";

export default defineComponent({
  name: "LoadingView",
  data: () => ({
    imageOffsetX: -(Math.floor(Math.random() * 31) * 320),
    textIndex: Math.floor(Math.random() * 10),
    progress: 7.5,
    texts: [
      "Chargement des messages amusants...Veuillez patienter.",
      "Chargement de l'univers pixelisé.",
      "On est bientôt arrivés ?!",
      "Ce n'est pas toi, c'est moi.",
      "Suis le canard jaune.",
      "Le temps est juste une illusion.",
      "J'adore ton t-shirt.",
      "Chuut ! J'essaie de me concentrer là-haut.",
      "Ca te dirais des frites avec ça ?",
      "Nous faisons avancer la science",
      "Regarde à gauche, regarde à droite, cligne des yeux deux fois et voilà !",
    ],
  }),
  mounted(): void {
    setInterval(() => {
      if (this.progress >= 100) {
        this.textIndex = Math.floor(Math.random() * this.texts.length);
        return (this.progress = 7.5);
      }
      return (this.progress += 20);
    }, 1000);
  },
  computed: {
    ...mapGetters("Loading", { percentage: "getPercentage" }),
    imagePosition(): string {
      return this.imageOffsetX + "px";
    },
    progressWidth(): string {
      return this.progress + "%";
    },
  },
});
</script>

<style lang="scss" scoped>
.loading {
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: #0e151c;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &__background {
    width: 500px;
    height: 434px;
    background-image: url(@images/loading/background.png);
    position: relative;
  }

  &__logo {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-image: url(@images/loading/logo.png);
    z-index: 1;
  }

  &__image {
    width: 320px;
    height: 320px;
    top: 51px;
    position: absolute;
    left: calc(50% + 5px);
    transform: translateX(-50%);
    background-color: #cccccc;
    background-image: url(@images/loading/images.png);
  }

  &__text {
    font-size: 21.4pt;
    font-family: UbuntuBold;
    color: #ffffff;
    margin-top: 48px;
  }

  &__progress {
    border: 1px solid #ffffff;
    width: 401px;
    height: 26px;
    padding: 2px 2px;
    margin-top: 8px;
    border-radius: 2px;
  }

  &__progress-bar {
    width: 395px;
    height: 20px;
    padding: 1px 1px;
    background-color: #000000;
  }

  &__bar {
    height: 18px;
    background-color: #bacad3;
    position: relative;
    max-width: 393px;

    &:before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      height: 50%;
      width: 100%;
      background-color: #8ca1ad;
    }
  }

  &__progress-indicator {
    font-size: 10.4pt;
    color: #8d8e8f;
    font-family: UbuntuBold;
    margin-top: 5px;
    margin-bottom: 154px;
  }
}
</style>
