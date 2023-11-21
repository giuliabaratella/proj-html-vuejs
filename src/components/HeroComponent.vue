<template>
    
    <!-- hero  -->
    <div id="hero">
        <div class="container">
            <div class="row justify-content-between align-items-center">
                <div class="hero-text col-12 col-md-4 pb-5 pt-md-0">
                    <h4>Game With Live Streaming</h4>
                    <h2>Future Of Esports</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores animi dolorum sic.</p>
                    <div class="d-flex">
                        <button class="me-4">Explore Games</button>
                        <div class="play-btn">
                            <img src="../assets/images/play-icon.png" alt="icon">
                        </div>
                    </div>
                </div>
                <div class="img-hero-box col-md-8 d-none d-md-block">
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
    
        .hero-text {
            padding-top: 200px;
            h2{
                font-size: 4.5em;
            }
            p{
                font-size: 1.5em;
            }
        }

    width: 100%;
    
        .img-hero-box{
            width: 60%;

        }
}

</style>