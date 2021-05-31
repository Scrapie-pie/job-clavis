<template lang="pug">
  VProject(href="https://www.figma.com/file/qDitCkW0dsIq1NcccOuGmX/%D0%A1%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0-%D0%9E%D0%B1%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D1%8F-%D1%82%D0%B5%D1%81%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F?node-id=0%3A1").project-sales
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
