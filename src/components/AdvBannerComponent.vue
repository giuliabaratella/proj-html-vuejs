<template>
    <!-- adv banner  -->
    <div class="row justify-content-center">
        <div class="col-10 banner d-flex flex-column align-items-center justify-content-center">
            <div class="banner-text text-center">
                <h5 class="fw-bold">Make Offer</h5>
                <h2 class="mb-4">Get 70% Offer Discount</h2>
                <button>Get Offers</button>
            </div>
            <div class="banner-item-1">
                <img src="../assets/images/banner-item-obj1.png" alt="banner-item">
            </div>
            <div class="banner-item-2">
                <img src="../assets/images/banner-item-obj2.png" alt="banner-item" >
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name:'AdvBanner',
        
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
.row{
    margin: 0 !important;
    .banner {
    // width: 1500px;
    background-image: url(../assets/images/banner-item-bg.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: 10px;
    position:relative;
    overflow: hidden;
    margin-bottom: 100px;

    .banner-text{
        padding-top: 120px;
        padding-bottom: 120px;
        z-index: 1000;
        button {
            outline: none;
            text-transform: none;
            padding: 15px 70px;
            color: $colorWhite;
            background-color: $colorGetOffersBtn;
            font-weight: normal;
        }
        h5{
            font-size: 1.5em;
        }
        h2{
            font-size: 3.5em;
        }
    }
    .banner-item-1{
        z-index: 500;
        position: absolute;
        left: 0;
        bottom: -200px;
        display: none;
    }
    .banner-item-2{
        z-index: 400;
        position: absolute;
        right: 0;
        top: -70px;
        display: none;
    }
    @media screen and (min-width:1700px){
        .banner-item-1, .banner-item-2{
            display:block;
        }
    }
}
}



</style>