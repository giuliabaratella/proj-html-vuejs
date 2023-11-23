<template>
    <div class="fact-card p-5 mb-5 mb-xxl-0">
        <h2 @mouseenter="raiseNum(num)">{{ counter }}</h2>
        <h5>{{ title }}</h5>
    </div>
</template>

<script>
import {store} from '../assets/data/store';

    export default {
        name:'cardNumber',
        props:{
            num:Number,
            title:String,


        },
        data(){
            return{
                store,
                speed:1,
                counter:0,
            }
        },
        methods:{
            raiseNum(n){
                setInterval(()=> {
                    if (this.counter === n) {
                        clearInterval;
                    } else{
                        this.counter++;
                    }
                }, this.speed);
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
    h2:hover{
        cursor: pointer;
    }

}

</style>