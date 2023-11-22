<template>
    <!-- battle teams section  -->
    <section id="battle">
        <div class="container">
            <div class="row justify-content-center row-gap-4">
                <div class="battle-text col-12 col-lg-8 mx-auto text-center mb-5">
                    <h4>Trenting Battle</h4>
                    <h2>Keep Eyes & Manage Upcoming Battle</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis tempore enim aliquid quibusdam itaque doloremque inventore? At dolore ea laboriosam beatae deserunt ullam quidem eligendi!</p>
                </div>
                <div class="col-12 col-lg-6" v-for="battle in battles" >
                    <battleCard :img1="battle.team1" :img2="battle.team2" :game="battle.game"/>
                </div>
                <div class="col-12 d-flex justify-content-center">
                    <button class="d-flex align-items-center">
                        <span class="pe-2">View All Match</span>
                        <img src="../assets/images/e-double-right-arrow.svg" alt="arrow icon" class="svg">
                    </button>
                </div>
            </div>
        </div>
        

    </section>
</template>

<script>
import battleCard from './battleCard.vue';
    export default {
        name:'BattleComponent',
        components: {
            battleCard,
        },
        data(){
            return {
                battles:[
                    {
                        team1: '/img/game-img/game-img-1.png',
                        team2: '/img/game-img/game-img-2.png',
                        game: 'Call Of Deauty'  
                    },
                    {
                        team1: '/img/game-img/game-img-3.png',
                        team2: '/img/game-img/game-img-4.png',
                        game: 'Legendary Battles'  
                    },
                    {
                        team1: '/img/game-img/game-img-5.png',
                        team2: '/img/game-img/game-img-6.png',
                        game: 'Nay Corral Gundown'  
                    },
                    {
                        team1: '/img/game-img/game-img-7.png',
                        team2: '/img/game-img/game-img-8.png',
                        game: 'League of legends'  
                    },
                ]
            }
        }
        
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

#battle {
    background-color: $colorDark;
    button {
        margin-top: 20px;
    }


}

</style>