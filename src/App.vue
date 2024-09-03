<template>
  <div :class="{'dark': isDark}" class="app" >
    
      <AccordionList v-for="item in lists" v-bind:key="item.title" :item="item"/>
      <button class="btnTheme"  @click="darkTheme">Темная тема</button>
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
            list: ['Завтрак на траве', 'Отлив в Пурвилле', 'Завтрак на травеx'],
          },
          
        ],
      }
    },
    
    methods:{
      darkTheme(){
            this.isDark = !this.isDark;
        }
    }

  }

</script>



<style>
.app {
  text-align: center;
  margin-top: 60px;
  position: relative;
	width: 100%;
  cursor: pointer;
  list-style: none; 
  width: 100%;
  max-height: 400px;
  color: #000000;
}
  .dark {
    background-color: #000000;
    color: #cb00bd;
  }

    .btnTheme {
      background-color: #036b9f;
      color: #ffffff;
    }
    .dark .btnTheme {
      background-color: #001e98;
      color: rgb(255, 255, 255);
    }
    .list {
      color: #037fb5;
      list-style-type: none;
    }
    .dark .list {
      color: #ed71c6;
    }
</style>