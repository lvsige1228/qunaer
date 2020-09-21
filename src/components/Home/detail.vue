<template>
  <div class="animated rotateIn">

    <div class="img" @click="show = true">
      <img :src="list.bannerImg" width="100%">
      <span class="sightName">{{list.sightName}}</span>
    </div>
    <FadeAnimation>
      <Gallary :img="list.gallaryImgs" v-show="show" @FF="close()"></Gallary>
    </FadeAnimation>

    <detailHeader></detailHeader>

    <div class="content">
      <detailList :list="list.categoryList"></detailList>
    </div>

  </div>
</template>

<script>
    import axios from 'axios'
    import Gallary from "../../common/gallary/Gallary";
    import detailHeader from "./detailHeader";
    import detailList from "./detailList";
    // 转场动画组件
    import FadeAnimation from "../../common/fade/FadeAnimation";

    export default {
        name: "detail",
        components: {
            Gallary, detailHeader, detailList, FadeAnimation
        },
        data() {
            return {
                list: [],
                show: false,
            }
        },
        mounted() {
            axios.get('../static/detail.json').then(res => {
                this.list = res.data.data;
                console.log(this.list.categoryList)
            })
        },
        methods: {
            close() {
                this.show = false
            }
        }
    }
</script>

<style lang="stylus" scoped>
  .content
    width: 100%
    height: 15rem

  .gallary_container
    width: 100%
    height: 100vh
    position: relative;
    top: 0
    left: 0
    z-index 99

  .img
    width: 100%

    .sightName
      position: absolute;
      top: 180px
      left: 5px
      color #eeeeee
</style>
