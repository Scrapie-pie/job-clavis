<template lang="pug">
  .mark(v-if="themes[theme]" :class="themes[theme]")
    VIcon(:name="icon" v-if="icon")

    .mark__content: slot
</template>

<script>
export default {
  name: "VMark",
  components: {},
  data() {
      return {
          themes: {
              default: 'mark-theme_default',
              light:   'mark-theme_light',
              violet:  'mark-theme_violet',
              icon:    'mark-theme_icon',
          }
      }
  },
  props: {
      theme: {
          type: String,
          default: 'default'
      },
      icon: String
  },
}
</script>

<style lang="scss">
  .mark {
    min-height: 30px;
    font-size: 11px;
    padding: 5px 15px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 11px;
    border-radius: 20px;
    text-align: center;
    color: $glob-color-white;

    &-theme {
      &_default {
        background-color: $glob-color-mark_theme-1;
      }
      &_light {
        background-color: $glob-color-mark_theme-2;
      }
      &_violet {
        background-color: $glob-color-mark_theme-3;
      }
      &_icon {
        .mark__content {
          margin-left: 7px;
        }
        color: #000;
        border: 1px solid #000;
        font-weight: 600;
      }
    }
  }
</style>
