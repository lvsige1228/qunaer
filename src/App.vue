<template>
  <div id="app">
    <keep-alive exclude="Citys">
      <router-view/>
    </keep-alive>

  </div>
</template>

<script>
    export default {
        name: 'App',
        mounted() {
            this.$REM.Rem();
        }
    }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    font-size: 0.32rem;
  }
</style>
