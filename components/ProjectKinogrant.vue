<template lang="pug">
  VProject(href="https://www.figma.com/file/6ZQq9J1iISf1eM3sx9dpnM/%D0%A1%D0%B5%D1%80%D0%B2%D0%B8%D1%81-%D0%B4%D0%BB%D1%8F-%D0%BA%D0%B8%D0%BD%D0%BE%D1%88%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2?node-id=0%3A1").project-kinogrant
    template(v-slot:description)
      p Cервис,  который соединяет актеров, сценаристов и продюсеров. Актерская база на основе которой можно собрать команду под проект или найти интересный сценарий для реализации.
    template(v-slot:preview)
      img(src="~/assets/img/projects/kinogrant-01.png" alt="киногрант")

</template>

<script>
import VLink from "@/components/VLink";
import VProject from "@/components/VProject";
export default {
    name: "ProjectKinogrant",
    components: {
        VProject
    }
}
</script>

<style lang="scss">

</style>
