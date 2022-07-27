<template>
    <section>
        <div class="container p-3">
            <div class="container-fluid text-center" style="padding-top:2rem">
                <h1 class="text-1">Portfolio</h1>
                <h1 class="text-2">Portfolio</h1>
            </div>
            <div class="carousel-body" data-aos="fade-down">
                <div id="carouselExampleCaptions" class="carousel slide portfolio-body" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
                            aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3"
                            aria-label="Slide 4"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4"
                            aria-label="Slide 5"></button>
                    </div>
                    <div class="carousel-inner" style="border-radius: 20px;">
                        <div class="carousel-item active" data-bs-interval="3000">
                            <img src="../assets/Rocket Launch _Isometric.svg" class="d-block w-100 h-70" alt="...">
                            <div class="carousel-caption d-md-block" style="margin-bottom:10px;">
                                <h3>Mars Travel Website</h3>
                                <p>Let your dream come true. Enjoy Marsian trip. A Travel website created using Vue framework</p>
                                <a href="#" id="link">PROJECT LINK</a>
                            </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="3000">
                            <img src="../assets/Road trip_Isometric.svg" class="d-block w-100 h-70" alt="...">
                            <div class="carousel-caption d-md-block" style="margin-bottom:10px;">
                                <h3>Car Rental Website</h3>
                                <p>Need a ride? choose your comfortable car. A Car rental website created using Vue framework</p>
                                <a href="#" id="link">PROJECT LINK</a>
                            </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="3000">
                            <img src="../assets/Polaroid_Isometric.svg" class="d-block w-100 h-70" alt="...">
                            <div class="carousel-caption d-md-block" style="margin-bottom:10px;">
                                <h3>Photographer Website</h3>
                                <p>A creative portfolio for photographer. A Photographer portfolio created using Vue framework</p>
                                <a href="#" id="link">PROJECT LINK</a>
                            </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="3000">
                            <img src="../assets/Data storage_Outline.svg" class="d-block w-100 h-70" alt="...">
                            <div class="carousel-caption d-md-block" style="margin-bottom:10px;">
                                <h3>Inventory System</h3>
                                <p>Inventories can be managed, but people must be led. "Ross Perot". An Inventory System created using PHP</p>
                                <a href="#" id="link">PROJECT LINK</a>
                            </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="3000">
                            <img src="../assets/Order Confirmation_Isometric.svg" class="d-block w-100 h-70" alt="...">
                            <div class="carousel-caption d-md-block" style="margin-bottom:10px;">
                                <h3>Ordering System</h3>
                                <p>Don’t starve, just order. An Ordering System created using PHP</p>
                                <a href="#" id="link">PROJECT LINK</a>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }

}
</script>

<style scoped>

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
.portfolio-body{
    margin-bottom: 30px;
}
.carousel-body{
    padding-bottom: 5rem; 
    padding-left: 5rem; 
    padding-right: 5rem;
}
#link{
    background-color: #ff7f50;
    padding: 5px 10px;
    text-decoration: none;
    border-radius: 10px;
    color: white;
}
#link:hover{
    background-color: white;
    color: #ff7f50;;
}
@media(max-width:1000px){
    .carousel-body{
    padding-top:1rem; 
    padding-bottom: 1rem; 
    padding-left: 1rem; 
    padding-right: 1rem;
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
        font-size: 1rem;
    }
    p{
        font-size: 0.7rem;
    }
    .carousel-body{
    padding: 0;
    }
    #link{
        font-size: 0.7rem;
    }
}
</style>