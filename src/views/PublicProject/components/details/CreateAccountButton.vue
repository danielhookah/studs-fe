<template>
  <div class="create-account-wrapper">
    <b-button @click="$router.push({ name: 'register' })" class="create-account-button">CREATE ACCOUNT</b-button>
  </div>
</template>

<script>
export default {
  name: 'CreateAccountButton',
  data () {
    return {
    }
  },
  components: {},
  created () {
  }
}
</script>

<style scoped lang="scss">
  @import "../../../../assets/scss/colors";

  .create-account-wrapper {
    width: 40%;
    left: 6%;
    z-index: 1;
    bottom: 0;
    position: fixed;
    margin-bottom: 16px;

    &.desktop {
      .create-account-button {
        width: 80%;
      }
    }

    .create-account-button {
      color: $white-color;
      font-family: Heebo, sans-serif;
      font-weight: 700;
      border: unset;
      background-color: $secondary-color;
      line-height: 15px;
      vertical-align: middle;
      text-align: center;
      height: 40px;
      border-radius: 8px;
      width: 100%;
    }
  }
</style>
