<template>
    <!-- latest news section  -->
    <section id="latest-news">
        <div class="container">
            <div class="row justify-content-center ">
                <div class="col-12 col-lg-8 text-center mb-5">
                    <h4>Latest News</h4>
                    <h2>Stay Updated With Our Latest News Articles</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium repudiandae quasi explicabo fuga atque eius nam voluptate ullam consequuntur incidunt.</p>
                </div>
                
                <div class="row justify-content-center row-gap-4 ">
                   <div class="col-10 col-lg-6" v-for="article in this.store.articles">
                       <articleCard :title="article.title" :img="article.img"/>
                   </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { store } from '../assets/data/store.js';
import articleCard from './articleCard.vue';
    export default {
        data(){
            return{
                store,
            }
        },
        name:'LatestNewsComponent',
        components:{
            articleCard,
        }
        
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;


</style>