<template lang="pug">
  .page

    VGradient
      VHeader
      VBanner

    main.main
      slot

    VFooter

</template>

<script>
import VHeader from "@/components/VHeader";
import VFooter from "@/components/VFooter";
import VBanner from "@/components/VBanner";
import VGradient from "@/components/VGradient";
export default {
  name: 'VPageLayout',
  components: {
      VHeader,
      VFooter,
      VBanner,
      VGradient
  }
}
</script>

<style lang="scss">
  @include styles;

  .page {
    display: flex;
    flex-direction: column;
    height: 100vh;
    position: relative;
  }

  .container {
    width: 100%;
    max-width: #{1110 + 30}px;
    padding-left: 15px;
    padding-right: 15px;
    margin: 0 auto;
    position: relative;
  }

  .main {
    flex: 1 0 auto;
    position: relative;
  }

  footer, .footer {
    flex: 0 0 auto;
    position: relative;
  }

</style>
