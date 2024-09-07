<template>
  <div id="app">
    <Character />
  </div>
</template>

<script>
import Character from './components/character.vue';

export default {
  name: 'App',
  components: {
    Character,
  }
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
