<template lang="pug">
  VSection.section-why
    .section-why__wrapper
      h2 Команда, занимающаяся предпроектной  предтендерной подготовкой

      div
        VGradientUnderline: .h4 Если вы планируете создание:
        Vlist
          li веб-сервиса/ портала/ b2b-кабинета;
          li проекта e-com с нестандартными   интеграциями;
          li старт-аппа;
          li чего-то вот такого как у них, только круче

      p Clavis — молодая команда с большим опытом  на рынке веб-разработки. Мы собрались, чтобы сделать легче жизнь тем,  кто планирует сложный проект, но не знает с чего начать.

      div
        VGradientUnderline: .h4 Или вам нужно грамотно подготовить проект к тендеру:
        Vlist
          li оформить тендерные документы;
          li подготовить проектные данные;
          li сформировать критерии для участников тендера.


</template>

<script>
import VSection from "@/components/VSection";
import VGradientUnderline from "@/components/VGradientUnderline";
export default {
    name: "SectionWhy",
    components: {
        VSection,
        VGradientUnderline
    }
}
</script>

<style lang="scss">
.section-why {
  &__wrapper {
    //padding-top: 110px;
    display: grid;
    grid-template-columns: repeat(auto-fill, 445px);
    justify-content: space-between;
    gap: 70px 200px;
    .h4 {
      @include gradient_underline(100%);
    }
    h2 {
      margin-bottom: 0;
    }
  }

}
</style>
