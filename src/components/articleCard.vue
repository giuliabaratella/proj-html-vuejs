<template>
    <div class="article-card">
        <div class="article-img-box">
           <img :src="img" alt="article image">
        </div>
        <div class="article-text p-5">
            <div class="row justify-content-between mb-3">
                <div class="col-4 d-flex align-items-center ">
                    <img src="../assets/images/clock.png" alt="time icon" class="pe-2">
                    <span>10 Min</span>
                </div>
                <div class="col-4 d-flex align-items-center ">
                    <img src="../assets/images/eye.png" alt="visual icon" class="pe-2">
                    <span>240</span>
                </div>
                <div class="col-4 d-flex align-items-center">
                    <img src="../assets/images/calendar.png" alt="date icon" class="pe-2">
                    <span>Apr 11,2023</span>
                </div>
            </div>
            <h3>{{ title }}</h3>
        </div>

    </div>
</template>

<script>
    export default {
        name:'articleCard',
        props:{
            img:String,
            title:String,
        }
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

.article-card {
    background-color: $colorDarkBlue;
    border-radius: 30px;

    .article-img-box{
        width: 100%;
        height: 350px;
        border-radius: 30px;
        overflow: hidden;
        &:hover {
            cursor: pointer;
        }
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    .article-text{
        span{
            color:$colorHover;
        }
        h3:hover{
            cursor: pointer;
        }
    }

}

</style>