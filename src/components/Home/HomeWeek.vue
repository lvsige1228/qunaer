<template>
  <div>
    <p class="hot">周末去哪儿</p>
    <div v-for="(item,index) in weekendList" :key="index" class="weekendList">
      <img :src="item.imgUrl" alt="">
      <p class="title">{{item.title}}</p>
      <p class="desc"> {{item.desc}}</p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "HomeWeek",
        props: {
            weekendList: Array

        }
    }
</script>

<style lang="stylus" scoped>
  .hot
    color #333
    font-size 0.4rem
    font-weight bolder

  .weekendList
    width: 100%
    height: 207px

    img
      width: 100%

  .desc
    ellipsis()

  .title
    color #666

</style>
