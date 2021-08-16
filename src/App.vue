<template>
  <div id="app">
    <TheHeader/>
    <Home/>
    <TheFooter/>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'
import Home from '@/views/Home.vue'
import TheFooter from '@/components/TheFooter.vue'

export default{
  name: 'App',
  data(){
    return{

    }
  },
  components:{
    TheHeader,
    Home,
    TheFooter
  }
}
</script>


<style lang="scss">
@import './_main.scss';

body, ul, h1, h2, p{
  margin: 0;
  padding: 0;
  @include scroll-bar(5px, $text-bg1, $text-bg4);
}

ul{
  list-style: none;
}

*{
  box-sizing: border-box;
}
</style>
