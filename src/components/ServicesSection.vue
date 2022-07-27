<template>
    <section>
        <div class="container" style="padding-bottom: 2.5rem;">
            <div class="container-fluid text-center" style="padding-top:2rem">
                <h1 class="text-1">Services</h1>
                <h1 class="text-2">Services</h1>
            </div>
                <div class="row services-body" id="services" data-aos="fade">
                    <div class="col-lg-2 col-md-6 col-sm-12 box-1">
                        <div class="text-center">
                            <i class="fa-solid fa-laptop-code icon"></i><br>
                            <span>Web Develop/Design</span>
                        </div>
                    </div>
                   <div class="col-lg-2 col-md-6 col-sm-12 box-1">
                        <div class="text-center">
                            <i class="fa-solid fa-code-merge icon"></i><br>
                            <span>API Integration</span>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-6 col-sm-12 box-1">
                        <div class=" ext-center">
                            <i class="fa-solid fa-list-check icon"></i><br>
                            <span>Quality Testing</span>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-6 col-sm-12 box-1">
                        <div class="text-center">
                            <i class="fa-solid fa-mobile-screen icon"></i><br>
                            <span>Responsive Design</span>
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
.icon{
    color: #ff7f50;
    font-size: 5rem;
    padding: 1rem;
}
.box-1{
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    padding: 2rem;
}
.services-body{
    display: flex;
    justify-content: center;
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