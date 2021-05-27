<template lang="pug">

  VPageLayout
    VSection
      .step-one__wrapper

        h2 Команда, занимающаяся предпроектной  предтендерной подготовкой

        div
          VGradientBorder: .h4 Если вы планируете создание:
          Vlist
            li веб-сервиса/ портала/ b2b-кабинета;
            li проекта e-com с нестандартными   интеграциями;
            li старт-аппа;
            li чего-то вот такого как у них, только круче

        p Clavis — молодая команда с большим опытом  на рынке веб-разработки. Мы собрались, чтобы сделать легче жизнь тем,  кто планирует сложный проект, но не знает с чего начать.

        div
          VGradientBorder: .h4 Или вам нужно грамотно подготовить проект к тендеру:
          Vlist
            li оформить тендерные документы;
            li подготовить проектные данные;
            li сформировать критерии для участников тендера.

    VSection(theme="gradient-reverse")
      h2 Что мы делаем?
      .step-two__wrapper

        VChainList(
          :list="[\
            {title: 'Слушаем', content: 'Берём все ваши идеи'},\
            {title: 'Думаем', content: 'Менеджерим процесс'},\
            {title: 'Анализируем', content: 'Собираем воедино'},\
            {title: 'Оформляем', content: 'Отдаём базис проекта'},\
            {title: 'Результат', content: 'Мы собираем воедино данные и документы, чтобы студиям было проще и быстрее начать ваш проект'},\
          ]"
        )

        img(src="~/assets/img/img01.png" alt="Что мы делаем?")




</template>

<script>
import VPageLayout from "@/layouts/VPageLayout";
import Vlist from "@/components/Vlist";
import VGradientBorder from "@/components/VGradientBorder";
import VSection from "@/components/VSection";
import VChainList from "@/components/VChainList";



export default {
    components: {
        VPageLayout,
        Vlist,
        VSection,
        VGradientBorder,
        VChainList,

    }
}
</script>

<style lang="scss">

.step-one {
  &__wrapper {
    //padding-top: 110px;
    display: grid;
    grid-template-columns: repeat(auto-fill, 445px);
    justify-content: space-between;
    gap: 70px 200px;
    .h4 {
      @include gradient_border(100%);
    }
  }
}

.step-two {
  &__wrapper {
    //padding-top: 110px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 50px;
    align-items: center;
  }
}

</style>
