<template>
  <div id="app">
    <div class="home-section">
      <NavBar/>
      <IntroSection/>
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import IntroSection from './components/IntroSection.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    IntroSection
}
}
</script>

<style scoped>
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.home-section{
  background-image: url('./assets/Rectangle 1.jpg');
  background-repeat: no-repeat;
  background-size: cover;
	background-repeat: no-repeat;
  height: 100%;
}
</style>
