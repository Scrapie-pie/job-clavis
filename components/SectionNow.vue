<template lang="pug">
  VSection.section-now(id="section-now")
    h2 Как это бывает сейчас
    .section-now__description.section-now__desktop
      .section-now__description-item
        .h4 Клиент
        br
        .h4 Веб-студия/агентство
      .section-now__description-item
        span Клиент приходит в веб-студию/ агентство за разработкой сложного проекта.
        .section-now__description-smile: VIcon(name="smile-funny")
        span Расчётом проектов в студиях занимаются менеджеры. Менеджерская оценка часто бывает неточной и завышенной.
      .section-now__description-item
        span На входе мало данных для детального расчёта реализации.
        .section-now__description-smile: VIcon(name="smile-normal")
        span Программисты, UX/UI-аналитики заняты на проектах и не всегда могут подключиться к проработке запроса от клиента.
      .section-now__description-item
        span Клиент получает завышенную оценку или долгий процесс разработки, разбитый по этапам без фиксированного срока и стоимости.
        .section-now__description-smile: VIcon(name="smile-angry")
        span
          |Специалистам нужно погружаться в текущее состояние проекта, или изучать проектную документацию на +50 страниц, или вообще проектировать на этапе оценки.<br>
          |При этом есть вероятность, что тендер будет выигран другой студией и время специалистов потрачено впустую.

    .section-now__description.section-now__mobile(hidden)
      div
        VGradientUnderline: .h4 Клиент
        ul
          li Клиент приходит в веб-студию/ агентство за разработкой сложного проекта.
          li На входе мало данных для детального расчёта реализации.
          li Клиент получает завышенную оценку или долгий процесс разработки, разбитый по этапам без фиксированного срока и стоимости.
      div
        VGradientUnderline: .h4 Веб-студия/агентство
        ul
         li Расчётом проектов в студиях занимаются менеджеры. Менеджерская оценка часто бывает неточной и завышенной.
         li Программисты, UX/UI-аналитики заняты на проектах и не всегда могут подключиться к проработке запроса от клиента.
         li
          |Специалистам нужно погружаться в текущее состояние проекта, или изучать проектную документацию на +50 страниц, или вообще проектировать на этапе оценки.<br>
          |При этом есть вероятность, что тендер будет выигран другой студией и время специалистов потрачено впустую.



</template>

<script>
    import VSection from "@/components/VSection";
    import VGradientUnderline from "@/components/VGradientUnderline";
    import VIconContent from "@/components/VIconContent";
    import VLink from "@/components/VLink";
    export default {
        name: "SectionNow",
        components: {
            VSection,
            VGradientUnderline,
            VIconContent,
            VLink
        }
    }
</script>

<style lang="scss">
  .section-now {
    &__description {
      @include flex_it(column, 85px);
      & > *:first-child {
        margin-bottom: 0;
      }
      &-item {
        align-items: center;
        display: grid;
        grid-template-columns: 1fr 114px 1fr;
        grid-column-gap: 75px;

        .h4 {
          padding-bottom: 5px;
          text-align: center;
          font-weight: 700;
          @include gradient_underline(155px);
          @include hGradient;
        }
      }
      &-smile {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        max-width: 114px;
        max-height: 114px;
        margin: 0 auto;
        padding: 36px;
        border: 1px solid #000;
      }
    }

    &__mobile {
      .gradient-underline {
        text-align: center;
        margin-bottom: 1.5em;
      }
      ul {
        @include flex_it(column, 15px);
        margin-bottom: 2em;
      }
      .h4 {
        padding-bottom: 5px;
        text-align: center;
        font-weight: 700;
        @include gradient_underline(100%);
        @include hGradient;
      }
    }
    @media(max-width: 767px) {
      .section-now__desktop {
        display: none;
      }
    }
    @media(max-width: 767px) {
      .section-now__mobile {
        display: block;
      }
    }
  }
</style>
