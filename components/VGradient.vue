<template lang="pug">
  .gradient(:style="gradient")
    slot

</template>

<script>
export default {
  name: 'VPageLayout',
  props: {
    theme: String
  },
  methods: {
    getGradient(deg) {
      return { background: `linear-gradient(${deg}deg, rgba(255, 226, 159, 0.9) 0%, rgba(255, 169, 159, 0.9) 47.92%, rgba(255, 113, 154, 0.9) 100%)` }
    }
  },
  computed: {
    gradient() {
      return this.theme === 'reverse' ? this.getGradient(200) : this.getGradient(107)
    }
  }
}
</script>

<style lang="scss"></style>
