<template lang="pug">
  VSection(theme="gradient-reverse" id="section-offer").section-offer
    h2 Наше предложение
    .section-offer__description
      .section-offer__logo
        VIcon(name="big-logo-clavis")
        .h2.section-offer__logo-text Clavis — независимая студия
      .section-offer__description-text
        p которая реализует этап предпроектной аналитики.<br>Мы не делаем сам проект (дизайн+верстка+программирование).
        p Мы готовим все необходимое (проектирование+прототипы+техническое задание),
        p чтобы вы получили справедливую оценку и качественный результат разработки от студий и агентств. Мы собираем воедино данные и документы, чтобы студиям было проще и быстрее начать ваш проект

    .section-offer__bottom
      .section-offer__bottom-item
        .h4.section-offer__bottom-title Сложные проекты
        VList(listStyle="checkmarks").section-offer__bottom-checkmarks
          template(v-slot:item) На основе структуры и прототипов можно рассчитать объем работ по дизайну и вёрстке
          template(v-slot:item) На основе подробного ТЗ можно сделать расчёт программирования / технической реализации проекта.

      .section-offer__bottom-item
        .h4.section-offer__bottom-title Для тендера
        VList(listStyle="checkmarks").section-offer__bottom-checkmarks
          template(v-slot:item) Будут собраны все данные внутри компании
          template(v-slot:item) Подготовлены критерии потенциального подрядчика

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
      &-text {
        width: 100%;
      }
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
        font-weight: 800 !important;
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

    @media(max-width: 1024px) {
      &__description {
        grid-template-columns: 1fr;
      }
      &__logo {
        align-items: center;
        &-text {
          max-width: none;
        }
        .icon-big-logo-clavis {
          min-width: 60px;
          min-height: 90px;
        }
      }
    }
    @media(max-width: 768px) {
      &__description {
        @include flex_it(column, 60px);
        gap: 0;
      }
      &__bottom {
        gap:0;
        @include flex_it(column, 10px);
        &-item {
          flex-direction: column;
        }
        &-title {
          writing-mode: inherit;
          transform: none;
          text-align: left;
        }
      }
    }
    @media(max-width: 420px) {
      .section-offer {
        &__logo-text {
          font-size: 28px;
        }
      }
    }
  }
</style>
