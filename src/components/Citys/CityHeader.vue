<template>
  <div>
    <div class="header-top">
      <div class="header">
        <router-link to="/">
          <van-icon name="arrow-left"/>
        </router-link>
        城市选择
      </div>
      <div class="search">
        <van-search
          v-model="keyword"
          class="search-input"
          type="text"
          placeholder="输入城市名或拼音"
        />
      </div>
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li class="search-item border-bottom" v-for="item of list" :key="item.id" @click="handleCityClick(item.name)">
          {{item.name}}
        </li>
        <li class="search-item border-bottom" v-show="hasNoData">
          没有找到匹配数据
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
    import {mapState, mapMutations} from "vuex"

    export default {
        name: "CityHeader",
        props: {
            cities: Object
        },
        data() {
            return {
                keyword: '',
                list: [],
            }
        },
        methods: {
            ...mapMutations(['CHANGE_STATE']),
            handleCityClick(v) {
                // console.log(v);
                this.CHANGE_STATE(v);
                this.$router.push("/")
                // console.log(this.CHANGE_STATE)
            }
        },
        watch: {
            keyword() {
                if (!this.keyword) {
                    this.list = [];
                    return
                }
                if (this.timer) {
                    clearTimeout(this.timer)
                }

                this.timer = setTimeout(() => {
                    for (let i in this.cities) {
                        this.cities[i].forEach((value) => {
                            //如果我们能从name  spell当中搜索到 我们就把它添加到result当中
                            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
                                this.list.push(value)
                            }
                        })
                    }
                }, 100)
            }
        },
        computed: {
            hasNoData() {
                return !this.list.length
            }
        },
    }
</script>

<style lang="stylus" scoped>
  .header
    width: 100%
    display flex
    justify-content space-between
    padding 5px 20px
    box-sizing border-box
</style>
