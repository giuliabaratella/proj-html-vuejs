<template>

    <!-- quick facts section  -->
    <section id="quick-facts">
        <div class="container d-flex flex-column text-center">
            <h2 class="mb-5">Futio Quick Facts</h2>
            <div class="row justify-content-center">
                <div class="col-md-6 col-lg-4 col-xxl-3" v-for="fact in store.quickFacts">
                    <cardNumber :title="fact.label" :num="fact.number"/>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import {store} from '../assets/data/store';
import cardNumber from './cardNumber.vue';
    export default {
        name:'QuickFactsComponent',
        components: {
            cardNumber,
        },
        data(){
            return {
                store,
                
            }
        },
        
        
    }
</script>

<style lang="scss" scoped>


</style>