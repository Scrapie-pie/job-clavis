<template lang="pug">
  .v-chain-item
    .v-chain-item__icon
      VIcon(name="list-arrow" v-if="!isLast")
      VIcon(name="list-flag" v-if="isLast")

    .v-chain-item__wrap
      .h4 {{title}}
      .v-chain-item__content
        slot

</template>

<script>
import VIcon from "@/components/VIcon";
export default {
    name: "VChainItem",
    components: {
        VIcon
    },
    props: {
        title: String,
        isLast: Boolean,
    },
}
</script>

<style lang="scss">
  .v-chain-item {
    max-width: 390px;
    position: relative;

    @include flex_it(row, 20px);

    &:not(:last-child)::before {
      content: '';
      position: absolute;
      left: 19px;
      width: 1px;
      background-color: rgb(41, 50, 60, .5);;
      top: 0;
      bottom: 0;
    }
    padding-bottom: 25px;
    &__icon {
      .icon {
        position: absolute;
        z-index: 3;
      }

      min-width: 38px;
      //width: 38px;
      height: 38px;
      border-radius: 50%;
      //background-color: #fff;
      z-index: 1;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;

      $border: 2px;
      background-clip: padding-box;
      border: solid $border transparent;

      &::before {
        content: '';
        position: absolute;
        top: 0; right: 0; bottom: 0; left: 0;
        z-index: -1;
        margin: -$border;
        border-radius: inherit;
        background: linear-gradient(to right, rgb(255, 216, 168), rgb(255,141,165));
      }
      &::after {
        content: '';
        min-width: 34px;
        //width: 36px;
        height: 34px;
        border-radius: 50%;
        background-color: #fff;
        z-index: 2;
        //position: absolute;
        //left: 50%;
        //top: 50%;
        //transform: translate(-50%, -50%);

        position: relative;
        display: flex;
      }
    }
  }
</style>
