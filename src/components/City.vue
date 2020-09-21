<template>
  <div class="big">
    <div class="big_top">
      <van-nav-bar
        title="城市选择"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"

      />
      <van-search v-model="value" placeholder="请输入搜索关键词" @input="changeSearch"/>

    </div>


    <div class="recommend-hot" v-if="show">
      热门城市
      <!--    {{hotCities}}-->
      <div class="hotCities">
        <div v-for="(item,index) in hotCities" :key="index" @click="sure(item)">
          {{item.name}}
        </div>

      </div>

      <!--    蓝色固定-->
      <div class="blue">
        <div v-for="(item,index) in indexA" :key="index" @click="change(item,index)">
          {{item}}
        </div>
      </div>
      <!--    左边 滚动-->

        <div class="spread" ref="right" >
          <div v-for="(item,index) in list" :key="index" ref="block">
            {{index}}
            <div v-for="(v,i) in item" :key="i" @click="sure(v)">
              {{v.name}}
            </div>
          </div>

      </div>
    </div>

    <!--    搜索 结果-->
    <div class="search_result" v-if="!show">
      <van-cell-group v-for="(item,index) in searchResult" :key="index" @click="sure(item)">
        <van-cell :title="item"/>
      </van-cell-group>
    </div>


  </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "City",
        data() {
            return {
                list: [],   // 渲染的对象
                indexA: [],   //A-Z 的下标
                hotCities: [], //热门城市
                value: '', // 输入框的值
                show: true,//
                searchResult: [],
            }
        },
        mounted() {
            axios.get('./static/city.json').then(res => {
                this.list = res.data.data.cities;
                // 下标 保存的数组
                this.indexA = Object.keys(this.list);
                this.hotCities = res.data.data.hotCities
            });
            this.$REM.Rem();
        },
        methods: {
            change(item, index) {
                let divElement = this.$refs.block[index];
                divElement.scrollIntoView({behavior: "smooth"});

            },

            changeSearch() {
                // 清空数组
                this.searchResult = [];
                if (this.value.length !== 0) {
                    this.show = false;
                    for (let i in this.list) {
                        for (let j in this.list[i]) {
                            if (this.list[i][j].name.includes(this.value)) {
                                this.searchResult.push(this.list[i][j].name);
                                this.$refs.right.removeEventListener("scroll", this.onScroll, false)
                            }
                        }
                    }
                } else {
                    this.show = true
                }

            },
            sure(v) {

                if (typeof (v) === 'object') {
                    this.$router.push({
                        path: '/',
                        query: {
                            name: v.name
                        }
                    })
                } else {
                    this.$router.push({
                        path: '/',
                        query: {
                            name: v
                        }
                    })
                }
            },
            onClickLeft() {
                window.history.back()
            }
        }
    }
</script>


<style scoped>
  .right_wrapper{
    width: 100%;
    height: 60vh;
    /*background-color: red;*/
    overflow: scroll;
  }
  * {
    font-size: 0.4rem;
  }

  .big_top {
    background-color: gray;
  }

  .big {
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
  }

  .hotCities {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 10px;
    flex-wrap: wrap;
    box-sizing: border-box;
  }

  .hotCities div {
    width: 21%;
    background-color: #eee;
    margin: 5px 5px;
    text-align: center;
    color: #25a4bb;
  }

  .blue {
    position: fixed;
    top: 20%;
    right: 0;
    color: blue;
  }

  .spread div div {
    width: 100%;
    height: 37px;
    line-height: 37px;
    margin-left: 20px;
    border-bottom: 1px solid #eee;
  }
</style>
