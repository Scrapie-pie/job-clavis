<template lang="pug">
  VProject.project-utest
    template(v-slot:description)
      p Cервис,  который соединяет актеров, сценаристов и продюсеров. Актерская база на основе которой можно собрать команду под проект или найти интересный сценарий для реализации.
    template(v-slot:preview)
      img(src="~/assets/img/projects/kinogrant-01.png" alt="киногрант")
</template>

<script>
import VProject from "@/components/VProject";
export default {
    name: "ProjectUtest",
    components: {
        VProject
    }
}
</script>

<style lang="scss">

</style>
