<template>
  <div :key="$route.name" id="doings-project">
    <div class="change-list-wrapper" :class="{'opened': menuOpened}"
         v-if="menuAvailableRoutes.includes($route.name)">
      <div class="change-list">
        <p @click="pushToChildRoute('user.doings.project.list')"
           v-if="$route.name === 'user.doings.lesson.list'">projects</p>
        <p @click="pushToChildRoute('user.doings.lesson.list')"
           v-if="$route.name === 'user.doings.project.list'">lessons</p>
      </div>
      <div class="change-list-icon" :class="{'opened': menuOpened}" @click="toggleMenu">
        <b-icon scale="1.6" icon="chevron-compact-down"/>
      </div>
    </div>
    <router-view style="margin-top: 1rem"/>
  </div>
</template>

<script>

import EventBus from '@/common/event-bus'

export default {
  name: 'Doings',
  data () {
    return {
      menuOpened: false,
      menuAvailableRoutes: ['user.doings.lesson.list', 'user.doings.project.list']
    }
  },
  methods: {
    toggleMenu () {
      this.menuOpened = !this.menuOpened
    },
    pushToChildRoute (routeName) {
      this.toggleMenu()
      setTimeout(() => {
        this.$router.push({ name: routeName })
      }, 250)
    }
  },
  created () {
    EventBus.$emit('CHANGE_ACTION_NAME', 'list')
  }
}
</script>

<style scoped lang="scss">
  .change-list-wrapper {
    margin: -50px auto 0;
    width: 30%;
    z-index: 2;

    @include transition(all 250ms linear);

    &.opened {
      margin-top: 0;
    }

    .change-list {
      width: 100%;
      margin: 0 auto;
      background-color: $secondary-color;
      color: $white-color;

      hr {
        border: 1px solid $white-color;
        width: 80%;
        margin: 3px auto;
      }

      p {
        @extend %ubuntu-medium;
        margin: 0;
        padding: 20% 0;
      }
    }

    .change-list-icon {
      cursor: pointer;
      width: 100%;
      margin: 0 auto;
      height: 20px;
      border-bottom-left-radius: 100%;
      border-bottom-right-radius: 100%;
      background-color: $secondary-color;
      color: $white-color;

      svg {
        @include transition(all 250ms linear);
      }

      &.opened {
        svg {
          transform: rotateX(180deg);
        }
      }
    }
  }
</style>
