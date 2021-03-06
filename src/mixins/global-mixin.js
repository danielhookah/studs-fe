import EventBus from '@/common/event-bus'

export default {
  data () {
    return {
      currentPageName: 'page name',
      actionName: 'action'
    }
  },
  methods: {
    isMobile () {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    },
    isMobileWidth () {
      return window.innerWidth < 992
    },
    isNewIOS () {
      const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
      const ratio = window.devicePixelRatio || 1
      const screen = {
        width: window.screen.width * ratio,
        height: window.screen.height * ratio
      }
      if (iOS && screen.width >= 1125 && screen.height >= 2436) {
        return true
      }
      return false
    },
    goToPrevRoute () {
      this.$router.go(-1)
    },
    setCurrentPageName (name) {
      EventBus.$emit('CHANGE_CURRENT_PAGE_NAME', (name))
    },
    showToast ({ message = '', title = '', variant = '', autoHideDelay = 10000 }) {
      this.$bvToast.toast(message, {
        title: title,
        toaster: 'b-toaster-bottom-full',
        solid: true,
        variant: variant,
        appendToast: false,
        autoHideDelay: autoHideDelay
      })
    },
    isLoggedIn () {
      var res = window.getCookie('authl')
      return (res === '1')
    },
    cloneObject (obj) {
      return JSON.parse(JSON.stringify(obj))
    }
  }
}
