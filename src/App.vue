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
import TheHeader from "./components/TheHeader.vue";
import MainSection from "./components/MainSection.vue";
import TheSkills from "./components/TheSkills.vue";
import ThePosts from "./components/ThePosts.vue";
import TheFooter from "./components/TheFooter.vue";

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

<style lang="scss">
  @import "./assets/style/style.scss";
</style>
