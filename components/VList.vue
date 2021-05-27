<template lang="pug">
  component(:is="tag" :class="`list list_${tag}`")
    slot
</template>

<script>
export default {
  name: "VList",
  props: {
    type: String
  },
  computed: {
    tag() {
      return (this.type && this.type === 'ol') ? 'ol' : 'ul';
    }
  },
  // render(createElement) {
  //   return createElement(
  //     'li',
  //
  //     this.$slots.default
  //   );
  // },
  methods: {
    // test() {
    //   console.log(this.$slots.default)
    // }
  }
}
</script>

<style lang="scss">
.list {
  list-style: none;
  padding: 0;
  li {
    padding: 10px 0;
    margin-left: 20px;
    position: relative;
    &::before {
      content: '';
      position: absolute;
      min-width: 6px;
      min-height: 6px;
      background-color: currentColor;
      left: -20px;
      top: 50%;
      transform: translateY(-25%);
      border-radius: 50%;
    }
  }
}
</style>
