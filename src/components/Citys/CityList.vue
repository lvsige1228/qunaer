<template>
  <div ref="wrapper">
    热门搜索
    <div class="hotCities">
      <div v-for="(item,index) in hotCities" :key="index" @click="handleCityClick(item.name)">
        {{item.name}}
      </div>
    </div>
    <!--       <div> -->
    <div v-for="(item,index) in cities" :key="index" ref="dd">
      {{index}}
      <div v-for="(v) in item" :key="v.id" @click="handleCityClick(v.name)">
        {{v.name}}
      </div>
      <!--      </div>-->
    </div>
  </div>
</template>

<script>
    // import Bscroll from 'better-scroll'
    import {mapState, mapMutations} from "vuex"

    export default {
        name: "CityList",
        props: {
            cities: Object,
            letter: Number,
            hotCities: Array
        },
        /* mounted() {
             this.scroll = new Bscroll(this.$refs.wrapper)
         },*/
        watch: {
            letter() {
                if (this.letter) {
                    // console.log(this.letter);
                    // const element = this.$refs[this.letter][0];
                    const element = this.$refs.dd[this.letter];
                    // console.log(element);
                    element.scrollIntoView();
                    // this.scroll.scrollToElement(element);
                }
            }
        },
        methods: {
            ...mapMutations(['CHANGE_STATE']),
            handleCityClick(v) {
                this.CHANGE_STATE(v);
                this.$router.push("/")
            },
        }
    }
</script>

<style lang="stylus" scoped>
  .hotCities
    width: 100%
    display flex
    justify-content space-around
    padding 15px
    box-sizing border-box

    div
      text-align center
      width: 20%
      border: 1px solid #eee
</style>
