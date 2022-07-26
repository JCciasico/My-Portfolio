<template>
<section>
    <div class="container p-3">
        <div class="container-fluid text-center p-3">
            <h1 class="text-1">Skills</h1>
            <h1 class="text-2">Skills</h1>
        </div>
        <div class="row skill-body">
            <div class="col-lg-6 col-sm-12 border">
                <div class="col p-3">
                    <div class="d-flex justify-content-between">
                        <span class="skill-item">Vue Js</span>
                        <span class="skill-item">80%</span>
                    </div>
                    <div class="range">
                        <div class="vue"></div>
                    </div>
                </div>
                <div class="col p-3">
                    <div class="d-flex justify-content-between">
                        <span class="skill-item">HTML</span>
                        <span class="skill-item">90%</span>
                    </div>
                    <div class="range">
                        <div class="html"></div>
                    </div>
                </div>
                <div class="col p-3">
                    <div class="d-flex justify-content-between">
                        <span class="skill-item">CSS</span>
                        <span class="skill-item">85%</span>
                    </div>
                    <div class="range">
                        <div class="css"></div>
                    </div>
                </div>
                 <div class="col p-3">
                    <div class="d-flex justify-content-between">
                        <span class="skill-item">Javascript</span>
                        <span class="skill-item">65%</span>
                    </div>
                    <div class="range">
                        <div class="js"></div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 col-sm-12 border">
                <div class="col p-3">
                    <div class="d-flex justify-content-between">
                        <span class="skill-item">Javascript</span>
                        <span class="skill-item">65%</span>
                    </div>
                    <div class="range">
                        <div class="js"></div>
                    </div>
                </div>
                <div class="col">Axios</div>
                <div class="col">PHP</div>
                <div class="col">MySQL</div>
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
    padding-top: 5rem;
    padding-bottom: 2rem;
}
.box-1{
}
.skill-item{
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
}
.icon{
    font-size: 5rem;
}
.skill-body{
    margin-bottom: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.range{
    width: 100%;
    height: 15px;
    background-color: #ddd;
}
.vue{width: 80%;background-color: #ff7f50;height: 100%;text-align: right;}
.html{width: 90%;background-color: #ff7f50;height: 100%;text-align: right;}
.css{width: 85%;background-color: #ff7f50;height: 100%;text-align: right;}
.js{width: 65%;background-color: #ff7f50;height: 100%;text-align: right;}



</style>