<template lang="pug">
  VSection(theme="gradient").section-projects
    h2 Проекты
    .section-projects__tabs
      .section-projects__tab(:class="tabName==='ProjectKinogrant'?'active':''",@click="tabName='ProjectKinogrant'") Киногрант
      .section-projects__tab(:class="tabName==='ProjectUtest'?'active':''", @click="tabName='ProjectUtest'") Utest
      .section-projects__tab(:class="tabName==='ProjectLaserBest'?'active':''", @click="tabName='ProjectLaserBest'") Laser Best
      .section-projects__tab(:class="tabName==='ProjectSales'?'active':''", @click="tabName='ProjectSales'") Sales

    .section-projects__wrapper
      ProjectKinogrant(v-show="tabName==='ProjectKinogrant'").section-projects__content
      ProjectUtest(v-show="tabName==='ProjectUtest'").section-projects__content
      ProjectLaserBest(v-show="tabName==='ProjectLaserBest'").section-projects__content
      ProjectSales(v-show="tabName==='ProjectSales'").section-projects__content


</template>

<script>
import ProjectKinogrant from "@/components/ProjectKinogrant";
import ProjectUtest from "@/components/ProjectUtest";
import ProjectLaserBest from "@/components/ProjectLaserBest";
import ProjectSales from "@/components/ProjectSales";
import VSection from "@/components/VSection";
import VGradientUnderline from "@/components/VGradientUnderline";
import VIconContent from "@/components/VIconContent";
import VLink from "@/components/VLink";
export default {
    name: "SectionProjects",
    components: {
        ProjectKinogrant,
        ProjectUtest,
        ProjectLaserBest,
        ProjectSales,
        VSection,
        VGradientUnderline,
        VIconContent,
        VLink
    },
    data() {
        return {
            tabName: 'ProjectKinogrant'
        }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style lang="scss">
.section-projects {
  &__tabs {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 70px;
  }
  &__tab {
    width: 140px;
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    padding: 10px;
    margin: 0;
    font-size: 20px;
    font-weight: 700;
    border-bottom: 1px solid #DBDBDB;
    opacity: .8;
    cursor: pointer;
    @include trans;
    &.active, &:hover {
      opacity: 1;
      border-bottom-color: currentColor;
    }
  }
  &__content {
    @include fade-in;
  }
  @media(max-width: 768px) {
    &__tab {
      font-size: 15px;
      padding: 5px;
    }
  }
}
</style>
