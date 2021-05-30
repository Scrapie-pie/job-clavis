<template lang="pug">
  VSection.section-team(id="section-team")
    h2 Наша команда
    .section-team__wrapper
      .section-team__item
        img(src="~/assets/img/people/Gosha.jpg" alt="Гриценко Георгий").section-team__img
        .h4 Гриценко Георгий
        small Идейный вдохновитель
      .section-team__item
        img(src="~/assets/img/people/Ivan.jpg" alt="Царьков Иван").section-team__img
        .h4 Царьков Иван
        small UX/UI дизайнер
      .section-team__item
        img(src="~/assets/img/people/Felix_kryt.jpg" alt="Хайрулин Феликс").section-team__img
        .h4 Хайрулин Феликс
        small Руководитель проекта Clavis


</template>

<script>
    import VSection from "@/components/VSection";
    import VGradientUnderline from "@/components/VGradientUnderline";
    import VIconContent from "@/components/VIconContent";
    import VLink from "@/components/VLink";
    export default {
        name: "SectionTeam",
        components: {
            VSection,
            VGradientUnderline,
            VIconContent,
            VLink
        }
    }
</script>

<style lang="scss">
  .section-team {
    &__wrapper {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      grid-column-gap: 30px;
      grid-row-gap: 60px;
    }
    &__item {
      text-align: center;
    }
    &__img {
      margin-bottom: 20px;
      border-radius: 8px;
      max-width: 100%;
    }
  }
</style>
