<template>
  <div class="container custom-about">
    <div class="container-fluid text-center">
        <h1 class="text-1">About Me</h1>
        <h1 class="text-2">About Me</h1>
    </div>
    <div class="row">
        <div class="col-lg-6 col-md-12 border">image</div>
        <div class="col-lg-6 col-md-12 border">description</div>
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