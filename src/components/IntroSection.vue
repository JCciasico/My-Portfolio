<template>
<section>
    <div class="container intro">
        <div class="custom-text">
            <h3>I'm a</h3>
            <h1 class="text">
                WEB DEVELOPER
            </h1>
            <h1 class="text text-1">
                & DESIGNER <span class="text-dot">.</span>
            </h1>
            <!-- <ul class="custom-intro">
                <li class="text-1">I'm a</li>
                <li class="text">WEB DEVELOPER</li>
                <li class="text">& DESIGNER</li>
            </ul> -->
            <button type="button" class="custom-button">Get in touch
                <span>
                    <i class="fas fa-arrow-right"></i>
                </span>
            </button>
        </div>
    </div>
</section>
</template>

<script>
export default {

}
</script>

<style scoped>
.intro{
    height: 500px;
    margin-bottom: 20px;
    display: flex;
    align-items: end;
}
h3{
    font-size: 3.5rem;
    color: #747d8c;
    font-weight: bold;
    margin-bottom: -15px;
}
.text{
    font-size: 4.5rem;
    color: white;
    font-weight: bold;
}
.text-1{
    margin-top:-30px;
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
    color: white;
    font-weight: bold;
}
@media(max-width:600px){
    .text{
        font-size: 2.5rem;
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
}
}

</style>