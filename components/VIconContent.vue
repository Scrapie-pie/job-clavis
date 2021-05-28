<template lang="pug">
  .v-icon-content
    .v-icon-content__icon
      VIcon(:name="icon")

    .v-icon-content__wrap
      slot

</template>

<script>
import VIcon from "@/components/VIcon";
export default {
    name: "VIconContent",
    components: {
        VIcon,
    },
    props: {
        icon: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="scss">
  .v-icon-content {
    @include flex_it(row, 20px);
    &__icon {
      @include gradient_border(63px, 63px, 1px, 50%);
    }
  }
</style>
