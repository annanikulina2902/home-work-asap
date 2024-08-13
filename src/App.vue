<template>
  <div id="app">
    <TheHeader></TheHeader>
    <MainSection></MainSection>
    <TheSkills></TheSkills>
    <ThePosts></ThePosts>
    <TheFooter></TheFooter>
  </div>
</template>

<script>
import TheHeader from "./components/Header/TheHeader.vue";
import MainSection from "./components/MainSection/MainSection.vue";
import TheSkills from "./components/TheSkills/TheSkills.vue";
import ThePosts from "./components/ThePosts/ThePosts.vue";
import TheFooter from "./components/TheFooter/TheFooter.vue";

export default {
  name: 'App',
  components: {
    TheHeader,
    MainSection,
    TheSkills,
    ThePosts,
    TheFooter
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
