<template>
    <div class="main">
      <form action="" class="right">
        <p>Имя: {{ text }}</p>
        <input type="text" v-model="text" placeholder="Имя">

        <p>Возраст: {{ date }}</p>
        <input type="date" v-model="date" placeholder="Возраст">

        <p>Рост: {{ number }}</p>
        <input type="number" v-model="number" placeholder="Рост">

        <p>Пол: {{ radio }}</p>
        <input type="radio" value="Мужской" v-model="radio">
        <input type="radio" value="Женский" v-model="radio">

        <p>Персонаж мастера?: {{ checkbox }}</p>
        <input type="checkbox" v-model="checkbox">

        <p>Раса: {{ select }}</p>
        <input type="select" v-model="select" placeholder="Раса">
        <!-- <input type="checkbox"> список -->

        <p>Класс: {{ selectClass }}</p>
        <input type="selectClass" v-model="selectClass">

        <!-- <input type="checkbox"> список -->
        <p>Цвет волос: {{ color }}</p>
         <input type="color" v-model="color">

         <p>Биография: {{ textarea }}</p>
         <input type="textarea" v-model="textarea" placeholder="Биография">
         
         <button name="btn" type="submit">Сихронизировать</button>
      </form>

      <form action="" class="left">
        <p>Имя: {{ text }}</p>
        <input type="text" v-model="text" placeholder="Имя">

        <p>Возраст: {{ date }}</p>
        <input type="date" v-model="date" placeholder="Возраст">

        <p>Рост: {{ number }}</p>
        <input type="number" v-model="number" placeholder="Рост">

        <p>Пол: {{ radio }}</p>
        <input type="radio" value="Мужской" v-model="radio">
        <input type="radio" value="Женский" v-model="radio">

        <p>Персонаж мастера?: {{ checkbox }}</p>
        <input type="checkbox" v-model="checkbox">

        <p>Раса: {{ select }}</p>
        <input type="select" v-model="select" placeholder="Раса">
        <!-- <input type="checkbox"> список -->

        <p>Класс: {{ selectClass }}</p>
        <input type="selectClass" v-model="selectClass">

        <!-- <input type="checkbox"> список -->
        <p>Цвет волос: {{ color }}</p>
         <input type="color" v-model="color">

         <p>Биография: {{ textarea }}</p>
         <input type="textarea" v-model="textarea" placeholder="Биография">
         
         <button name="btn" type="submit">Сихронизировать</button>
      </form>
    </div>
    
  </template>
  
  <script>
  
  
  export default {
    name: 'App',
  
    data() {
      return {
        text: '',
        number:  '',
        checkbox: false,
        radio: '1',
      }
    }
  }
  </script>

  <style>
    .main {
        display: block;
        margin-left: 70px;
        margin-right: 70px;
        max-height: 100%;
        justify-content: space-between;

        .right {
        color: rgb(165, 89, 102);
        float: left;
    }

    .left {
        float: right;
    }
}
    


</style>