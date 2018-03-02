<template>
    <div class="page-home">
        <div>
            home
        </div>
        <ul>
            <li>
                <router-link to="/page1">to page1</router-link>
            </li>
            <li>
                <router-link to="/page2">to page2</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {

    }
  }
}
</script>

<style scoped lang="stylus">
    @import './home.styl'
</style>

