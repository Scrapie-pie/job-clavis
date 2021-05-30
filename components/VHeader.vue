<template lang="pug">
  header.header
    .container
      .header__wrapper
        VLink(href="/" icon="logo").header__logo

        .header__links(@click="toAnchor")
          .header__links-item(data-anchor="section-why") О нас
          .header__links-item(data-anchor="section-competence") Компетенции
          .header__links-item(data-anchor="section-offer") Наше предложение
          .header__links-item(data-anchor="section-projects") Проекты
          .header__links-item(data-anchor="section-send-form") Обсудить проект

</template>

<script>
import VLink from "@/components/VLink";
export default {
  name: "VHeader",
  components: {
      VLink,
  },
  methods: {
    toAnchor(e) {
      let id = e.target.dataset.anchor;
      if (id) {
        try {
          document.getElementById(id).scrollIntoView({ behavior: 'smooth', top: true });
        } catch (e) {
          return;
        }
      }
    }
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
      &-item {
        @include trans;
        cursor: pointer;
        &:hover {
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
      &__links {
        display: none;
      }
      &__logo .icon-logo {
        /*width: 128px;*/
        /*height: 65px;*/
      }
    }
  }
</style>
