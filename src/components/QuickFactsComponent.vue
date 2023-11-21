<template>

    <!-- quick facts section  -->
    <section id="quick-facts">
        <div class="container d-flex flex-column text-center">
            <h2 class="mb-5">Futio Quick Facts</h2>
            <div class="row justify-content-center">
                <div class="col-md-6 col-lg-4 col-xxl-3" v-for="fact in store.quickFacts">
                    <div class="fact-card p-5 mb-5 mb-xxl-0">
                        <h2>{{ fact.number }}</h2>
                        <h5>{{ fact.label }}</h5>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import {store} from '../assets/data/store';
    export default {
        name:'QuickFactsComponent',
        data(){
            return {
                store,
            }
        }
        
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

.fact-card {
    border-radius: 60px;
    text-align: center;
    border: 1px solid $colorDarkBlue;
    h5{
        color: $colorHover;
    }
}

</style>