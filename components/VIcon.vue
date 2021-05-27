<template lang="pug">
  .icon(:class="`icon-${name}`")
    svg-logo(v-if="name === 'logo'")
    faFacebook(v-if="name === 'fa-facebook'")
    faInstagram(v-if="name === 'fa-instagram'")
    faTwitter(v-if="name === 'fa-twitter'")
    faYoutube(v-if="name === 'fa-youtube'")
    listArrow(v-if="name === 'list-arrow'")
    listFlag(v-if="name === 'list-flag'")
</template>

<script>
import svgLogo from '@/assets/svg/logo-clavis.svg'
import faFacebook from '@/assets/svg/fa-facebook.svg'
import faInstagram from '@/assets/svg/fa-instagram.svg'
import faTwitter from '@/assets/svg/fa-twitter.svg'
import faYoutube from '@/assets/svg/fa-youtube.svg'
import listArrow from '@/assets/svg/list-arrow.svg'
import listFlag from '@/assets/svg/list-flag.svg'
export default {
  name: "VIcon",
  components: {
      svgLogo,
      faFacebook,
      faInstagram,
      faTwitter,
      faYoutube,
      listArrow,
      listFlag
  },
  props: {
      name: {
          type: String,
          required: true,
      }
  }
}
</script>

<style lang="scss">
  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    color: currentColor;
    svg {
      width: 100%;
      height: 100%;
    }
    &-logo {
      width: 132px;
      height: 67px;
    }
    &-fa-facebook, &-fa-instagram {
      width: 19px;
      height: 20px;
    }
    &-fa-twitter {
      width: 19px;
      height: 16px;
    }
    &-fa-youtube {
    width: 19px;
    height: 15px;
    }
    &-list-arrow {
      width: 12px;
      height: 12px;
      fill: #969696;
    }
    &-list-flag {
      width: 12px;
      height: 13px;
      //fill: #969696;
    }
  }
</style>
