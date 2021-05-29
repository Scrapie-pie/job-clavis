<template lang="pug">
  .v-project
    .v-project__description
      slot(name="description")
      VLink(href="#" theme="default").v-project__view-prototype Смотреть прототип
    slot(name="preview")

</template>

<script>
    import VLink from "@/components/VLink";
    export default {
        name: "Project",
        components: {
            VLink
        },

    }
</script>

<style lang="scss">
  .v-project {
    img {
      width: 100%;
    }
    text-align: center;
    font-size: 15px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    &__description {
      max-width: 750px;
      text-align: center;
    }
    &__view-prototype {
      border-bottom: 1px solid currentColor;
      margin-bottom: 75px;
      display: inline-block;
      &:hover {
        border-bottom-color: transparent;
      }
    }

  }
</style>
