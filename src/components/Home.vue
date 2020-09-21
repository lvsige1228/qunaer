<template>
  <div>
    <HomeHeader></HomeHeader>
    <HomeSwiper :swiperList="swiperList"></HomeSwiper>
    <HomeIcon :iconList="iconList"></HomeIcon>

<!--    <transition class="animated slideOutUp">-->
      <HomeRecommend :recommendList="recommendList"></HomeRecommend>
<!--    </transition>-->

    <HomeWeek :weekendList="weekendList"></HomeWeek>
  </div>
</template>

<script>
    import axios from 'axios'
    import HomeHeader from "./Home/HomeHeader";
    import HomeSwiper from "./Home/HomeSwiper";
    import HomeIcon from "./Home/HomeIcon";
    import HomeRecommend from "./Home/HomeRecommend";
    import HomeWeek from "./Home/HomeWeek";
    import FadeAnimation from "../common/fade/FadeAnimation";

    export default {
        name: "Home",
        components: {
            HomeHeader,
            HomeSwiper,
            HomeIcon,
            HomeRecommend,
            HomeWeek,
            FadeAnimation
        },
        data() {
            return {
                swiperList: [], //轮播
                recommendList: [],
                iconList: [],
                weekendList: []
            }
        },
        mounted() {
            axios.get('/static/index.json').then(res => {
                console.log(res.data.data);
                this.swiperList = res.data.data.swiperList;
                this.recommendList = res.data.data.recommendList;
                this.iconList = res.data.data.iconList;
                this.weekendList = res.data.data.weekendList
            })
        }
    }
</script>

<style lang="stylus" scoped>

</style>
