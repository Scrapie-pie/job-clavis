<template lang="pug">
  form.form
    input(type="text" v-model="text" placeholder="Введите текст")
    input(type="tel")
    input(type="email")
    input(type="password")
    input(type="submit")

</template>

<script>
export default {
  name: "VForm",
  data() {
      return {
          text: ""
      }
  }
}
</script>

<style lang="scss">
  .form {
    display: flex;
    flex-direction: column;
  }
</style>
