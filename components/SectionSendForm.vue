<template lang="pug">
  VSection.section-send-form
    h2 Обсудить проект
    .section-send-form__wrapper

      .section-send-form__description
        p Стоимость предпроектной подготовки индивидуальна, но будет зафиксирована после детального брифинга. Чтобы обсудить старт проекта с нашей командой, позвоните по телефону или напишите на почту ...

      VForm.section-send-form__form



</template>

<script>
import VSection from "@/components/VSection";
import VForm from "@/components/VForm";
export default {
    name: "SectionSendForm",
    components: {
        VSection,
        VForm
    },
    data() {
        return {

        }
    }
}
</script>

<style lang="scss">
  .section-send-form {
    //justify-content: center;

    .v-section__wrapper {
      padding-bottom: 0;
    }
    &__description {
      margin-bottom: 50px;
    }
    &__wrapper {
      max-width: 670px;
      margin: 0 auto;
    }
  }
</style>

