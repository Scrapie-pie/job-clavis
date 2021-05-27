<template lang="pug">
  .fa-socials
    VLink(href="#" target="_blank" icon="fa-facebook" theme="default").fa-socials__item
    VLink(href="#" target="_blank" icon="fa-instagram" theme="default").fa-socials__item
    VLink(href="#" target="_blank" icon="fa-twitter" theme="default").fa-socials__item
    VLink(href="#" target="_blank" icon="fa-youtube" theme="default").fa-socials__item
</template>

<script>
import VLink from "@/components/VLink";
export default {
    name: "VFaSocials",
    components: {
        VLink,
    }
}
</script>

<style lang="scss">
.fa-socials {
  @include flex_it(row, 10px);

  align-items: center;
  justify-content: center;

  &__item {
    fill: #B9B9B9;
  }

}
</style>
