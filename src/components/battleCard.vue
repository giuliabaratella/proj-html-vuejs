<template>
    <div class="battle-card text-center py-5">
        <div class="row justify-content-center align-items-center">
            <div class="col-4 img-box">
                <img :src="img1" alt="Team 1" class="team-img">
            </div>
            <img src="../assets/images/verus-icon.png" alt="versus" class="col-2">
            <div class="col-4 img-box">
                <img :src="img2" alt="Team 2" class="team-img">
            </div>
        </div>
        <div class="battle-text py-4 my-5">
            <h4 class="fw-bold">{{ game }}</h4>
            <p class="mb-0">December 25, 2023 4:00 PM</p>
        </div>
        <div class="d-flex justify-content-center column-gap-4">
            <a href="#" @click.prevent class="d-flex align-items-center">
                <img src="../assets/images/youtube-icon.png" alt="Youtube" class="pe-1">
                <div>Youtube</div>
            </a>
            <a href="#" @click.prevent class="d-flex align-items-center">
                <img src="../assets/images/twitch-icon.png" alt="Twitch" class="pe-1">
                <div>Twitch</div>
            </a>

        </div>
    </div>
</template>

<script>
    export default {
        name: 'battleCard',
        props:{
            img1: String,
            img2: String,
            game: String,
        }
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

.battle-card {
    padding-left: 0 !important;
    padding-right: 0 !important;
    border-radius: 20px;
    background-color: $colorDarkBlue;
    border: 1px solid $colorContrastBlue;
    .team-img {
        width: 100%;
    }
    .battle-text {
        background-color: $colorLighterBlue;
        h4{
            color: $colorWhite;
        }
        p{
            color:$colorHover;
        }
    }

}

</style>