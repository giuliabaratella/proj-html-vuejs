<template>
    <!-- newsletter  -->
    <div class=" newsletter row justify-content-center align-items-center ">
        <div class="col-12 col-xl-7">
            <h3>Subscribe Newsletter</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae culpa aut neque perferendis minima.</p>
        </div>
        <div class="col-12 col-xl-5">
            <div class="form-group input-area d-flex align-items-center">
                <input type="email" class="form-control newsletter-mail" aria-describedby="newsletter" placeholder="Enter your email" v-model="inputMail">
                <button @click="clearForm" class="d-flex justify-content-center align-items-center me-2">
                    <img src="../assets/images/send-icon.png" alt="send icon">
                </button>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name:'NewsletterComponent',
        data(){
            return{
                inputMail:'',
            }
        },
        methods:{
            clearForm(){
                this.inputMail = '';
            }
        }

        
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
.newsletter{
    position: absolute;
    top: -150px;
    left: 50%;
    transform: translateX(-50%);
    background-color: $colorLighterBlue;
    border-radius: 30px;
    padding: 50px;
    h3{
        font-size: 2.5em;
    }
    .form-group {
        background-color: $colorMailNewsletter;
        border-radius: 20px;
        border: 1px solid $colorContrastBlue;
        .newsletter-mail{
            padding: 20px;
            border: none;
            background: transparent;
            color: $colorLight;
            &:focus{
                box-shadow: none;
            }
        }
        button {
            width: 50px;
            height: 50px;
            outline:0;
            background-color: $colorHover;
        }
    }
    
}
@media screen and (max-width: 991.98px){
        .newsletter{
            top:-230px;
        }
}

</style>