<template lang="pug">
  VSection(theme="gradient").section-projects
    h2 Проекты
    .section-projects__tabs(@click="onClickTab")
      .section-projects__tab(v-bind="isActive('ProjectKinogrant')" data-tab="ProjectKinogrant") Киногрант
      .section-projects__tab(v-bind="isActive('ProjectUtest')" data-tab="ProjectUtest") Utest
      .section-projects__tab(v-bind="isActive('ProjectLaserBest')" data-tab="ProjectLaserBest") Laser Best
      .section-projects__tab(v-bind="isActive('ProjectSales')" data-tab="ProjectSales") Sales

    .section-projects__wrapper
      component(:is="currentTab").section-projects__content


</template>

<script>
import VSection from "@/components/VSection";
import VGradientUnderline from "@/components/VGradientUnderline";
import VIconContent from "@/components/VIconContent";
import VLink from "@/components/VLink";
export default {
    name: "SectionProjects",
    components: {
        VSection,
        VGradientUnderline,
        VIconContent,
        VLink
    },
    data() {
        return {
            currentTab: 'ProjectKinogrant'
        }
    },
    methods: {
        onClickTab: function(event) {
            this.currentTab = event.target.dataset.tab
        },
        isActive: function(componentName) {
            return this.currentTab === componentName ? { class: 'active' } : null
        }
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
}
</style>
