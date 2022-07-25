<template>
  <div class="container intro">
    <div class="custom-text">
        <h3>I'm a</h3>
        <!-- <ul class="intro-text">
        <li class="text">WEB DEVELOPER</li>
        <li class="text">& DESIGNER <span style="color:#ff7f50">.</span></li>
        </ul> -->
        <h1 class="text">
            WEB DEVELOPER
        </h1>
        <h1 class="text">
            & DESIGNER
        </h1>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.intro{
    height: 700px;
    display: flex;
    align-items: center;
}
h3{
    font-size: 3.5rem;
    color: #ff7f50;
    font-weight: bold;
}
.text{
    font-size: 4.5rem;
    color: white;
    font-weight: bold;
}
.intro-text{
    list-style: none;
    line-height: 80px;
}

@media(max-width:990px){
    .custom-text{
        text-align: center;
    }
    .intro{
        justify-content: center;
        align-items: center;
    }
}

</style>