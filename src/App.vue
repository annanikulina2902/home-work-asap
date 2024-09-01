<template>
  <div id="app" :class="{'__dark': isDark}">
      <AccordionList v-for="item in lists" v-bind:key="item.title" :item="item"/>
      <button class="DarkTheme" @click="dark">Темная тема</button>
  </div>
</template>


<script>
import AccordionList from './components/AccordionList.vue';

export default {
  name: 'App',
  components: { AccordionList },

    data() {
      return{
        isDark: false,
        lists:[
          {
            title:'Винсент Ван Гог',
            list: ['Подсолнухи', 'Звездная ночь', 'Едоки Картофеля'],
          },
          {
            title:'Клод Оскар Моне',
            list: ['Завтрак на траве', 'Отлив в Пурвилле', 'Завтрак на траве'],
          },
        ],  
      }
      
    },
    
    methods:{
      dark(){
            this.isDark = !this.isDark;
        },
    }
    


  }

</script>

<style>
#app {
  text-align: center;
  margin-top: 60px;
  position: relative;
	width: 100%;
  cursor: pointer;
}
  .container {
      background-color: #ffffff;
      color: #A60000;
    

  }
  .isDark {
    background-color: #000000;
    color: #ffffff;
  }
  .isDark .DarkTheme{
      background-color: #000000;
      color: #ffffff;
    }

</style>
