<template lang="pug">
  VSection.section-profit(id="section-profit")
    h2 Почему это выгодно?
    .section-profit__description
      img(src="~/assets/img/img-01.png" alt="azure").section-profit__img
      .section-profit__list
        VIconContent(icon="content-web")
          p Мы не делаем расчёт, заточенный под конкретного исполнителя, потому что независимы.<br>Это позволяет находить решения, оптимальные именно для Заказчика, а не для студии.
        VIconContent(icon="content-money")
          p Мы экономим бюджет, так как продумываем проект на наименее дорогостоящем и наиболее безопасном этапе.
        VIconContent(icon="content-people")
          p Наши специалисты заточены только под один этап проекта. Это значит, что работы по этому этапу будут реализованы быстрее,  чем в студии/ агентстве, у которых все специалисты на потоке.
        VIconContent(icon="content-piece")
          p Наша рентабельность ниже, так как команда не зависит от фактора большой студии. Это позволяет нам зафиксировать стоимость для Заказчика и она ниже, чем если делать это в студии/агентстве.


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
  &__list {
    @include flex_it(column, 50px);
    p {
      margin-bottom: 0;
    }
  }

  &__img {

  }

  @media(max-width: 1024px) {
    &__description {
      @include flex_it(column, 50px);
    }
    &__img {
      margin: 0 auto;
      max-width: 75vw;
    }
  }
}
</style>
