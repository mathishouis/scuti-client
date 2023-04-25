<template>
  <window-frame
    type="1"
    color="#408caf"
    width="585px"
    height="367px"
    class="navigator-room-creator-window"
    :title="__locale('navigator.createroom.title')"
    @close="close"
    name="roomCreator"
  >
    <div class="navigator-room-creator-window__left-panel">
      <div class="navigator-room-creator-window__form">
        <div class="navigator-room-creator-window__input-container">
          <bubble-card
            type="1"
            class="navigator-room-creator-window__error-bubble"
            v-if="nameError"
          >
            {{ __locale("navigator.createroom.name_error") }}
          </bubble-card>
          <div class="navigator-room-creator-window__label">
            {{ __locale("navigator.createroom.room_name") }}
          </div>
          <text-field
            type="2"
            :placeholder="__locale('navigator.createroom.room_name')"
            maxlength="25"
            v-model="name"
          />
        </div>
        <div class="navigator-room-creator-window__input-container">
          <div class="navigator-room-creator-window__label">
            {{ __locale("navigator.createroom.room_description") }}
          </div>
          <text-area
            height="58px"
            type="2"
            :placeholder="__locale('navigator.createroom.room_description')"
            maxlength="128"
            v-model="description"
          />
        </div>
        <div class="navigator-room-creator-window__input-container">
          <div class="navigator-room-creator-window__label">
            {{ __locale("navigator.createroom.category") }}
          </div>
          <selection-list
            type="1"
            v-model="category"
            :items="[
              {
                label: __locale('navigator.category.chat'),
                value: 0,
              },
              {
                label: __locale('navigator.category.life'),
                value: 1,
              },
              {
                label: __locale('navigator.category.trade'),
                value: 2,
              },
              {
                label: __locale('navigator.category.build'),
                value: 3,
              },
              {
                label: __locale('navigator.category.games'),
                value: 4,
              },
              {
                label: __locale('navigator.category.party'),
                value: 5,
              },
              {
                label: __locale('navigator.category.fansite'),
                value: 6,
              },
              {
                label: __locale('navigator.category.help'),
                value: 7,
              },
              {
                label: __locale('navigator.category.roleplay'),
                value: 8,
              },
              {
                label: __locale('navigator.category.personal'),
                value: 9,
              },
            ]"
          />
        </div>
        <div class="navigator-room-creator-window__input-container">
          <div class="navigator-room-creator-window__label">
            {{ __locale("navigator.createroom.max_visitors") }}
          </div>
          <selection-list
            type="1"
            v-model="maxVisitors"
            :items="[
              {
                label: '10',
                value: 10,
              },
              {
                label: '15',
                value: 15,
              },
              {
                label: '20',
                value: 20,
              },
              {
                label: '25',
                value: 25,
              },
              {
                label: '30',
                value: 30,
              },
              {
                label: '35',
                value: 35,
              },
              {
                label: '40',
                value: 40,
              },
              {
                label: '45',
                value: 45,
              },
              {
                label: '50',
                value: 50,
              },
            ]"
          />
        </div>
        <div class="navigator-room-creator-window__input-container">
          <div class="navigator-room-creator-window__label">
            {{ __locale("navigator.createroom.trade_settings") }}
          </div>
          <selection-list
            type="1"
            v-model="tradeState"
            :items="[
              {
                label: 'Troc interdit',
                value: 0,
              },
              {
                label: 'Le propriétaire et les ayant-droits peuvent troquer',
                value: 1,
              },
              {
                label: 'Tout le monde peut troquer',
                value: 2,
              },
            ]"
          />
        </div>
      </div>
      <div class="navigator-room-creator-window__actions">
        <primary-button
          type="3"
          class="navigator-room-creator-window__cancel-button"
          @click="create"
          >{{ __locale("navigator.createroom.create") }}</primary-button
        >
        <primary-button
          type="1"
          class="navigator-room-creator-window__cancel-button"
          @click="close"
          >{{ __locale("navigator.createroom.cancel") }}</primary-button
        >
      </div>
    </div>
    <div class="navigator-room-creator-window__right-panel">
      <div class="navigator-room-creator-window__label">
        {{ __locale("navigator.createroom.choose_layout") }}
      </div>
      <scroll-box width="295px" height="294px" type="2">
        <div class="navigator-room-creator-window__model-list">
          <border-card
            type="9"
            class="navigator-room-creator-window__model"
            :class="
              selectedModel === model.name
                ? 'navigator-room-creator-window__model--selected'
                : ''
            "
            :color="selectedModel === model.name ? '#6e8184' : '#CBCBCB'"
            v-for="model in models"
            :key="model.name"
            @click="selectModel(model.name)"
          >
            <div
              class="navigator-room-creator-window__model-image"
              :style="{
                backgroundImage:
                  'url(' +
                  __config('image.library.url') +
                  '/room_models/' +
                  model.name +
                  '.png)',
              }"
            ></div>
            <div
              class="navigator-room-creator-window__hc-icon"
              v-if="model.hc"
            ></div>
            <div
              class="navigator-room-creator-window__arrow-icon"
              v-if="selectedModel === model.name"
            ></div>
            <div class="navigator-room-creator-window__tiles-count">
              <div class="navigator-room-creator-window__tiles-icon"></div>
              <div class="navigator-room-creator-window__tiles-text">
                {{ model.tiles }}
                {{ __locale("navigator.createroom.tile_size") }}
              </div>
            </div>
          </border-card>
        </div>
      </scroll-box>
    </div>
  </window-frame>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapStores } from "pinia";
