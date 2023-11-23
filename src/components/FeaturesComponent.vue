<template>

    <!-- features section  -->
    <section id="features">
        <div class="features-text container d-flex flex-column flex-lg-row-reverse align-items-center column-gap-5">
            <div class="px-3 px-xl-5">
                <h4>The Ultimate Competitive Gaming Platform</h4>
                <h2>Make Your Mark On The Battle Field</h2>
                <p class="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero fugit placeat nostrum temporibus sapiente sunt, sequi autem optio omnis perspiciatis.</p>
                <featureCard v-for="feature in store.features" :title="feature.title" :img="feature.img" :text="feature.text"/>
                <button class="d-flex align-items-center ">
                            <span class="pe-2">Plan Now</span>
                            <img src="../assets/images/e-double-right-arrow.svg" alt="arrow icon" class="svg">
                        </button>
            </div>
            <div class=" features-img-box px-3 w-lg-50">
                <img src="../assets/images/features-illus.png" alt="Features illustration">
            </div>
        </div>

    </section>
</template>

<script>
import { store } from '../assets/data/store';
import featureCard from './featureCard.vue';
    export default {
        name: 'FeaturesComponent',
        components: {
            featureCard,
        },
        data(){
            return{
                store,
            }
        }
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
#features{
    .features-text {
        z-index: 1000;
    }
    .features-img-box{
        img{
            width: 100%;
            z-index: 500;
        }
        @media screen and (min-width:992px){
            img{
                width:150%;
                transform: translateX(-200px);

            }
        }
       
    }
    

}

</style>