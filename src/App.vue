<template>
  <div id="app">
    <div class="home-section" id="home">
      <NavBar/>
      <IntroSection/>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 270">
        <path fill="#1b1b1b" fill-opacity="1" d="M0,64L48,101.3C96,139,192,213,288,218.7C384,224,480,160,576,133.3C672,107,768,117,864,138.7C960,160,1056,192,1152,186.7C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
    </div>
    <div class="about-section">
      <AboutMe/>
    </div>
    <div class="skills-section">
      <Skills/>
    </div>
    <div class="portfolio-section">
      <Portfolio/>
    </div>
    <div class="services-section">
      <Services/>
    </div>
    <div class="footer">
        <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#232323" fill-opacity="1" d="M0,32L48,64C96,96,192,160,288,165.3C384,171,480,117,576,122.7C672,128,768,192,864,197.3C960,203,1056,149,1152,138.7C1248,128,1344,160,1392,176L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg> -->
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150"><path fill="#232323" fill-opacity="1" d="M0,128L48,128C96,128,192,128,288,106.7C384,85,480,43,576,37.3C672,32,768,64,864,85.3C960,107,1056,117,1152,112C1248,107,1344,85,1392,74.7L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
        <Contact/>
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import IntroSection from './components/IntroSection.vue'
import AboutMe from './components/AboutMe.vue'
import Skills from './components/SkillsSection.vue'
import Portfolio from './components/PortfolioSection.vue'
import Services from './components/ServicesSection.vue'
import Contact from './components/ContactSection.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    IntroSection,
    AboutMe,
    Skills,
    Portfolio,
    Services,
    Contact
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
.about-section{
  background-color: #1b1b1b;
}
.skills-section{
  background-color: #232323;
}
.portfolio-section{
  background-color: #1b1b1b;
}
.services-section{
  background-color: #232323;
}
.footer{
  background-color: #ff7f50;
}
</style>
