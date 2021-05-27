<template lang="pug">
  footer.footer
    .container
      .footer__wrapper
        .footer__content
          VLink(href="mailto:info@clavis.ru" target="_blank")
            | info@clavis.ru

          .footer__address 5810 Hackett Plain Suite 705 Palo Alto, CA

          VFaSocials

</template>

<script>
import VLink from "@/components/VLink";
import VFaSocials from "@/components/VFaSocials";
export default {
  name: "VFooter",
  components: {
      VLink,
      VFaSocials
  }
}
</script>

<style lang="scss">
  .footer {
    margin-top: 55px;
    display: flex;
    align-items: center;
    width: 100%;

    &__wrapper {
      border-top: 1px solid #DBDBDB;
      padding-top: 55px;
      padding-bottom: 75px;
    }

    &__content {
      max-width: 230px;
      margin: 0 auto;
      text-align: center;
      @include flex_it(column, 10px);
      align-items: center;
    }

    &__address {
      font-size: map_get($fs-other, small);
      line-height: 1.5em;
      padding-bottom: 10px;
    }

    &__socials {
      @include flex_it(row, 10px);
      align-items: center;
      justify-content: center;
    }
  }
</style>
