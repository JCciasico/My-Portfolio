<template>
<section>
    <div class="container p-3" id="skills">
        <div class="container-fluid text-center p-3">
            <h1 class="text-1">Skills</h1>
            <h1 class="text-2">Skills</h1>
        </div>
        <div class="row skill-body" data-aos="zoom-in">
            <div class="col-lg-6 col-md-6 col-sm-12 box-1">
                <div class="col p-3">
                    <div class="d-flex justify-content-between">
                        <span class="skill-item">Vue Js</span>
                    </div>
                    <div class="range">
                        <div class="vue"></div>
                    </div>
                </div>
                <div class="col p-3">
                    <div class="d-flex justify-content-between">
                        <span class="skill-item">HTML</span>
                    </div>
                    <div class="range">
                        <div class="html"></div>
                    </div>
                </div>
                <div class="col p-3">
                    <div class="d-flex justify-content-between">
                        <span class="skill-item">CSS</span>
                    </div>
                    <div class="range">
                        <div class="css"></div>
                    </div>
                </div>
                 <div class="col p-3">
                    <div class="d-flex justify-content-between">
                        <span class="skill-item">Javascript</span>
                    </div>
                    <div class="range">
                        <div class="js"></div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 box-2">
                <div class="col p-3">
                    <div class="d-flex justify-content-between">
                        <span class="skill-item">Python</span>
                    </div>
                    <div class="range">
                        <div class="boot"></div>
                    </div>
                </div>
                <div class="col p-3">
                    <div class="d-flex justify-content-between">
                        <span class="skill-item">Java</span>
                    </div>
                    <div class="range">
                        <div class="axios"></div>
                    </div>
                </div>
                <div class="col p-3">
                    <div class="d-flex justify-content-between">
                        <span class="skill-item">PHP</span>
                    </div>
                    <div class="range">
                        <div class="php"></div>
                    </div>
                </div>
                <div class="col p-3">
                    <div class="d-flex justify-content-between">
                        <span class="skill-item">SQL</span>
                    </div>
                    <div class="range">
                        <div class="sql"></div>
                    </div>
                </div>
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
@import url('https://fonts.googleapis.com/css2?family=Mochiy+Pop+One&family=Roboto:wght@500&display=swap');

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
    font-size: 1.6rem;
}
.footer-details{
    padding-top: 5rem;
    padding-bottom: 2rem;
}
.box-1{
    padding: 3rem;
}
.box-2{
    padding: 3rem;
}
.skill-item{
    font-size: 1.2rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    color: white;
    margin-bottom: 15px;
}
.icon{
    font-size: 5rem;
}
.skill-body{
    margin-bottom: 50px;
    margin-top: -25px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.range{
    width: 100%;
    height: 15px;
    background-color: #1b1b1b;
}
.vue{width: 80%;background-color: #ff7f50;height: 100%;text-align: right;}
.html{width: 90%;background-color: #ff7f50;height: 100%;text-align: right;}
.css{width: 85%;background-color: #ff7f50;height: 100%;text-align: right;}
.js{width: 75%;background-color: #ff7f50;height: 100%;text-align: right;}
.boot{width: 80%;background-color: #ff7f50;height: 100%;text-align: right;}
.axios{width: 70%;background-color: #ff7f50;height: 100%;text-align: right;}
.php{width: 75%;background-color: #ff7f50;height: 100%;text-align: right;}
.sql{width: 75%;background-color: #ff7f50;height: 100%;text-align: right;}

@media(max-width:767px){
    .box-2{
    padding: 0 2rem;
    }
    .box-1{
    padding: 0 2rem;
    }
}

@media(max-width:510px){
    .box-2{
    padding: 0 2rem;
    }
    .box-1{
    padding: 0 2rem;
    }
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
    h3{
    color: white;
    font-weight: bold;
    font-size: 1.2rem;
}
}

</style>