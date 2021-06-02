<template lang="pug">
  VSection.section-why(id="section-why")
    .section-why__wrapper
      h2 Команда, занимающаяся предпроектной предтендерной подготовкой

      div
        VGradientUnderline: .h4 Если вы планируете создание:
        VList
          template(slot="item") веб-сервиса/ портала/ b2b-кабинета;
          template(slot="item") проекта e-com с нестандартными   интеграциями;
          template(slot="item") старт-аппа;
          template(slot="item"): div
            | чего-то вот такого как у них, только круче
            VIcon(name="inline-smile")

      p Clavis — молодая команда с большим опытом на рынке веб-разработки. Мы собрались, чтобы сделать легче жизнь тем, кто планирует сложный проект, но не знает с чего начать.

      div
        VGradientUnderline: .h4 Или вам нужно грамотно подготовить проект к тендеру:
        VList
          template(slot="item") оформить тендерные документы;
          template(slot="item") подготовить проектные данные;
          template(slot="item") сформировать критерии для участников тендера.


</template>

<script>
import VSection from "@/components/VSection";
import VList from "@/components/VList";
import VGradientUnderline from "@/components/VGradientUnderline";
import VIcon from "@/components/VIcon";
export default {
    name: "SectionWhy",
    components: {
        VList,
        VSection,
        VGradientUnderline,
        VIcon
    }
}
</script>

<style lang="scss">
.section-why {
  &__wrapper {
    //padding-top: 110px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    justify-content: space-between;
    gap: 70px 200px;
    .h4 {
      @include gradient_underline(100%);
    }
    h2 {
      margin-bottom: 0;
    }
  }
  @media(max-width: 768px) {
    &__wrapper {
      gap: 40px 200px;
    }
  }
  @media(max-width: 650px) {
    &__wrapper {

      h2{
        text-align: center;
      }
    }
  }
}
</style>
