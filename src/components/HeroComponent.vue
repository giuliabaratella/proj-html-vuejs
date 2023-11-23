<template>
    
    <!-- hero  -->
    <div id="hero">
        <div class="controller-bg">
            <img src="../assets/images/game-controler.png" alt="game controller">
        </div>
        <div class="container">
            <div class="row justify-content-between align-items-center">
                <div class="hero-text col-12 col-md-7 col-lg-6 pb-5">
                    <h4>Game With Live Streaming</h4>
                    <h2>Future Of Esports</h2>
                    <p class="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores animi dolorum sic.</p>
                    <div class="d-flex">
                        <button class="me-4 d-flex align-items-center ">
                            <span class="pe-2">Explore Games</span>
                            <img src="../assets/images/e-double-right-arrow.svg" alt="arrow icon" class="svg">
                        </button>
                        <div class="play-btn">
                            <div class="play-btn-outline"></div>
                            <img src="../assets/images/play-icon.png" alt="icon">
                        </div>
                    </div>
                </div>
                <div class="img-hero-box col-lg-6 d-none d-lg-block">
                    <img src="../assets/images/index-banner-illus.png" alt="Index banner">
                </div>
            </div>
            

        </div>

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
#hero {
    background-image: url(../assets/images/index-banner-bg.png);
    background-size: cover;
    overflow: hidden;
    padding-top: 200px;
    padding-bottom: 200px;
    position: relative;
    .controller-bg{
        position: absolute;
        bottom: 220px;
        left: 30px;
        @media screen and (max-width:1700px){
            &{
                display: none;
            }
        }
    }
   
        .hero-text {
            z-index: 1000;
            h2{
                font-size: 4.5em;
            }
            p{
                font-size: 1.5em;
            }
        }

    width: 100%;
    
        .img-hero-box{
            img{
                width: 100%;
                z-index: 500;
                transform: scale(1.6);
            }

        }
}


</style>