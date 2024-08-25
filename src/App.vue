<template>
  <div id="app">
    <AccordionList :lists="lists"/>
  </div>
</template>


<script>
import AccordionList from './components/AccordionList.vue';

export default {
  name: 'App',
  components: { AccordionList },

    data() {
      return{
        lists:[
          {
            title:'Book',
            list: ['book 1', 'book 2', 'book 3'],
          },
          {
            title:'Films',
            list: ['film 1', 'film 2', 'film 3'],
          },
        ],
      }
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
