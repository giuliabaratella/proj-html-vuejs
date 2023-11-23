<template>
    <div class="card-testimonial mb-4">
                        <i v-for="n in vote" class="fa-solid fa-star mb-4"></i>
                        <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati unde pariatur dolore! Quidem magnam obcaecati delectus.</p>
                        <div class="d-flex align-items-center">
                            <div class="pe-2 test-img-box">
                                <img :src="img" alt="testimonial">
                            </div>
                            <div class="">
                                <h5 class="test-name">{{name}}</h5>
                                <div class="test-from">{{ from }}</div>
                            </div>
                        </div>
                    </div>
</template>

<script>
    export default {
        name:'cardTestimonial',
        props:{
            name:String,
            from:String,
            img:String,
            vote:Number,
        }
        
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
.card-testimonial{
    background-color: $colorDarkBlue;
    padding: 20px;
    border-radius: 30px;
    font-size: 1.1em;
    text-align: left;
    .test-img-box{
        width: 50px;
        height: 50px;
        img{
            width: 100%;
        }
    }
    .test-from{
        color:$colorHover;
    }
    i{
        color: $colorLive;;
    }
}

</style>