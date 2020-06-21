export default {
  methods: {
    isMobile () {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    },
    isMobileWidth () {
      return window.innerWidth < 992
    }
  }
}
