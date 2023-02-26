<template>
  <border-card class="currency-widget" type="5" color="#686661" blend="0.63">
    <div class="currency-widget__button-list">
      <tool-tip label="Aide">
        <primary-button class="currency-widget__button" type="1" color="#207aB4"
          >Aide</primary-button
        >
      </tool-tip>
      <tool-tip label="Déconnexion">
        <primary-button
          class="currency-widget__button"
          type="1"
          color="#dd5246"
        >
          <div
            class="currency-widget__button-icon currency-widget__button-icon--logout"
          ></div>
        </primary-button>
      </tool-tip>
      <tool-tip label="Préférences">
        <primary-button
          class="currency-widget__button"
          type="1"
          color="#716a85"
        >
          <div
            class="currency-widget__button-icon currency-widget__button-icon--settings"
          ></div>
        </primary-button>
      </tool-tip>
    </div>
    <div class="currency-widget__separator"></div>
    <div class="currency-widget__currency-list">
      <tool-tip label="Diamants">
        <div
          class="currency-widget__currency currency-widget__currency--diamonds"
        >
          <div class="currency-widget__currency-amount">3000</div>
          <div class="currency-widget__currency-icon"></div>
        </div>
      </tool-tip>
      <tool-tip label="Crédits">
        <div
          class="currency-widget__currency currency-widget__currency--credits"
        >
          <div class="currency-widget__currency-amount">49573</div>
          <div class="currency-widget__currency-icon"></div>
        </div>
      </tool-tip>
      <tool-tip label="Duckets">
        <div
          class="currency-widget__currency currency-widget__currency--duckets"
        >
          <div class="currency-widget__currency-amount">780</div>
          <div class="currency-widget__currency-icon"></div>
        </div>
      </tool-tip>
    </div>
  </border-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BorderCard from "@/components/common/BorderCard.vue";
import PrimaryButton from "@/components/common/PrimaryButton.vue";
import ToolTip from "@/components/common/ToolTip.vue";

export default defineComponent({
  name: "CurrencyWidget",
  components: {
    ToolTip,
    PrimaryButton,
    BorderCard,
  },
});
</script>

<style lang="scss" scoped>
.currency-widget {
  height: 76px;
  width: 100%;

  &__button-list {
    width: 61px;
    right: 8px;
    top: 8px;
    display: flex;
    flex-direction: column;
    gap: 2px;
    position: absolute;
  }

  &__button {
    height: 19px;
    color: #ffffff;
    font-size: 9pt;
    font-family: "Ubuntu";
    line-height: 20px;

    &-icon {
      &--settings {
        width: 12px;
        height: 12px;
        background-image: url(@images/purse-grid/icons/settings.png);
        margin-top: 3px;
      }

      &--logout {
        width: 13px;
        height: 11px;
        background-image: url(@images/purse-grid/icons/logout.png);
        margin-top: 4px;
        margin-left: 4px;
      }
    }
  }

  &__separator {
    width: 1px;
    height: 55px;
    background-color: #444444;
    position: absolute;
    top: 12px;
    right: 74px;
  }

  &__currency-list {
    display: flex;
    flex-direction: column;
    gap: 4px;
    position: absolute;
    top: 11px;
    right: 79px;
  }

  &__currency {
    display: flex;
    flex-direction: row;
    gap: 2px;
    justify-content: flex-end;
    cursor: pointer;

    &:hover {
      filter: brightness(150%);
    }

    &:active {
      transform: translateY(-1px);
      filter: brightness(60%);
    }

    &-icon {
      width: 15px;
      height: 15px;
      filter: drop-shadow(0px 1px 0px rgba(0, 0, 0, 0.4));
      background-position: center;
      background-repeat: no-repeat;
    }

    &-amount {
      font-size: 9pt;
      font-family: "Ubuntu", sans-serif;
      text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.4);
      line-height: 15px;
    }

    &--diamonds &-icon {
      background-image: url(@images/purse-grid/icons/diamond.png);
    }

    &--diamonds &-amount {
      color: #37c8e9;
    }

    &--credits &-icon {
      background-image: url(@images/purse-grid/icons/credit.png);
    }

    &--credits &-amount {
      color: #d4ae21;
    }

    &--duckets &-icon {
      background-image: url(@images/purse-grid/icons/ducket.png);
    }

    &--duckets &-amount {
      color: #d686d6;
    }
  }
}
</style>
