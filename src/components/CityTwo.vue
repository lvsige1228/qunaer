<template>
  <div>
    <div class="A">
      <div v-for="(item,index) in indexA" :key="index" @click="change(item,index)">
        {{item}}
      </div>
    </div>

    <div class="content" ref="right">
      <div v-for="(item,index) in list" :key="index" class="content_item" ref="block">
        <div>{{index}}</div>
        <div v-for="(v,i) in item" :key="i" class="content_item_bup">
          {{v.name}}
        </div>
      </div>
    </div>

  </div>
</template>

<script>
    import axios from 'axios'
    import Bscroll from 'better-scroll'
    export default {
        name: "CityTwo",
        data() {
            return {
                list: [],
                indexA: []
            }
        },
        mounted() {
            axios.get('./static/city.json').then(res => {
                this.list = res.data.data.cities;
                this.indexA = Object.keys(this.list);
                console.log(this.indexA)
            })
        },
        methods: {
            change(item, index) {
                let divElement = this.$refs.block[index];
                console.log(divElement);
                divElement.scrollIntoView()
            }
        }
    }
</script>

<style scoped>
  .content_item {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
  }

  .content_item div {
    width: 20%;
    margin: 5px;
    text-align: center;
    background-color: #eee;
  }

  .A {
    width: 100%;
    height: 200px;
    border-bottom: 1px solid #ddd;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
  }

  .A div {
    width: 17%;
    margin: 5px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #eee;
  }
</style>
