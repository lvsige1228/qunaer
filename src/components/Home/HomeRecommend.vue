<template>
  <div>
    <p class="hot">热销推荐</p>
    <router-link
      tag="div"
      :to="'/detail/' + item.id"
      v-for="(item,index) in recommendList" :key="index"
      class=" recommendList"
    >
      <img :src="item.imgUrl" class="recImg">
      <b> {{item.title}}</b> <br>
      <p class="desc"> {{item.desc}}</p>
    </router-link>


  </div>
</template>

<script>
    export default {
        name: "HomeRecommend",
        props: {
            recommendList: Array
        }
    }
</script>
<style lang="stylus" scoped>
  @import "../../assets/styles/varibles.styl"
  .recommendList
    width: 100%
    height: 120px

  .recImg
    width: 100px
    float: left
    margin 5px

  .desc
    ellipsis()

  .hot
    color #333
    font-size 0.4rem
    font-weight bolder
</style>

