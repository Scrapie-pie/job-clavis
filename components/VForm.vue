<template lang="pug">
  ValidationObserver( v-slot="{ handleSubmit }")
    form(name="request" netlify netlify-honeypot="bot-field" hidden)
      input(type="text" name="name")
      input(type="text" name="category")
      input(type="text" name="message")
      input(type="text" name="email")
    form.form(@submit.prevent="handleSubmit(onSubmit)" v-if="!isSend")
      .form__wrapper
        .form__validator
          input(placeholder="Имя" v-model="model.name")
        ValidationProvider(name="Email", :rules="{ required: true, email: true }" v-slot="{ classes, invalid, validated }").form__validator
          input(placeholder="Email *" v-model="model.email" :class="{error:(invalid && validated)}")
      select(v-model="model.category")
        option Категория
        option Веб-сервис / Портал / B2b-кабинет
        option Проект e-com
        option Старт-апп
        option Тендер
        option Другое
      textarea.form__textarea(v-model="model.message" placeholder="Раскажите о своем проекте")
      input(type="submit").form__submit
    h4(v-else) Заявка отправлена. Мы с вами скоро свяжемся.

</template>

<script>
  //import VGradient from "./VGradient";

  const stateModel = () => {
    return {
      name: null,
      email: null,
      category: 'Категория',
      message: null,
    }
  }

export default {
  name: "VForm",
  components: {
      //VGradient
  },
  data() {
      return {
        isSend:false,
        model:stateModel()

      }
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },
    async onSubmit() {
      const axiosConfig = {
        header: { "Content-Type": "application/x-www-form-urlencoded" },
        baseURL: window.origin,
      };
      this.$axios.post(
        "/",
        this.encode({
          "form-name": "request",
          ...this.model
        }),
        axiosConfig
      ).then(()=>{
        this.isSend = true
        this.model= stateModel()
      });

    }
  }
}
</script>

<style lang="scss">
  .form {
    @include flex_it(column, 10px);
    input:not([type="submit"]), select, textarea {
      min-height: 48px;
      border-radius: 6px;
      border: 1px solid #DBDBDB;
      padding: 5px 15px;
      &::placeholder {
        color: #BCBCBC;
      }
    }
    textarea, &__textarea {
      resize: none;
      min-height: 120px;
      padding: 15px;
    }
    &__wrapper {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      justify-content: space-between;
      gap: 10px 75px;
    }

    &__validator {
      position: relative;
      input {
        width: 100%;
        &.error {
          border-color: #ff5757;
        }
      }
      &-info {
        position: absolute;
        bottom: calc(100% - 1px);
        font-size: 11px;
        padding: 0 5px;
        color: #ff5757;
      }
    }

    input[type="submit"] {
      background: linear-gradient(107.51deg, rgba(255, 226, 159, 0.9) 0%, rgba(255, 169, 159, 0.9) 47.92%, rgba(255, 113, 154, 0.9) 100%);
      color: #fff;
      padding: 10px 15px;
      cursor: pointer;
      align-self: center;
      border: none;
      font-weight: 600;
      border-radius: 6px;
      height: 48px;
      margin-top: 10px;
      //@include trans;
      transition: .25s ease-out;
      &:hover {
        box-shadow: inset 0 0 10px #ffffff87;
        //background-color: #e4ff00;
        //transform: scale(1.05);
      }

    }

    select {
      appearance: none;
      color: #BCBCBC;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='292.4' height='292.4'%3E%3Cpath fill='%23969696' d='M287 69.4a17.6 17.6 0 0 0-13-5.4H18.4c-5 0-9.3 1.8-12.9 5.4A17.6 17.6 0 0 0 0 82.2c0 5 1.8 9.3 5.4 12.9l128 127.9c3.6 3.6 7.8 5.4 12.8 5.4s9.2-1.8 12.8-5.4L287 95c3.5-3.5 5.4-7.8 5.4-12.8 0-5-1.9-9.2-5.5-12.8z'/%3E%3C/svg%3E");
      background-repeat: no-repeat, repeat;
      background-position: right .7em top 50%, 0 0;
      background-size: .65em auto, 100%;
      option {
        color: $glob-color-primary;
      }
    }
  }

</style>
