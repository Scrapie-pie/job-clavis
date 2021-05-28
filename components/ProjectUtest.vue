<template lang="pug">
  VProject.project-utest
    template(v-slot:description)
      p Cервис,
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
