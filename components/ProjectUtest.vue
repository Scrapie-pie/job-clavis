<template lang="pug">
  VProject(href="https://www.figma.com/file/irx9LUGdTLV39iEjQgbNC8/testu?node-id=0%3A1").project-utest
    template(v-slot:description)
      p система тестирования в которой можно создавать группы пользователей, назначать для них тесты и передавать/продавать их другим пользователям, выставлять оценки и вести аналитику по группам.
    template(v-slot:preview)
      img(src="~/assets/img/projects/utest-01.png" alt="utest")
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
