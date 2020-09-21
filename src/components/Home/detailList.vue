<template>
  <div>
    <div v-for="(item,index) in list" :key="index">
      {{item.title}}
      <div v-if="item.children"> <!--  中止条件-->
<!--        组件内 调用自身-->
        <detailList :list="item.children"></detailList>
      </div>
  </div>

  </div>
</template>

<script>
    export default {
        name: "detailList",
        props: {
            list: Array
        },
        data() {
            return {}
        },
    }
</script>

<style lang="stylus" scoped>

</style>
