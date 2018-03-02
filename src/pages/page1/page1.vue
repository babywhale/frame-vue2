<template>
    <div>
        <div>
            page1
        </div>
        <router-link to="/">back</router-link>
        <HelloWorld></HelloWorld>
    </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld'
export default {
  name: 'Page1',
  data () {
    return {
      msg: 'Page-1'
    }
  },
  components: {
    HelloWorld: HelloWorld
  }
}
</script>