import { useNavigatorStore } from "@/stores/Navigator";
import { useWindowStore } from "@/stores/WindowView";
import { useSocketStore } from "@/stores/Socket";
import { CreateRoomMessageComposer } from "@/sockets/messages/outgoing/navigator/CreateRoomMessageComposer";

export default defineComponent({
  name: "NavigatorRoomCreatorWindow",
  data: () => ({
    name: "",
    description: "",
    selectedModel: "model_a",
    category: 0,
    maxVisitors: 10,
    tradeState: 0,
    nameError: false,
    models: [
      {
        name: "model_a",
        tiles: 104,
        hc: false,
      },
      {
        name: "model_b",
        tiles: 94,
        hc: false,
      },
      {
        name: "model_c",
        tiles: 36,
        hc: false,
      },
      {
        name: "model_d",
        tiles: 84,
        hc: false,
      },
      {
        name: "model_e",
        tiles: 80,
        hc: false,
      },
      {
        name: "model_f",
        tiles: 80,
        hc: false,
      },
      {
        name: "model_i",
        tiles: 416,
        hc: false,
      },
      {
        name: "model_j",
        tiles: 320,
        hc: false,
      },
      {
        name: "model_k",
        tiles: 448,
        hc: false,
      },
      {
        name: "model_l",
        tiles: 352,
        hc: false,
      },
      {
        name: "model_m",
        tiles: 384,
        hc: false,
      },
      {
        name: "model_n",
        tiles: 372,
        hc: false,
      },
      {
        name: "model_g",
        tiles: 80,
        hc: true,
      },
      {
        name: "model_h",
        tiles: 74,
        hc: true,
      },
      {
        name: "model_o",
        tiles: 416,
        hc: true,
      },
      {
        name: "model_p",
        tiles: 352,
        hc: true,
      },
      {
        name: "model_q",
        tiles: 304,
        hc: true,
      },
      {
        name: "model_r",
        tiles: 336,
        hc: true,
      },
      {
        name: "model_u",
        tiles: 748,
        hc: true,
      },
      {
        name: "model_v",
        tiles: 438,
        hc: true,
      },
      {
        name: "model_t",
        tiles: 540,
        hc: true,
      },
      {
        name: "model_w",
        tiles: 512,
        hc: true,
      },
      {
        name: "model_x",
        tiles: 396,
        hc: true,
      },
      {
        name: "model_y",
        tiles: 440,
        hc: true,
      },
      {
        name: "model_z",
        tiles: 456,
        hc: true,
      },
      {
        name: "model_0",
        tiles: 208,
        hc: true,
      },
      {
        name: "model_1",
        tiles: 1009,
        hc: true,
      },
      {
        name: "model_2",
        tiles: 1044,
        hc: true,
      },
      {
        name: "model_3",
        tiles: 183,
        hc: true,
      },
      {
        name: "model_4",
        tiles: 254,
        hc: true,
      },
      {
        name: "model_5",
        tiles: 1024,
        hc: true,
      },
      {
        name: "model_6",
        tiles: 801,
        hc: true,
      },
      {
        name: "model_7",
        tiles: 354,
        hc: true,
      },
      {
        name: "model_8",
        tiles: 808,
        hc: true,
      },
      {
        name: "model_9",
        tiles: 926,
        hc: true,
      },
    ],
  }),
  methods: {
    selectModel(name: string): void {
      this.selectedModel = name;
    },
    close(): void {
      this.windowStore.getWindow("roomCreator")!.visible = false;
    },
    create(): void {
      if (this.name.length < 3) this.nameError = true;
      else
        this.socketStore.socket!.send(
          new CreateRoomMessageComposer(
            this.name,
            this.description,
            this.selectedModel,
            this.category,
            this.maxVisitors,
            this.tradeState
          )
        );
    },
  },
  computed: {
    ...mapStores(useNavigatorStore, useWindowStore, useSocketStore),
  },
});
</script>

