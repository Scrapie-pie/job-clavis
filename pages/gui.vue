<template lang="pug">
  VPageLayout
    SectionWhy
    SectionWeDo

    SectionCompetence
    SectionNow

    SectionOffer

    SectionProfit
    SectionTeam
</template>

<script>
import VPageLayout from "@/layouts/VPageLayout";
// import Vlist from "@/components/Vlist";
// import VGradientUnderline from "@/components/VGradientUnderline";
// import VSection from "@/components/VSection";
// import VChainList from "@/components/VChainList";
// import VIconContent from "@/components/VIconContent";
// import VLink from "@/components/VLink";
// import VIcon from "@/components/VIcon";


import SectionWhy from "@/components/SectionWhy";
import SectionWeDo from "@/components/SectionWeDo";
import SectionCompetence from "@/components/SectionCompetence";
import SectionNow from "@/components/SectionNow";
import SectionOffer from "@/components/SectionOffer";
import SectionProfit from "@/components/SectionProfit";
import SectionTeam from "@/components/SectionTeam";

export default {
    components: {
        VPageLayout,
        // Vlist,
        // VSection,
        // VGradientUnderline,
        // VChainList,
        // VIconContent,
        // VLink,
        // VIcon,

        SectionWhy,
        SectionWeDo,
        SectionCompetence,
        SectionNow,
        SectionOffer,
        SectionProfit,
        SectionTeam
    }
}
</script>

<style lang="scss">

</style>
