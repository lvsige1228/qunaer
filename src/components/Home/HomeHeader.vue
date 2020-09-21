<template>
  <div>
    <van-search
      v-model="value"
      shape="round"
      show-action
      background="#4fc08d"
      placeholder="请输入搜索关键词"
    >
      <template #action>
        <router-link to="/Citys">
          <van-icon name="location-o"/>
          {{city}}
        </router-link>
      </template>
    </van-search>
  </div>
</template>

<script>

  import {mapState, mapMutations} from "vuex"
    export default {
        name: "HomeHeader",
        data() {
            return {
                value: ''
            }
        },
        computed: {
            ...mapState(['city']),
            // ...mapGetters(['doubleCity'])
        }
    }
</script>

<style scoped>

</style>
