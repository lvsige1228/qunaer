<template>
  <div>
    <CityHeader :cities="cities" ></CityHeader>
    <CityAlphabet :cities="cities" @changeLetter="changeLetter"></CityAlphabet>
    <CityList :cities="cities" :hotCities="hotCities" :letter="letter"></CityList>
  </div>
</template>

<script>
    import axios from 'axios'
    import CityHeader from "./Citys/CityHeader";
    import CityAlphabet from "./Citys/CityAlphabet";
    import CityList from "./Citys/CityList";

    export default {
        name: "Citys",
        components: {
            CityHeader,
            CityAlphabet,
            CityList
        },
        data() {
            return {
                list: [],
                cities: {},
                hotCities: [],
                letter:0,
            }
        },
        mounted() {
            axios.get('../static/city.json').then(res => {
                this.hotCities = res.data.data.hotCities;
                this.cities = res.data.data.cities;
                // console.log(this.cities)
            })
        },
        methods: {
            //从子组件 获取到的值
            changeLetter(val) {
                this.letter = val;
                // console.log(this.letter)
            }
        }
    }
</script>

<style lang="stylus" scoped>
  .alphabet
    position: fixed;
    right: 1px
    top: 20%

</style>
