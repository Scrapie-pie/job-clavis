<template lang="pug">
  section.v-section
    component(:is="gradient" :theme="gradientTheme()").v-section__wrapper
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
    background-color: #FFFDF6;
    &__wrapper {
      padding: 90px 0 80px;

    }
    @media(max-width: 768px) {
      &__wrapper {
        padding: 50px 0 40px;
      }
    }
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
