<template lang="pug">
  VSection.section-competence
    h2 Наши компетенции
    .section-competence__list
      VIconContent(icon="content-window")
        .h4 Проектирование интерфейса (UX/UI)
        p Проводим необходимый пул работ по аналитике проекта: 
        ul
          li брифинг стейкхолдеров/ коридорные исследования,
          li погружение в задачи проекта,
          li проработка пользовательских сценариев.

        VLink(href="#" target="_blank")
          | Подробнее...

      VIconContent(icon="content-document")
        .h4 Техническая документация проекта
        p Проводим брифинг на предмет формирования документа ФТТ (функционально-технические требования).
        p   Документ описывает все нюансы технической реализации проекта  (фронт-/ бэк -энд разработка, тестирование, интеграции).

      VIconContent(icon="content-check")
        .h4 Тендерная  подготовка
        p Формулируем документы  по проекту для тендерной площадки с точки зрения интересов  всех участников  со стороны Заказчика (руководство, маркетинг, закупки).
        p   Описываем требования  к потенциальному подрядчику (если нужно).  
        p Формируем оптимальное тендерное задание (если нужно).

    .section-competence__badges
      img(src="~/assets/img/badge-01.png" alt="miro").section-competence__badges-item
      img(src="~/assets/img/badge-02.png" alt="xmind").section-competence__badges-item
      img(src="~/assets/img/badge-03.png" alt="figma").section-competence__badges-item
      img(src="~/assets/img/badge-04.png" alt="azure").section-competence__badges-item


</template>

<script>
import VSection from "@/components/VSection";
import VGradientUnderline from "@/components/VGradientUnderline";
import VIconContent from "@/components/VIconContent";
import VLink from "@/components/VLink";
export default {
    name: "SectionCompetence",
    components: {
        VSection,
        VGradientUnderline,
        VIconContent,
        VLink
    }
}
</script>

<style lang="scss">
.section-competence {
  .v-section__wrapper {
    padding-bottom: 0;
  }
  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
  }
  &__badges {
    margin: 50px 0;
    display: grid;
    align-items: center;
    grid-template-columns: repeat(auto-fit, minmax(215px, 1fr));
    gap: 20px;
    &-item {
      margin: 0 auto;
      width: 215px;
      height: 128px;
    }
  }
}
</style>
