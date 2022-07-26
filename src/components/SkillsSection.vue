<template>
<section>
    <div class="container p-3">
        <div class="container-fluid text-center">
            <h1 class="text-1">Skills</h1>
            <h1 class="text-2">Skills</h1>
        </div>
        <div class="row border">
            <div class="col-lg-6 col-md-12 p-3">
                    <div class="p-3 border text-center text-white box-1">
                        <span class="skill-item">Vue js</span>
                        <i class="fa-brands fa-vuejs icon"></i>
                    </div>
                    <div class="p-3 border text-center text-white">
                        <span>HTML</span>
                        <i class="fa-brands fa-html5 icon"></i>
                    </div>
                    <div class="p-3 border text-center text-white">
                        <span>CSS</span>
                        <i class="fa-brands fa-css3-alt icon"></i>
                    </div>
                    <div class="p-3 border text-center text-white">
                        <span>Javascript</span>
                        <i class="fa-brands fa-js icon"></i>
                    </div>
            </div>
            <div class="col-lg-6 col-md-12 p-3">
                    <div class="border">PHP</div>
                    <div class="border">Bootstrap</div>
                    <div class="border">Axios</div>
                    <div class="border">MySQL</div>
            </div>
        </div>
        <div class="container text-center footer-details">
            <h3>I Am Available For Freelance !</h3>
        </div>
    </div>
</section>
</template>

<script>
export default {

}
</script>

<style scoped>
.text-1{
    font-size: 6.5rem;
    font-weight: bolder; 
    color: #1b1b1b; 
}
.text-2{
    color: #ff7f50;
    margin-top: -90px;
    font-weight: bold;
    margin-bottom: 75px;
    font-size: 3rem;
}
h3{
    color: white;
    font-weight: bold;
    font-size: 2rem;
}
.footer-details{
    padding: 1rem;
}
.box-1{
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 10px;
}
.skill-item{
    font-size: 2rem;
    font-weight: bold;
}
.icon{
    font-size: 3rem;
}
</style>