<template>
    <div class="item-shop d-flex mb-3" >
        <div class="img-box me-3">
            <img :src="img" :alt="title">
        </div>
        <div class="text">
            <h5>{{ title }}</h5>
            <span class="price">{{ price }}</span>
            <span class="or-price">{{ originalPrice }}</span>
        </div>
        <button class="btn-close" @click="$emit('removeProduct')"></button>

    </div>
</template>

<script>

    export default {
        name:'itemShop',
        props:{
            img:String,
            title:String,
            price:String,
            originalPrice:String
        },
        
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
.item-shop{
    width: 400px;
    padding: 10px;
    border: 1px solid $colorContrastBlue;
    border-radius: 15px;
    position: relative;
    .img-box{
        width: 100px;
        height: 100px;
        border-radius: 12px;
        img{
            width: 100%;
            height: 100%;
        }
        
    }
    .price{
        color: $colorHover;
        padding-right: 10px;
    }
    .or-price{
        text-decoration: line-through;
    }
    .btn-close{
        position: absolute;
        bottom: 8px;
        right: 8px;
    }
    &:hover{
        background-color: $colorMailNewsletter;
        cursor: pointer;
    }
}

</style>