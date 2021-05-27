<template lang="pug">
  section.content
    .container
      .content__wrapper
        slot
</template>

<script>
export default {
  name: "VContent",
}
</script>

<style lang="scss">
  .content {
    &__wrapper {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr) minmax(200px, 1fr));
      grid-column-gap: 125px;
      align-items: center;
      margin-top: $glob-space-medium;
    }

    img {
      width: 100%;
      border-radius: 20px;
    }

    @include media($max: $glob-tablet-medium) {
      &__wrapper {
        margin-top: 60px;
      }
      img {
        max-height: 300px;
        order: 1;
        margin: 10px auto 0;
      }
      &__wrapper {
        grid-template-columns: 1fr;
      }
    }
    @include media($min: $glob-phone-medium, $max: $glob-tablet-medium) {
      img { width: auto }
    }
  }
</style>
