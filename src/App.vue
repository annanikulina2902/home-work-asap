<template>
  <div id="app">
    
    <PostLists />
  </div>
</template>

<script>

import PostLists from './components/PostLists.vue';


export default {
  name: 'App',
  components: {
    PostLists
  }, 



  }




</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
