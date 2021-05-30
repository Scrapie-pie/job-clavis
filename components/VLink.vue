<template lang="pug">
  a(:href="href" :class="gradientStyle()").link
    VIcon(:name="icon" v-if="icon")

    span.link__content: slot

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
  @include trans;
  //@include flex_it($distance: 10px);

  &__content {
    @include trans;
    color: currentColor;
    &:empty { display: none }

    &::before {
      content: '';
      height: 1px;
      width: 0;
      background: linear-gradient(120deg, rgba(255, 226, 159, 0.9) 0%, rgba(255, 169, 159, 0.9) 56.16%, rgba(255, 113, 154, 0.9) 100%);
      bottom: -2px;
      display: block;
      position: absolute;
      @include trans;
    }


  }

  &_gradient {
    background: -webkit-linear-gradient(300deg, rgba(255, 226, 159, 0.9) 0%, rgba(255, 169, 159, 0.9) 56.16%, rgba(255, 113, 154, 0.9) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    position: relative;

    &:hover .link__content::before {
      width: 100%;
    }

    //&:hover {
    //  background: -webkit-linear-gradient(100deg, rgba(255, 226, 159, 0.9) 0%, rgba(255, 169, 159, 0.9) 56.16%, rgba(255, 113, 154, 0.9) 100%);
    //  -webkit-background-clip: text;
    //  -webkit-text-fill-color: transparent;
    //}
  }

}
</style>
