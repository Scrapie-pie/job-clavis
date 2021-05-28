<template lang="pug">
  .v-chain-list
    VChainItem(v-for="(item, index) in list", key="index", :isLast="checkLast(index)", :title="item.title") {{item.content}}

</template>

<script>
import VChainItem from "@/components/VChainItem";
export default {
    name: "VChainList",
    components: {
        VChainItem
    },
    props: {
        list: { type: Array, required: true }
    },
    methods: {
        checkLast(index) {
            return index === this.list.length - 1;
        }
    }
}
</script>

<style lang="scss">
  .v-chain-list {

  }
</style>
