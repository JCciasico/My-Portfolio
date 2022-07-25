<template>
  <div id="app">
    <div class="home-section">
      <NavBar/>
      <IntroSection/>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250">
        <path fill="#1b1b1b" fill-opacity="1" d="M0,64L48,101.3C96,139,192,213,288,218.7C384,224,480,160,576,133.3C672,107,768,117,864,138.7C960,160,1056,192,1152,186.7C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
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
}
</style>
