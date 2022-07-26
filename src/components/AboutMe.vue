<template>
<section>
  <div class="container custom-about-des">
    <div class="container-fluid text-center">
        <h1 class="text-1">About</h1>
        <h1 class="text-2">About Me</h1>
    </div>
    <div class="row">
        <div class="col-lg-6 col-md-12 d-flex justify-content-center align-items-center about-box" v-scroll-reveal.reset="{ delay: 300 }">
               <div class="box-1"><img src="../assets/carlo.png" class="img-fluid" alt=""></div>
        </div>
        <div class="col-lg-6 col-md-12 des-box" v-scroll-reveal.reset="{ delay: 400 }">
            <h6>My name is <span id="h6">John Carlo G. Ciasico</span></h6>
            <p class="des-text">I'm a Web Developer and Designer. I am very passionate and dedicated to my work.
                I have acquired the skills and knowledge necessary to make your project a success.
                I enjoy every step of developing and designing process from discussion and collaboration
                to concept and execution, but what I discovered to be the most enjoyable is witnessing the end 
                result fulfill all of your needs. 
            </p>
            <div class="row text-center" v-scroll-reveal.reset="{ delay: 425 }">
                <div class="col-lg-6 col-md-12 mt-3">
                    <span style="color:#ff7f50;">Name<br></span>
                    <span>John Carlo G. Ciasico</span>
                </div>
                <div class="col-lg-6 col-md-12 mt-3" v-scroll-reveal.reset="{ delay: 450 }">
                    <span style="color:#ff7f50;">Phone<br></span>
                    <span>(+63)9989077822</span>
                </div>
            </div>
            <div class="row text-center" v-scroll-reveal.reset="{ delay: 475 }">
                <div class="col-lg-6 col-md-12 mt-3">
                    <span style="color:#ff7f50;">Country<br></span>
                    <span>Philippines</span>
                </div>
                <div class="col-lg-6 col-md-12 mt-3" v-scroll-reveal.reset="{ delay: 500 }">
                    <span style="color:#ff7f50;">Email<br></span>
                    <span>carlociasico01@gmail.com</span>
                </div>
            </div>
            <div class="row text-center mt-5" v-scroll-reveal.reset="{ delay: 550 }">
                <span style="color:#ff7f50;">Education</span>
                <span style="font-size:1.1rem">BS in Computer Science</span>
                <span style="font-size:1.1rem">Emilio Aguinaldo College - Cavite</span>
            </div>
            <div class="icon-box" v-scroll-reveal.reset="{ delay: 600 }">
                <a href="#" class="icon"><i class="fa-brands fa-facebook"></i></a>
                <a href="#" class="icon"><i class="fa-brands fa-github"></i></a>
                <a href="#" class="icon"><i class="fa-brands fa-linkedin"></i></a>
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

.custom-about-des{
    padding: 1rem;
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
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 15px;
}
.icon{
    font-size: 2em;
    color: white;
}
.icon:hover{
    color: #ff7f50;
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