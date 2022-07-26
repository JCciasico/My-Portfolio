<template>
    <section>
        <div class="container custom-about-des">
            <div class="container-fluid text-center">
                <h1 class="text-1">About</h1>
                <h1 class="text-2">About Me</h1>
            </div>
            <div class="row" id="about">
                <div class="col-lg-6 col-md-12 d-flex justify-content-center align-items-center about-box" data-aos="fade-right">
                    <div class="box-1"><img src="../assets/carlo.png" class="img-fluid" alt=""></div>
                </div>
                <div class="col-lg-6 col-md-12 des-box" data-aos="fade-left">
                    <h6>My name is <span id="h6">John Carlo G. Ciasico</span>
                    </h6>
                    <p class="des-text">I'm a Web Developer. I am very passionate
                        and dedicated to my work.
                        I have acquired the skills and knowledge necessary to make your project a success.
                        I enjoy every step of developing and designing process from discussion and collaboration
                        to concept and execution, but what I discovered to be the most enjoyable is witnessing the end
                        result fulfill all of your needs.
                    </p>
                    <div class="row text-center">
                        <div class="col-lg-6 col-md-12 mt-3">
                            <span style="color:#ff7f50;">Name<br></span>
                            <span>John Carlo G. Ciasico</span>
                        </div>
                        <div class="col-lg-6 col-md-12 mt-3">
                            <span style="color:#ff7f50;">Phone<br></span>
                            <span>(+63)9989077822</span>
                        </div>
                    </div>
                    <div class="row text-center">
                        <div class="col-lg-6 col-md-12 mt-3">
                            <span style="color:#ff7f50;">Country<br></span>
                            <span>Philippines</span>
                        </div>
                        <div class="col-lg-6 col-md-12 mt-3">
                            <span style="color:#ff7f50;">Email<br></span>
                            <span>carlociasico01@gmail.com</span>
                        </div>
                    </div>
                    <div class="row text-center mt-5">
                        <span style="color:#ff7f50;">Education</span>
                        <span style="font-size:1.1rem">BS in Computer Science</span>
                        <span style="font-size:1.1rem">Emilio Aguinaldo College - Cavite</span>
                    </div>
    
                    <div class="icon-box">
                        <ul class="wrapper">
                            <li class="icon facebook">
                                <span class="tooltip">Facebook</span>
                                <a href="https://www.facebook.com/johncarlociasico" target="_blank"><i class="fab fa-facebook-f" style="color:black"></i></a>
                            </li>
                           
                            <li class="icon github">
                                <span class="tooltip">Github</span>
                                <a href="https://github.com/JCciasico" target="_blank"><i class="fab fa-github" style="color:black"></i></a>
                            </li>
                            <li class="icon linkedin">
                                <span class="tooltip">Linkedin</span>
                                <a href="https://www.linkedin.com/in/john-carlo-ciasico-86a7b0238/" target="_blank"><i class="fab fa-linkedin" style="color:black"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

.custom-about-des{
    padding: 2rem;
}
.text-1{
    font-size: 6.5rem;
    font-weight: bolder; 
    color: #242424; 
}
.text-2{
    color: #ff7f50;
    margin-top: -90px;
    font-weight: bold;
    margin-bottom: 75px;
    font-size: 3rem;
}
.box-1 {
    border: 1px solid #ff7f50;
    box-shadow: rgba(255,127,80, 0.4) 5px 5px, rgba(255,127,80, 0.3) 10px 10px, rgba(255,127,80, 0.2) 15px 15px, rgba(255,127,80, 0.1) 20px 20px, rgba(255,127,80, 0.05) 25px 25px;
}
.about-box{
    padding: 2.5rem;
}
.des-box{
    padding: 2rem;
    color: white;
}
h6{
    font-size: 1.3rem;
    margin-bottom: 15px;
}
#h6{
    color: #ff7f50;
}
.des-text{
    font-size: 1rem;
}
.icon-box{
    margin-top: 60px;
    text-align: center;
    padding-right: 25px;
}
.icon{
    font-size: 2em;
    color: white;
}
.icon:hover{
    color: #ff7f50;
}

/*  */
.wrapper {
  display: inline-flex;
  list-style: none;
}

.wrapper .icon {
  position: relative;
  background: #ffffff;
  border-radius: 50%;
  margin: 10px;
  width: 50px;
  height: 50px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.wrapper .tooltip {
  position: absolute;
  top: 0;
  font-size: 14px;
  background: #ffffff;
  color: #ffffff;
  padding: 5px 8px;
  border-radius: 5px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.wrapper .tooltip::before {
  position: absolute;
  content: "";
  height: 8px;
  width: 8px;
  background: #ffffff;
  bottom: -3px;
  left: 50%;
  transform: translate(-50%) rotate(45deg);
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.wrapper .icon:hover .tooltip {
  top: -45px;
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.wrapper .icon:hover span,
.wrapper .icon:hover .tooltip {
  text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);
}

.wrapper .facebook:hover,
.wrapper .facebook:hover .tooltip,
.wrapper .facebook:hover .tooltip::before {
  background: #1877F2;
  color: #ffffff;
}

.wrapper .twitter:hover,
.wrapper .twitter:hover .tooltip,
.wrapper .twitter:hover .tooltip::before {
  background: #1DA1F2;
  color: #ffffff;
}

.wrapper .instagram:hover,
.wrapper .instagram:hover .tooltip,
.wrapper .instagram:hover .tooltip::before {
  background: #E4405F;
  color: #ffffff;
}

.wrapper .github:hover,
.wrapper .github:hover .tooltip,
.wrapper .github:hover .tooltip::before {
  background: #333333;
  color: #ffffff;
}

.wrapper .linkedin:hover,
.wrapper .linkedin:hover .tooltip,
.wrapper .linkedin:hover .tooltip::before {
  background: #1877F2;
  color: #ffffff;
}


@media(max-width:900px){
    .text-1{
        font-size: 4.5rem;
    }
    .text-2{
        font-size: 2rem;
        margin-top: -65px;

    }
}
@media(max-width:500px){
    .text-1{
        font-size: 4rem;
    }
    .text-2{
        font-size: 2rem;
        margin-top: -60px;

    }
}
</style>