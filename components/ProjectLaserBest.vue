<template lang="pug">
  VProject.project-laser-best
    template(v-slot:description)
      p Система автоматизации косметологической клиники  
    template(v-slot:preview)
      img(src="~/assets/img/projects/laser-best-01.png" alt="киногрант")
</template>

<script>
    import VProject from "@/components/VProject";
    export default {
        name: "ProjectLaserBest",
        components: {
            VProject
        }
    }
</script>

<style lang="scss">

</style>
