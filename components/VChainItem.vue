<template lang="pug">
  .v-chain-item
    .v-chain-item__icon
      VIcon(name="list-arrow" v-if="!isLast")
      VIcon(name="list-flag" v-if="isLast")

    .v-chain-item__wrap
      .h4.v-chain-item__title {{title}}
      .v-chain-item__content
        slot

</template>

<script>
import VIcon from "@/components/VIcon";
import VGradientBorder from "@/components/VGradientBorder";
export default {
    name: "VChainItem",
    components: {
        VIcon,
        VGradientBorder
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
    &__title {
      font-weight: 700;
    }
    &__icon {
      @include gradient_border(37px, 37px, 1px, 50%);
    }
  }
</style>
