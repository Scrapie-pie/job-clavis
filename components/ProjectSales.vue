<template lang="pug">
  VProject.project-sales
    template(v-slot:description)
      p Сервис тестирования новых продавцов компании для внутреннего пользования  
    template(v-slot:preview)
      img(src="~/assets/img/projects/sales-01.png" alt="киногрант")
</template>

<script>
    import VProject from "@/components/VProject";
    export default {
        name: "ProjectSales",
        components: {
            VProject
        }
    }
</script>

<style lang="scss">

</style>
