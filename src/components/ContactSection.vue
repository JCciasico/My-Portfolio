<template>
    <section>
        <div class="container">
            <div class=" text-center" style="padding-top:2rem">
                <h1 class="text-2">Contact Me</h1>
            </div>
            <div class="row contact-body" id="contact">
                <div class="col-lg-4 col-md-6 col-sm-12 box-1">
                    <div class="text-center">
                        <i class="fa-solid fa-mobile-screen icon"></i><br>
                        <span style="font-weight:bold">Contact Me On</span><br>
                        <span>(+63)9989077822</span>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 box-1">
                    <div class="text-center">
                        <i class="fa-solid fa-envelope icon"></i><br>
                        <span style="font-weight:bold">Email me at</span><br>
                        <span>carlociasico01@gmail.com</span>
                    </div>
                </div>
                <div class="col-lg-4 col-md-12 col-sm-12 box-1">
                    <div class="text-center">
                        <i class="fa-solid fa-map-location-dot icon"></i><br>
                        <span style="font-weight:bold">Visit Me</span><br>
                        <span>Cavite, Philippines</span>
                    </div>
                </div>
                <div class="text-center send">
                    <button>Send A Message</button>
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

.text-2{
    color: white;
    font-weight: bold;
    margin-bottom: 70px;
    font-size: 3rem;
}
.icon{
    color: white;
    font-size: 3rem;
    padding: 1rem;
}
.box-text{
    color: white;
    font-size: 1.2rem;
}
.contact-body{
    padding-bottom: 5rem;
}
span{
    color: white;
    font-size: 1.1rem;
}
.box-1{
    padding: 1rem;
}
.send{
    padding-top: 5rem;
}
button{
    background-color: white;
    padding: 1rem;
    border-radius: 25px;
    color: #ff7f50;
    font-weight: bold;
}
button:hover{
    background-color: #ff7f50;
    border: 1px solid white;
    color: white;
}
@media(max-width:900px){
    .text-2{
        font-size: 2rem;
        margin-bottom: 50px;
    }
    .icon{
    color: white;
    font-size: 2.5rem;
    }
}
@media(max-width:500px){
    .text-2{
        font-size: 2rem;
        margin-bottom: 30px;

    }
    .icon{
        font-size: 2rem;
    }
    .contact-body{
        padding-bottom: 2rem;
    }
}

</style>