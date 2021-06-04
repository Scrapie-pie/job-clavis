<template lang="pug">
  .page

    .main
      VHeader
      VGradient: VBanner
      SectionWhy
      SectionWeDo
      SectionCompetence
      SectionNow
      SectionOffer
      SectionProfit
      SectionTeam
      SectionProjects
      SectionSendForm
      VFooter

</template>

<script>
import SectionWhy from "@/components/SectionWhy";
import SectionWeDo from "@/components/SectionWeDo";
import SectionCompetence from "@/components/SectionCompetence";
import SectionNow from "@/components/SectionNow";
import SectionOffer from "@/components/SectionOffer";
import SectionProfit from "@/components/SectionProfit";
import SectionTeam from "@/components/SectionTeam";
import SectionProjects from "@/components/SectionProjects";
import SectionSendForm from "@/components/SectionSendForm";

import VHeader from "@/components/VHeader";
import VFooter from "@/components/VFooter";
import VBanner from "@/components/VBanner";
import VGradient from "@/components/VGradient";

export default {
    //layout: "VPageLayout",
    components: {
        SectionWhy,
        SectionWeDo,
        SectionCompetence,
        SectionNow,
        SectionOffer,
        SectionProfit,
        SectionTeam,
        SectionProjects,
        SectionSendForm,

        VHeader,
        VFooter,
        VBanner,
        VGradient
    },
}
</script>

<style lang="scss">

@include styles;

.page {
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: relative;
  background-color: $glob-color-bg;
}

.container {
  width: 100%;
  max-width: #{1110 + 30}px;
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto;
  position: relative;
}

.main {
  flex: 1 0 auto;
  position: relative;
}

footer, .footer {
  flex: 0 0 auto;
  position: relative;
}

</style>
