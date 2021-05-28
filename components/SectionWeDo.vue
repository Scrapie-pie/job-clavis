<template lang="pug">
  VSection(theme="gradient-reverse").section-we-do
    h2 Что мы делаем?
    .section-we-do__wrapper
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
import VSection from "@/components/VSection";
import VChainList from "@/components/VChainList";
export default {
    name: "SectionWeDo",
    components: {
        VSection,
        VChainList
    }
}
</script>

<style lang="scss">
.section-we-do {
  &__wrapper {
    //padding-top: 110px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 50px;
    align-items: center;
  }
}
</style>
