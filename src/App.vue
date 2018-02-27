<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
import flexible from './common/flexible'
export default {
  name: 'App',
  created() {
    flexible();
  }
}
</script>

<style lang="stylus">
@import './common/global.styl'
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
