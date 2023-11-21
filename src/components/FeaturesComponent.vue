<template>
    <section id="features">
        <div class="d-flex flex-column-reverse flex-md-row align-items-center column-gap-5">
            <div class=" features-img-box w-100 w-md-50 px-3">
                <img src="../assets/images/features-illus.png" alt="Features illustration">
            </div>
            <div class="px-3">
                <h4>The Ultimate Competitive Gaming platform</h4>
                <h2>Make Your Mark On The Battle Field</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero fugit placeat nostrum temporibus sapiente sunt, sequi autem optio omnis perspiciatis.</p>
            </div>
        </div>

    </section>
</template>

<script>
    export default {
        name: 'FeaturesComponent',
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
#features{
    .features-img-box{
        width: 50%;
        img{
            width: 100%;
        }
    }

}

</style>