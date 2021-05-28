<template lang="pug">
  .gradient-border
    slot

</template>

<script>
export default {
    name: "VGradientBorder",
    props: {
        w: Number,
        h: Number,
    },
    methods: {
        setWidth() {
            return { style: "" }
        }
    }
}
</script>

<style lang="scss">
  .gradient-border {
    @include gradient_border(38px, 38px, 2px, 50%);
  }

</style>
