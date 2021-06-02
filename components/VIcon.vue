<template lang="pug">
  .icon(:class="`icon-${name}`")
    svg-logo(v-if="name === 'logo'")
    faFacebook(v-if="name === 'fa-facebook'")
    faInstagram(v-if="name === 'fa-instagram'")
    faTwitter(v-if="name === 'fa-twitter'")
    faYoutube(v-if="name === 'fa-youtube'")
    svgListArrow(v-if="name === 'list-arrow'")
    svgListFlag(v-if="name === 'list-flag'")
    svgContentWindow(v-if="name === 'content-window'")
    svgContentDocument(v-if="name === 'content-document'")
    svgContentCheck(v-if="name === 'content-check'")
    svgSmileFunny(v-if="name === 'smile-funny'")
    svgSmileNormal(v-if="name === 'smile-normal'")
    svgSmileAngry(v-if="name === 'smile-angry'")
    svgBigLogo(v-if="name === 'big-logo-clavis'")
    svgListCheckmark(v-if="name === 'list-checkmark'")
    svgContentWeb(v-if="name === 'content-web'")
    svgContentMoney(v-if="name === 'content-money'")
    svgContentPeople(v-if="name === 'content-people'")
    svgContentPiece(v-if="name === 'content-piece'")
    inlineSmile(v-if="name === 'inline-smile'")
</template>

<script>
import svgLogo from '@/assets/svg/logo-clavis.svg'
import faFacebook from '@/assets/svg/fa-facebook.svg'
import faInstagram from '@/assets/svg/fa-instagram.svg'
import faTwitter from '@/assets/svg/fa-twitter.svg'
import faYoutube from '@/assets/svg/fa-youtube.svg'
import svgListArrow from '@/assets/svg/list-arrow.svg'
import svgListFlag from '@/assets/svg/list-flag.svg'
import svgContentWindow from '@/assets/svg/content-window.svg'
import svgContentDocument from '@/assets/svg/content-document.svg'
import svgContentCheck from '@/assets/svg/content-check.svg'
import svgSmileFunny from '@/assets/svg/smile-funny.svg'
import svgSmileAngry from '@/assets/svg/smile-angry.svg'
import svgSmileNormal from '@/assets/svg/smile-normal.svg'
import svgBigLogo from '@/assets/svg/big-logo-clavis.svg'
import svgListCheckmark from '@/assets/svg/list-checkmark.svg'
import svgContentWeb from '@/assets/svg/content-web.svg'
import svgContentMoney from '@/assets/svg/content-money.svg'
import svgContentPeople from '@/assets/svg/content-people.svg'
import svgContentPiece from '@/assets/svg/content-piece.svg'
import inlineSmile from '@/assets/svg/inline-smile.svg'

export default {
  name: "VIcon",
  components: {
      svgLogo,
      faFacebook,
      faInstagram,
      faTwitter,
      faYoutube,
      svgListArrow,
      svgListFlag,
      svgContentWindow,
      svgContentDocument,
      svgContentCheck,
      svgSmileFunny,
      svgSmileAngry,
      svgSmileNormal,
      svgBigLogo,
      svgListCheckmark,
      svgContentWeb,
      svgContentMoney,
      svgContentPeople,
      svgContentPiece,
      inlineSmile
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
    &-content-window {
      width: 31px;
      height: 31px;
    }
    &-content-document {
      width: 23px;
      height: 31px;
    }
    &-content-check {
      width: 31px;
      height: 31px;
    }
    &-smile-funny, &-smile-normal, &-smile-angry {
      width: 42px;
      height: 42px;
    }
    &-smile-funny {
      fill: #219653;
    }
    &-smile-normal {
      fill: #F2C94C;
    }
    &-smile-angry {
      fill: #EB5757;
    }
    &-big-logo-clavis {
      width: 77px;
      height: 143px;
    }
    &-list-checkmark {
      width: 11px;
      height: 12px;
    }
    &-content-web {
      width:31px;
      height:27px;
    }
    &-content-money {
      width: 31px;
      height: 23px;
    }
    &-content-people {
      width: 31px;
      height: 29px;
    }
    &-content-piece {
      width: 30px;
      height: 31px;
    }
    &-inline-smile {
      width: 24px;
      height: 24px;
      display: inline-block;
      vertical-align: middle;
      margin-left: 6px;
    }
  }
</style>
