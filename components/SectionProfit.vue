<template lang="pug">
  VSection.section-profit
    h2 Почему это выгодно?
    .section-profit__description
      img(src="~/assets/img/img-01.png" alt="azure")
      .section-profit__list
        VIconContent(icon="content-document")
          p Мы не делаем расчёт, заточенный под конкретного исполнителя, потому что независимы.<br>Это позволяет находить решения, оптимальные именно для Заказчика, а не для студии.
        VIconContent(icon="content-document")
          p Мы не делаем расчёт, заточенный под конкретного исполнителя, потому что независимы.<br>Это позволяет находить решения, оптимальные именно для Заказчика, а не для студии.
        VIconContent(icon="content-document")
          p Мы не делаем расчёт, заточенный под конкретного исполнителя, потому что независимы.<br>Это позволяет находить решения, оптимальные именно для Заказчика, а не для студии.
        VIconContent(icon="content-document")
          p Мы не делаем расчёт, заточенный под конкретного исполнителя, потому что независимы.<br>Это позволяет находить решения, оптимальные именно для Заказчика, а не для студии.


</template>

<script>
import VSection from "@/components/VSection";
import VGradientUnderline from "@/components/VGradientUnderline";
import VIconContent from "@/components/VIconContent";
import VLink from "@/components/VLink";
export default {
name: "SectionProfit",
  components: {
      VSection,
      VGradientUnderline,
      VIconContent,
      VLink
  }
}
</script>

<style lang="scss">
.section-profit {
  .v-section__wrapper {
    padding-bottom: 0;
  }
  &__description {
    display: grid;
    grid-template-columns: auto minmax(390px, 1fr);
    grid-column-gap: 90px;
    //margin-bottom: 70px;
  }
  &__list {}
}
</style>
