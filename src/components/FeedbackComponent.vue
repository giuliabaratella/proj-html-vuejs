<template>

    <!-- feedback section  -->
    <section>
        <div class="container">
            <div class="row justify-content-center ">
                <div class="col-12 col-lg-8 text-center">
                    <h4>Futio Feedback</h4>
                    <h2>What Our Gamers Say</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium repudiandae quasi explicabo fuga atque eius nam voluptate ullam consequuntur incidunt.</p>
                </div>
                <Carousel :autoplay="3000" v-bind="settings" :breakpoints="breakpoints" :wrap-around="true" class="py-5">
                    <slide v-for="(el,index) in store.testimonials" :key="index">
                    <testimonialCard :vote="el.vote" :name="el.name" :img="el.img" :from="el.from"/>
                    </slide>
                </Carousel>
            </div>
           
        </div>
    </section>
</template>

<script>
import { store } from '../assets/data/store';
import testimonialCard from './testimonialCard.vue';
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
    export default {
        name:'FeedbackComponent',
        components:{
            Carousel,
            Slide,
            Pagination,
            Navigation,
            testimonialCard,
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

.carousel__slide {
  padding: 10px;
}


</style>