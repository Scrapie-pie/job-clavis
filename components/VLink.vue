<template lang="pug">
  a(:href="href" :class="gradientStyle()").link
    VIcon(:name="icon" v-if="icon")

    .link__content: slot

</template>

<script>
import VIcon from "@/components/VIcon";
export default {
  name: "VLink",
  components: {
      VIcon
  },
  props: {
      href: {
          type: String,
          default: '#'
      },
      icon: String,
      theme: String,
  },
  methods: {
    gradientStyle() {
        return this.theme !== 'default' ? 'link_gradient' : '';
    }
  }
}
</script>

<style lang="scss">
  .link {
    //@include flex_it($distance: 10px);

    &__content {
      color: currentColor;
      &:empty { display: none }
    }

    &_gradient {
      background: -webkit-linear-gradient(300deg, rgba(255, 226, 159, 0.9) 0%, rgba(255, 169, 159, 0.9) 56.16%, rgba(255, 113, 154, 0.9) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
</style>
