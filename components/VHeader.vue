<template lang="pug">
  header.header
    .container
      .header__wrapper
        VLink(href="/" icon="logo").header__logo

        .header__links
          VLink(href="#" target="_blank" theme="default")
            | О нас
          VLink(href="#" target="_blank" theme="default")
            | Компетенции
          VLink(href="#" target="_blank" theme="default")
            | Наше предложение
          VLink(href="#" target="_blank" theme="default")
            | Проекты
          VLink(href="#" target="_blank" theme="default")
            | Обсудить проект

</template>

<script>
import VLink from "@/components/VLink";
export default {
  name: "VHeader",
  components: {
      VLink,
  }
}
</script>

<style lang="scss">
  .header {
    $space-vertical:   $glob-space-min;
    $space-horizontal: $glob-space-btw-inline;
    $svg-color:  $glob-color-svg;
    $link-color: $glob-color-link;

    &__wrapper {
      padding: $space-vertical 0 $space-horizontal;
      display: grid;
      grid-template-columns: auto 1fr;
      grid-column-gap: 20px;
      align-items: center;
      width: 100%;
    }

    &__links {
      @include flex_it($distance: 1.8em);
      justify-content: flex-end;
      color: $glob-color-primary;
      .link {
        &:hover .link__content {
          text-shadow: 1px 1px 2px #0000003b;
        }
      }
    }

    @media(max-width: 1024px) {
      //display: none;
      &__links {
        @include flex_it($distance: 1.25em);
        font-size: .85em;
      }
    }
    @media(max-width: 768px) {
      display: none;
    }
  }
</style>
