<template>
  <div>
    <!--      头部-->
    <van-search
      v-model="value"
      shape="round"
      show-action
      background="#4fc08d"
      placeholder="请输入搜索关键词"
    >
      <template #action>
        <router-link to="/City">
          <van-icon name="location-o"/>
          {{name}}
        </router-link>
      </template>
    </van-search>


    <!--     轮播图-->
    <swiper>
      <!-- slides -->
      <swiper-slide v-for="(item,index) in swiperList" :key="index">
        <img :src="item.imgUrl" alt="">
      </swiper-slide>

      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>


    <!--     做遍历循环输出-->
    <div class="icons">
      <swiper>
        <swiper>
          <swiper-slide v-for="(page,index) in iconList" :key="index">
            <div>
              <img class="icon-img-content" :src="page.imgUrl">
              <p class="icon-desc">{{page.desc}}</p>
            </div>
          </swiper-slide>
        </swiper>
      </swiper>
    </div>

    <!--      热销推荐-->
    <p class="hot-recommend">热销推荐</p>
    <div v-for="(item,index) in recommendList" :key="index" class="recommend border-bottom">
      <img :src="item.imgUrl" class="imgUrl">
      <p class="title"> {{item.title}}</p>
      <p class="desc">{{item.desc}}</p>
      <span class="detail">查看详情</span>
    </div>
  </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'HelloWorld',
        data() {
            return {
                value: '',
                recommendList: [],
                iconList: [],
                swiperList: [],
                name: ''
            }

        },
        mounted() {
            this.name = this.$route.query.name;
            this.$REM.Rem();
            axios.get('./static/index.json').then(res => {
                console.log(res.data.data);
                this.iconList = res.data.data.iconList;
                this.recommendList = res.data.data.recommendList;
                this.swiperList = res.data.data.swiperList;
            })
        },
        computed: {
            pages() {
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
  @import "../assets/styles/varibles.styl"

  .swiper-wrapper
    width: 100%
    display flex
    justify-content flex-start


  .hot-recommend
    margin-left 10px
    font-size 20px
    font-weight bold
    margin 10px 0

  .recommend
    width: 100%
    height: 100px
    margin-bottom 10px

    .desc
      ellipsis()

    .imgUrl
      width: 100px
      float: left

    .detail
      width: 90px
      text-align center
      display inline-block
      background-color: goldenrod
      color #ffffff


  .swiper-container
    overflow: hidden
    width: 100%
    height: 2.67vw
    padding-bottom: 26.67%

    img
      width: 100%

    .wrapper >>> .swiper-pagination-bullet-active
      background: #fff


  .icons >>> .swiper-container
    height: 0
    padding-bottom: 50%

  .icon
    position: relative
    overflow: hidden
    float: left
    width: 25%
    height: 0
    padding-bottom: 25%
    // background : red

    .icon-img
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom: .44rem
      // background :blue
      box-sizing: border-box
      padding: .05rem

      .icon-img-content
        width: 72%
        display: block
        margin: 0 auto
        height: 90%

    .icon-desc
      position: absolute
      left: 0
      right: 0
      bottom: 0
      height: .44rem
      line-height: .44rem
      text-align: center
      color: #333
      ellipsis()

</style>
