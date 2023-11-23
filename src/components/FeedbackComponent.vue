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
                <div class="row overflow-x-hidden cards-container">
                    <div class="col-4" v-for="el in store.testimonials">
                        <div class="card-testimonial">
                            <i v-for="n in 5" class="fa-solid fa-star mb-4"></i>
                            <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati unde pariatur dolore! Quidem magnam obcaecati delectus.</p>
                            <div class="row">
                                <img :src="el.img" alt="testimonial" class="pe-3 col-3">
                                <div class="col">
                                    <h5 class="test-name">{{el.name}}</h5>
                                    <div class="test-from">{{ el.from }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { store } from '../assets/data/store';
    export default {
        name:'FeedbackComponent',
        data(){
            return {
                store,
            }
        }
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
.card-testimonial{
    background-color: $colorDarkBlue;
    padding: 30px;
    border-radius: 30px;
    font-size: 1.1em;
    .test-from{
        color:$colorHover;
    }
    i{
        color: $colorLive;;
    }
}

</style>