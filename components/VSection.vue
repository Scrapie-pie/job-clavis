<template lang="pug">
  section
    component(:is="gradient" :theme="gradientTheme()").v-section
      .container
        slot


</template>

<script>
export default {
    name: "VSection",
    props: {
        theme: String
    },
    methods: {
        gradientTheme() {
          return (this.theme === 'gradient-reverse') ? 'reverse' : null;
        }
    },
    computed: {
        gradient() {
          let t = this.theme;
          return (t === 'gradient' || t === 'gradient-reverse') ? 'VGradient' : 'div';
        },
    }
}
</script>

<style lang="scss">

  .v-section {
    padding: 110px 0;
    //background-color: #E5E5E5;
  }

  /*.v-section {
    &__wrapper {
      padding-top: 110px;
      padding-bottom: 110px;
      display: grid;
      grid-template-columns: repeat(auto-fill, 445px);
      justify-content: space-between;
      gap: 70px 200px;
      .h4 {
        @include gradient_border(100%);
      }
    }
  }*/

</style>
