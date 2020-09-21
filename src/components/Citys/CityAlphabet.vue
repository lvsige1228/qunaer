<template>
  <div class="alphabet">
    <div v-for="(item,index) in city" :key="index" 	@click = "changeLetter(index)">
      {{item}}
    </div>
  </div>
</template>

<script>
    export default {
        name: "CityAlphabet",
        props: {
            cities: Object
        },
        data() {
            return {}
        },
        computed: {
            city() {
                return Object.keys(this.cities)
            }
        },
        methods:{
            changeLetter(index){
                this.$emit("changeLetter",index)//发送
            }
        }
    }
</script>

<style scoped>

</style>
