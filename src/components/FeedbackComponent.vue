<template>

    <!-- feedback section  -->
    <section>
        <div class="container">
            <div class="row justify-content-center ">
                <div class="col-12 col-lg-8 text-center mb-5">
                    <h4>Futio Feedback</h4>
                    <h2>What Our Gamers Say</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium repudiandae quasi explicabo fuga atque eius nam voluptate ullam consequuntur incidunt.</p>
                </div>
                <Carousel :autoplay="3000" v-bind="settings" :breakpoints="breakpoints" :wrap-around="true">
                <slide v-for="(el,index) in store.testimonials" :key="index">
                    <div class="card-testimonial mb-4">
                        <i v-for="n in 5" class="fa-solid fa-star mb-4"></i>
                        <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati unde pariatur dolore! Quidem magnam obcaecati delectus.</p>
                        <div class="d-flex align-items-center">
                            <div class="pe-2 test-img-box">
                                <img :src="el.img" alt="testimonial">
                            </div>
                            <div class="">
                                <h5 class="test-name">{{el.name}}</h5>
                                <div class="test-from">{{ el.from }}</div>
                            </div>
                        </div>
                    </div>
                </slide>
            </Carousel>
            </div>
           
        </div>
    </section>
</template>

<script>
import { store } from '../assets/data/store';
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
    export default {
        name:'FeedbackComponent',
        components:{
            Carousel,
            Slide,
            Pagination,
            Navigation,
        },
        data(){
            return {
                store,
                settings:{
                    itemsToShow: 1.5
                },
                breakpoints:{
                    700: {
                        itemsToShow: 1.5 
                    },
                    1024: {
                        itemsToShow: 2.5  
                    },
                    1280: {
                        itemsToShow: 3.5  

                    }
                }
            }
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
.carousel__slide {
  padding: 10px;
}


</style>