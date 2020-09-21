<template>
  <div>
<!--    左边透明 返回  箭头-->
    <router-link to="/" tag="div" class="borderRadius" v-show="showAbs">
      <van-icon name="arrow-left"/>
    </router-link>
<!--      渐变出现的头部-->
    <div class="hidden" v-show="!showAbs" :style="opacityStyle">
      <router-link to="/" tag="div">
        <van-icon name="arrow-left"/>
      </router-link>
      <span>景点详情</span>
      <span></span>
    </div>


    <div class="temp"></div>
  </div>
</template>

<script>
    export default {
        name: "detailHeader",
        data() {
            return {
                showAbs: true,
                opacityStyle: {  //透明度 先为0
                    opacity: 0
                }
            }
        },
        methods: {
            // 渐变效果
            handleScroll() {
                /* documentElement PC端  document.body.scrollTop
                 body  移动端  document.documentElement.scrollTop*/
                let oTop = document.body.scrollTop || document.documentElement.scrollTop;

                if (oTop > 60) {
                    let opacity = oTop / 140;
                    opacity = opacity > 1 ? 1 : opacity;
                    this.opacityStyle = {opacity};

                    this.showAbs = false;
                } else {
                    this.showAbs = true;
                }
            }
        },
        activated() {   //被 keep-alive 缓存的组件激活时调用。
            //原生JS 绑定事件的方法  兼容
            window.addEventListener('scroll', this.handleScroll);
            // window.attachEvent('scroll',this.handleScroll)
        },
        deactivated() {  // 被 keep-alive 缓存的组件停用时调用。
            //原生JS  解绑事件的方法
            window.removeEventListener('scroll', this.handleScroll)
        }

    }
</script>

<style lang="stylus" scoped>
  .temp
    width: 100%

  .borderRadius
    width: 30px
    height: 30px
    border-radius 50%
    text-align center
    line-height: 35px
    background-color: rgba(0, 0, 0, 0.5)
    color white
    position: fixed;
    top: 0
    left: 0

  .hidden
    width: 100%
    height: 40px
    line-height 40px
    background-color: #17A4BD
    position: fixed;
    top: 0
    left: 0
    z-index 5
    display flex
    justify-content space-between
    color white
    padding 0 20px
    box-sizing border-box

    .borderRadiusTwo
      width: 20px
      height: 20px
      border-radius 50%
      text-align center
      line-height: 25px
      background-color: rgba(0, 0, 0, 0.5)
      color white

</style>
