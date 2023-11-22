<template>

    <!-- live streaming section  -->
    <section id="live-streaming">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-lg-8 text-center mb-5">
                    <h4>Live Streaming</h4>
                    <h2>Watch the Streams</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium repudiandae quasi explicabo fuga atque eius nam voluptate ullam consequuntur incidunt.</p>
                </div>
                <div class="video-box d-flex justify-content-center col-10">
                    <div class="video-text d-flex">
                        <div class="me-4">
                            <span class="num pe-1">356,599</span>
                            <span>Viewers</span>
                        </div>
                        <div>
                            <span class="num pe-1">23,599</span>
                            <span>Likes</span>
                        </div>
                    </div>
                    <div class="live-label d-flex align-items-center ">
                        <div class="pe-1 d-flex align-items-center ">
                            <img src="../assets/images/live-icon.png" alt="live-icon">
                        </div>
                        <span>Live</span>
                    </div>
                    <div class="video-text-center d-flex flex-column align-items-center">
                        <div class="play-btn mb-3">
                            <div class="play-btn-outline"></div>
                            <img src="../assets/images/play-icon.png" alt="play">
                        </div>
                        <h3>League Of Legends</h3>
                    </div>
                    <img class="video-bg" src="../assets/images/video-bg.png" alt="live streaming video">
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name:'LiveStreamingComponent',
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
#live-streaming {
    background-image: url('../assets/images/live-streaming-bg.png');
    background-repeat: no-repeat;
    background-size: contain;

    .video-box{
        position: relative;

        .video-text{
            position: absolute;
            bottom: 5%;
            left: 5%;
            z-index: 1000;
            font-size:1.1em;
            .num {
                color: $colorHover;
            }
        }
        .live-label{
            position: absolute;
            top: 5%;
            right: 5%;
            z-index: 1000;
            padding: 10px 30px;
            background-color: $colorLive;
            border-radius: 30px;
            color: $colorBlack;
            font-weight: bold;
            &:hover{
                cursor: pointer;
            }

        }
        .video-text-center{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 1000;
            text-align: center;
            

        }
        .video-bg{
            z-index: 500;
            width: 100%;
            border-radius: 30px;
        }
    }
}


</style>