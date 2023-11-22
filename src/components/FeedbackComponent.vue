<template>

    <!-- feedback section  -->
    <section>
        <div class="container">
            <div class="row justify-content-center ">
                <div class="col-12 col-lg-8 text-center mb-5">
                    <h4>Futio Feedback</h4>
                    <h2>What Our Gamers Say</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium repudiandae quasi explicabo fuga atque eius nam voluptate ullam consequuntur incidunt.</p>
                </div>
                
                <div class="row overflow-x-hidden cards-container">
                    <div class="card-sample col-3">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati unde pariatur dolore! Quidem magnam obcaecati delectus, iure beatae ad repudiandae?</p>
                        <div class="d-flex">
                            <img src="/img/testimonials/testimonials-image-1.png" alt="testimonial" class="pe-3">
                            <div>Nome</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name:'FeedbackComponent',
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
.card-sample{
    background-color: $colorDark;
    padding: 20px;
    border-radius: 30px;
}

</style>