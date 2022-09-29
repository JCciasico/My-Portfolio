<template>
<section>
    <div class="container intro">
        <div class="row text-center custom-text">
            <div class="intro-box-1">
                <div>
                    <h3 >I'm a</h3>
                    <span data-text="DEVELOPER" class="text">
                        DEVELOPER
                    </span><br>
                    <!-- <h1 class="text-1">
                        DESIGNER <span class="text-dot">.</span>
                    </h1> -->
                    <!-- <ul class="custom-intro">
                        <li class="text-1">I'm a</li>
                        <li class="text">WEB DEVELOPER</li>
                        <li class="text">& DESIGNER</li>
                    </ul> -->
                    <!-- <button type="button" class="custom-button">Get in touch
                        <span>
                            <i class="fas fa-arrow-right"></i>
                        </span>
                    </button> -->
                </div>
            </div>
            <!-- <div class="col-lg-6 col-md-12 text-center intro-box-2">
                <img src="../assets/Designer _Flatline (2).png" alt="">
            </div> -->
        </div>
    </div>
</section>
</template>

<script>
export default {

}
</script>

<style scoped>

.intro-box-1{
    padding-top: 11rem;
    padding-bottom: 8rem;
}

h3{
    font-size: 3.5rem;
    color: #747d8c;
    font-weight: bold;
}
.text{
    font-size: 7rem;
    color: transparent;
    font-weight: bold;
    -webkit-text-stroke: 3px #5a5a5a;
    text-transform: uppercase;
    position: relative;
}
.text::before{
    content: attr(data-text);
    position: absolute;
    top: 10;
    left: 0;
    width: 0;
    height: 100%;
    text-align: center;
    color: #ff7f50;
    -webkit-text-stroke: 0px #5a5a5a;
    /* border-right: 2px solid #383d52; */
    overflow:hidden;
    animation: animate 4s linear infinite;
}
@keyframes animate {
    0%,10%,100%{
        width: 0;
    }
    70%,90%{
        width: 100%;
    }
}
.text-1{
    margin-top:-10px;
    font-size: 4.5rem;
    color: transparent;
    font-weight: bold;
    -webkit-text-stroke: 0.3vw #383d52;
    text-transform: uppercase;
}
.text-dot{
    color:#ff7f50;
}
.intro-text{
    list-style: none;
    line-height: 80px;
}
.custom-button{
    padding: 12px;
    border-radius: 25px;
    width: 170px;
    margin-top: 25px;
    background-color: #ff7f50;
    color: white;
    border: none;
}
.custom-button:hover{
    background-color: white;
    color: #ff7f50;
}
.custom-intro{
    list-style: none;
    line-height: 65px;
}


@media(max-width:990px){
    .custom-text{
        text-align: center;
    }
    .intro{
        justify-content: center;
        align-items: center;
    }
    .text{
    font-size: 4rem;
    color: transparent;
    font-weight: bold;
    -webkit-text-stroke: 2px #383d52;
    text-transform: uppercase;
    position: relative;
    }
@media(max-width:600px){
    .text{
    font-size: 3rem;
    color: transparent;
    font-weight: bold;
    -webkit-text-stroke: 2px #383d52;
    text-transform: uppercase;
    position: relative;
    }
    .text-1{
    margin-top:-20px;
    }
    h3{
        font-size: 2rem;
        margin-bottom: -5px;
    }
    .intro{
        justify-content: center;
        align-items: center;
        height: 500px;
    }
    .intro-box-1{
        padding-top: 10rem;
        padding-bottom: 5rem;
    }
}
}

</style>