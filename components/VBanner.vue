<template lang="pug">
  section.banner
    .container
      .banner__wrapper
        h1.banner__title Подбираем ключ к вашему проекту
        .banner__sub-title
          .h3 Первая независимая студия<br>подготовки веб-проектов
</template>

<script>
export default {
  name: "VBanner",
}
</script>

<style lang="scss">
.banner {
  padding-bottom: 220px;
  padding-top: 150px;
  &__title {
    margin-bottom: .5em;
  }
  &__wrapper {
    padding-left: 100px;
    padding-right: 100px;
  }
  @media(max-width: 768px) {
    padding: 10px 0 100px;
    &__wrapper {
      padding: 0;
    }
    &__title {
      font-size: 44px;
      margin-bottom: 1em;
      margin-top: 0;
    }
    &__sub-title .h3 {
      margin-bottom: 0;
    }
  }
}
</style>
