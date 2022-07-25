<template>
  <div class="container custom-about">
    <div class="container-fluid text-center">
        <h1 class="text-1">About Me</h1>
        <h1 class="text-2">About Me</h1>
    </div>
    <div class="row">
        <div class="col-lg-6 col-md-12 border about-box">
               <div class="box-1"><img src="../assets/carlo.png" class="img-fluid" alt=""></div>
        </div>
        <div class="col-lg-6 col-md-12 border">
            <h6>My name is John Carlo G. Ciasico</h6>
            <p>I'm a Web Developer and Designer. I am very passionate and dedicated to my work.
                I have acquired the skills and knowledge necessary to make your project a success.
                I enjoy every step of developing and designing process from discussion and collaboration
                to concept and execution, but what i find the most is seeing the finished product do
                everything for you that it was created to do. 
            </p>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.custom-about{
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
    margin-bottom: 50px;
    font-size: 3rem;
}
.box-1 {
    border: 1px solid #ff7f50;
    box-shadow: rgba(255,127,80, 0.4) 5px 5px, rgba(255,127,80, 0.3) 10px 10px, rgba(255,127,80, 0.2) 15px 15px, rgba(255,127,80, 0.1) 20px 20px, rgba(255,127,80, 0.05) 25px 25px;
}
.about-box{
    padding: 3rem;
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