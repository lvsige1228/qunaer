<template>
    <div>
<!--      公共动画组件-->
      <transition>
        <slot></slot>
      </transition>
    </div>
</template>

<script>
    export default {
        name: "FadeAnimation"
    }
</script>

<style lang="stylus" scoped>
  .v-enter, .v-leave-to
    opacity 0
  .v-enter-active, .v-leave-active
    transition:opacity 2s
</style>
