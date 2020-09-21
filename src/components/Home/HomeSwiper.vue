<template>
   <div>
     <swiper :options="swiperOption" v-if="showSwiper">
       <swiper-slide v-for="(item,index) in swiperList" :key="index">
         <img :src="item.imgUrl" alt="">
       </swiper-slide>
       <div class="swiper-pagination"  slot="pagination"></div>
     </swiper>

   </div>
</template>

<script>

    export default {
        name: "HomeSwiper",
        props: {
            swiperList: Array,
        },
        data() {
            return {
                swiperOption:{
                    autoplay : false,
                    pagination: '.swiper-pagination',
                    loop: true,
                },
            }
        },
        computed:{
            showSwiper(){
                return this.swiperList.length
            }
        }

    }
</script>

<style lang="stylus" scoped>
  .swiper_container
    width: 100%
    height: 4rem
    background-color: #eee

  .swiper-slide img
    width: 100%
</style>
