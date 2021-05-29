<template lang="pug">
  VSection(theme="gradient-reverse").section-offer
    h2 Наше предложение
    .section-offer__description
      .section-offer__logo
        VIcon(name="big-logo-clavis")
        .h2.section-offer__logo-text Clavis — независимая студия
      div
        p которая реализует этап предпроектной аналитики.<br>Мы не делаем сам проект (дизайн+верстка+программирование).  
        p Мы готовим все необходимое (проектирование+прототипы+техническое задание),
        p чтобы вы получили справедливую оценку и качественный результат разработки от студий и агентств.   Мы собираем воедино данные и документы, чтобы студиям было проще и быстрее начать ваш проект

    .section-offer__bottom
      .section-offer__bottom-item
        .h4.section-offer__bottom-title Сложные проекты
        VList(listStyle="checkmarks").section-offer__bottom-checkmarks
          template(slot="item") На основе структуры и прототипов можно рассчитать объем работ по дизайну и вёрстке
          template(slot="item") На основе подробного ТЗ можно сделать расчёт программирования / технической реализации проекта.

      .section-offer__bottom-item
        .h4.section-offer__bottom-title Для тендера
        VList(listStyle="checkmarks").section-offer__bottom-checkmarks
          template(slot="item") Будут собраны все данные внутри компании
          template(slot="item") Подготовлены критерии потенциального подрядчика

</template>

<script>
import VSection from "@/components/VSection";
import VGradientUnderline from "@/components/VGradientUnderline";
import VIconContent from "@/components/VIconContent";
import VLink from "@/components/VLink";
export default {
    name: "SectionOffer",
    components: {
        VSection,
        VGradientUnderline,
        VIconContent,
        VLink
    }
}
</script>

<style lang="scss">
  .section-offer {
    &__description {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 40px;
      align-items: center;
      margin-bottom: 60px;
    }
    &__logo {
      @include flex_it(row, 20px);
      &-text {
        max-width: 350px;
        margin-bottom: 0;
        font-weight: 800;
      }
    }

    &__bottom {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 40px;
      &-item {
        @include flex_it(row, 40px);
        //justify-content: center;
      }
      &-title {
        text-align: center;
        writing-mode: vertical-lr;
        transform: rotate(180deg);
        border-left: 2px solid currentColor;
        margin: 0;
        padding-left: 10px;
      }
      &-checkmarks {
        justify-content: center;
      }
    }
  }
</style>
