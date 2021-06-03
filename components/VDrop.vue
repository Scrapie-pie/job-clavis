<template lang="pug">
  .drop
    VIcon(:name="icon" v-if="icon")

    VGradientUnderline: .drop__content(:class="gradientStyle()" @click="toggle")
      slot(name="main")

    transition(name="fade" v-if="$slots.drop")
      .drop__dropped(v-show="show")
        .drop__dropped-wrapper
          slot(name="drop")

</template>

<script>
    import VIcon from "@/components/VIcon";
    import VGradientUnderline from "@/components/VGradientUnderline";
    export default {
        name: "VDrop",
        components: {
            VIcon,
            VGradientUnderline
        },
        data() {
            return {
                show: false
            }
        },
        props: {
            icon: String,
            theme: String,
        },

        methods: {
            gradientStyle() {
                return this.theme !== 'default' ? 'drop_gradient' : '';
            },
            close(e) {
                if (!e.target.closest('.drop')) {
                    this.show = false
                    document.removeEventListener('click', this.close)
                }
            },
            toggle() {
                this.show = !this.show
            }
        },
        mounted() {
            document.addEventListener('click', this.close)
        },
        updated() {
            document.addEventListener('click', this.close)
        },
        beforeDestroy() {
            document.removeEventListener('click', this.close)
        },
    }
</script>

<style lang="scss">
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  .drop {
    @include trans;
    //@include flex_it($distance: 10px);
    position: relative;

    &__dropped {

      background: linear-gradient(to right, rgb(255, 216, 168), rgb(255,141,165));
      padding: 2px;
      position: absolute;
      z-index: 10;
      border-radius: 10px;

      &-wrapper {
        background-color: $glob-color-bg;
        padding: 20px;
        border-radius: 8px;
      }

      p {
        margin-bottom: .5em;
      }
      ul {
        margin-bottom: .5em;
      }
    }

    &__content {
      @include trans;

      user-select: none;

      color: currentColor;
      cursor: pointer;
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
      &:hover {
        &:before {
          width: 100%;
        }
      }
    }

    &_gradient {
      background: -webkit-linear-gradient(300deg, rgba(255, 226, 159, 0.9) 0%, rgba(255, 169, 159, 0.9) 56.16%, rgba(255, 113, 154, 0.9) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;

      position: relative;
      display: inline;

    }
  }
</style>
