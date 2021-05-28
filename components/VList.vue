<template lang="pug">
  component(:is="tag" :class="`list list_${tag} ${listStyleClass}`")

    //.list__checkmark(v-if="listStyle === 'checkmarks'")
      VIcon(name="list-checkmark")

    slot

</template>

<script>
export default {
  name: "VList",
  props: {
    type: String,
    listStyle: String,
  },
  computed: {
    tag() {
      return (this.type === 'ol') ? 'ol' : 'ul';
    },
    listStyleClass() {
      return (this.listStyle === 'checkmarks') ? 'list_checkmarks' : 'list_default';
    }
  },
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
      position: absolute;
      left: -20px;
      top: 50%;
      transform: translateY(-25%);
    }
  }
  &_default {
    li {
      &::before {
        content: '';
        min-width: 6px;
        min-height: 6px;
        max-width: 6px;
        max-height: 6px;
        background-color: currentColor;
        border-radius: 50%;
      }
    }
  }
  /*&_checkmarks {
    li::before {
      @include make-figure(11);
      @include checkmark;
    }
  }*/
}
</style>
