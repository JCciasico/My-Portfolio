<template>
    <nav class="navbar navbar-expand-lg">
        <div class="container custom-list" >
            <a class="navbar-brand" href="#"></a>
            <img src="../assets/jcc-logo.png" alt="logo image" style="width: 9em; height: 4.5em; justify-content: start;" >
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span><i class="fas fa-bars" style="color:#fff; font-size:28px;"></i></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a href="#home" class="nav-link text" aria-current="page">HOME</a>
                    </li>
                    <li class="nav-item">
                        <a href="#about" class="nav-link text" aria-current="page">ABOUT ME</a>
                    </li>
                    <li class="nav-item">
                        <a href="#skills" class="nav-link text" aria-current="page">SKILLS</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link text" aria-current="page">PORTFOLIO</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link text" aria-current="page">SERVICES</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link text" aria-current="page">CONTACT</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');

.custom-list {
    padding: 0.4rem;
}

.navbar {
    margin: 0;
    padding: 0;
}

.text {
    color: white;
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    margin: 0 5px;
}
.nav-link:hover{
    color: #ff7f50;
}
</style>