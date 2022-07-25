<template>
  <div id="app">
    <div class="home-section">
      <NavBar/>
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar,
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
  background-image: url('./assets/bg.jpg');
  background-repeat: no-repeat;
  background-size: cover;
	background-repeat: no-repeat;
  height: 100vh;
}
</style>
