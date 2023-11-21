<template>
    <div class="mb-3 row justify-content-between">
        <div class="img-box col-2">
            <img :src=img alt="features icon">
        </div>
        <div class="col-10">
            <h4 class="fw-bold">{{ title }}</h4>
            <p class>{{ text }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name:'featureCard',
        props:{
            img: String,
            title: String,
            text: String
        }
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

h4 {
    color: $colorWhite;
}

</style>