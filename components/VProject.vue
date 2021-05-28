<template lang="pug">
  .v-project
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
    text-align: center;
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
