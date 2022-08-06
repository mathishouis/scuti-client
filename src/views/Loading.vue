<template>
    <div class="Habbo-Loading">
        <div class="Habbo-Loading__Splash-Background">
            <div class="Habbo-Loading__Splash-Logo">
            </div>
            <div class="Habbo-Loading__Splash-Image" :style="{ backgroundPositionX: randomImage + 'px'}">

            </div>
        </div>
        <div class="Habbo-Loading__Splash-Text">
            {{ texts[randomText] }}
        </div>
        <div class="Habbo-Loading__Progress-Bar-Container">
            <div class="Habbo-Loading__Progress-Bar">
                <div class="Habbo-Loading__Bar" :style="{ width: progress + '%' }">
                </div>
            </div>
        </div>
        <div class="Habbo-Loading__Loading-Indicator">
            {{ Math.floor(100 - (100 / ($store.getters.getLoadState) + 1)) }}%
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import {LoadState} from "../enums/LoadState";

    export default defineComponent({
        data() {
            return {
                progress: 7.5,
                randomImage: -(Math.floor(Math.random() * 31) * 320),
                randomText: Math.floor(Math.random() * 10),
                texts: [
                    "Chargement des messages amusants...Veuillez patienter.", "Chargement de l'univers pixelisé.", "On est bientôt arrivés ?!", "Ce n'est pas toi, c'est moi.", "Suis le canard jaune.", "Le temps est juste une illusion.", "J'adore ton t-shirt.", "Chuut ! J'essaie de me concentrer là-haut.", "Ca te dirais des frites avec ça ?", "Nous faisons avancer la science", "Regarde à gauche, regarde à droite, cligne des yeux deux fois et voilà !"
                ]
            }
        },
        mounted(): void {
            setInterval(() => {
                if(this.progress >= 100) {
                    this.randomText = Math.floor(Math.random() * this.texts.length);
                    return this.progress = 7.5;
                }
                return this.progress += 20;
             }, 1000);
        }
    });
</script>

<style scoped>
    .Habbo-Loading {
        width: 100%;
        height: 100%;
        position: fixed;
        background-color: #0E151C;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .Habbo-Loading .Habbo-Loading__Splash-Background {
        width: 500px;
        height: 434px;
        background-image: url(../assets/images/loading/background.png);
        position: relative;
    }
    .Habbo-Loading .Habbo-Loading__Splash-Background .Habbo-Loading__Splash-Logo {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-image: url(../assets/images/loading/logo.png);
        z-index: 1;
    }
    .Habbo-Loading .Habbo-Loading__Splash-Background .Habbo-Loading__Splash-Image {
        width: 320px;
        height: 320px;
        top: 51px;
        position: absolute;
        left: calc(50% + 5px);
        transform: translateX(-50%);
        background-color: #CCCCCC;
        background-image: url(../assets/images/loading/images.png);
    }
    .Habbo-Loading .Habbo-Loading__Splash-Text {
        font-size: 21.4pt;
        font-family: UbuntuBold;
        color: #FFFFFF;
        margin-top: 48px;
    }
    .Habbo-Loading .Habbo-Loading__Progress-Bar-Container {
        border: 1px solid #FFFFFF;
        width: 401px;
        height: 26px;
        padding: 2px 2px;
        margin-top: 8px;
        border-radius: 2px;
    }
    .Habbo-Loading .Habbo-Loading__Progress-Bar-Container .Habbo-Loading__Progress-Bar {
        width: 395px;
        height: 20px;
        padding: 1px 1px;
        background-color: #000000;
    }
    .Habbo-Loading .Habbo-Loading__Progress-Bar-Container .Habbo-Loading__Progress-Bar .Habbo-Loading__Bar {
        height: 18px;
        background-color: #BACAD3;
        position: relative;
        max-width: 393px;
    }
    .Habbo-Loading .Habbo-Loading__Progress-Bar-Container .Habbo-Loading__Progress-Bar .Habbo-Loading__Bar:before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        height: 50%;
        width: 100%;
        background-color: #8CA1AD;
     }
    .Habbo-Loading .Habbo-Loading__Loading-Indicator {
        font-size: 10.4pt;
        color: #8D8E8F;
        font-family: UbuntuBold;
        margin-top: 5px;
        margin-bottom: 154px;
    }
</style>