<template>
    <div class="cart">
        <div class="d-flex justify-content-between mb-2">
            <h3>Cart</h3>
            <button class="btn-close" @click="store.cartShow=false"></button>
        </div>
        <div v-for="(item,index) in store.shopItems">
            <itemShop :title="item.product" :price="item.price" :originalPrice="item.originalPrice" :img="item.img" @removeProduct="remProduct(index)"/>
        </div>
        <div class="text-center"><button>Checkout</button></div>
    </div>
</template>

<script>
import {store} from '../assets/data/store';
import itemShop from './itemShop.vue';
    export default {
        name:'CartComponent',
        components:{
            itemShop,
        },
        data(){
            return{
                store,
            }
        },
        methods:{
            remProduct(i){
                this.store.shopItems.splice(i,1);
            }
        }

    }
</script>

<style lang="scss" scoped>

@use '../assets/styles/partials/variables' as *;

.cart {
    position: absolute;
    top: 40px;
    right: 0;
    background-color: $colorLighterBlue;
    border-radius: 20px;
    padding: 20px;
}
</style>