<style lang="scss" scoped>
.navigator-room-creator-window {
  &__left-panel {
    width: 241px;
    height: 308px;
    top: 10px;
    left: 16px;
    position: absolute;
    display: flex;
    gap: 9px;
    flex-direction: column;
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  &__input-container {
    display: flex;
    flex-direction: column;
    gap: 8px; // - 2 with the label gap
  }

  &__label {
    font-family: "Volter Bold", sans-serif;
    -webkit-font-smoothing: antialiased;
    font-size: 7pt;
    color: #000000;
    line-height: 9px;
    padding-left: 2px;
  }

  &__actions {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  &__cancel-button {
    width: 100px;
  }

  &__right-panel {
    width: 295px;
    height: 312px;
    top: 10px;
    right: 14px;
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  &__model-list {
    display: flex;
    flex-wrap: wrap;
    gap: 3px 2px;
  }

  &__model {
    width: 135px;
    height: 96px;
    position: relative;
    cursor: pointer;
  }

  &__model-image {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
  }

  &__tiles-count {
    display: flex;
    flex-direction: row;
    gap: 4px;
    position: absolute;
    left: 5px;
    bottom: 6px;
    background-color: #cbcbcb;
    padding-right: 2px;
    align-items: end;
  }

  &__model--selected &__tiles-count {
    background-color: #6e8184;
  }

  &__tiles-icon {
    width: 18px;
    height: 10px;
    background-image: url(@images/navigator/icons/tiles.png);
  }

  &__model--selected &__tiles-icon {
    filter: invert(100%);
  }

  &__tiles-text {
    font-size: 7pt;
    font-family: "Volter", sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #000000;
    margin-top: 1px;
    line-height: 11px;
  }

  &__model--selected &__tiles-text {
    color: #ffffff;
  }

  &__hc-icon {
    width: 15px;
    height: 10px;
    background-image: url(@images/navigator/icons/hc.png);
    position: absolute;
    top: 5px;
    right: 9px;
  }

  &__error-bubble {
    position: absolute !important;
    z-index: 1;
    left: 50%;
    transform: translateX(-50%);
    top: -13px;
  }

  &__arrow-icon {
    width: 18px;
    height: 20px;
    background-image: url(@images/navigator/icons/arrow.png);
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 1px;
    animation: arrow 0.7s infinite alternate-reverse ease-out;
  }

  @keyframes arrow {
    from {
      top: 1px;
    }
    to {
      top: 15px;
    }
  }
}
</style>
