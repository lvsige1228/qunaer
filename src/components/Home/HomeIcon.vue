<template>
  <div class="icons">
    <swiper >
      <swiper-slide v-for="(page,index) in pages" :key="index">
        <div class="icon" v-for="item in page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
    export default {
        name: "HomeIcon",
        props:{
            iconList:Array
        },
        computed:{
            pages () {
                const pages = [];
                this.iconList.forEach((item, index) => {
                    //page当前下标的数据应该展示在轮播图的第几页   index是3 下标是2  Math.floor(2/8)向下取整为0  Math.floor(8/8)向下取整为1
                    const page = Math.floor(index / 8);
                    if (!pages[page]) {
                        pages[page] = []
                    }
                    pages[page].push(item)
                });
                return pages
            }
        }

    }
</script>
<style lang="stylus" scoped>
  .icons >>> .swiper-container
    height : 0
    padding-bottom: 50%
  .icon
    position: relative
    overflow: hidden
    float: left
    width: 25%
    height: 0
    padding-bottom: 25%
    .icon-img
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom: .44rem
      box-sizing: border-box
      padding: .05rem
      .icon-img-content
        display: block
        margin: 0 auto
        height: 50%
    .icon-desc
      position: absolute
      left: 0
      right: 0
      bottom: 31px
      height: .44rem
      line-height: .44rem
      text-align: center
      color:#333

</style>
