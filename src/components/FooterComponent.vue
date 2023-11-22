<template>

    <!-- footer  -->
    <footer>
        <NewsletterComponent/>
        <div class="footer-links">
            <div class="container">
                <div class="row justify-content-center px-2">
                    <div class="col-12 col-xl-4 mb-5">
                        <img src="../assets/images/logo.png" alt="Futio logo" class="mb-4">
                        <p class="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, molestiae facilis beatae odit dolore.</p>
                        <div class="d-flex column-gap-2">
                            <a href="#" @click.prevent v-for="el in store.social" class="social-icon d-flex align-items-center justify-content-center ">
                                <i class="fa-brands" :class="el.icon"></i>
                            </a>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-lg-3 col-xl-2 mb-5">
                        <h4>Quick Links</h4>
                        <ul>
                            <li v-for="el in store.QuickLinks" class="mb-3"><a href="#" @click.prevent>{{ el }}</a></li>
                        </ul>
                    </div>
                    <div class="col-12 col-sm-6 col-lg-3 col-xl-2 mb-5">
                        <h4>Help</h4>
                        <ul>
                            <li v-for="el in store.Help" class="mb-3"><a href="#" @click.prevent>{{ el }}</a></li>
                        </ul>
                    </div>
                    <div class="col-12 col-sm-6 col-lg-3 col-xl-2 mb-5">
                        <h4>Follow Us</h4>
                        <ul>
                            <li v-for="el in store.FollowUs" class="mb-3"><a href="#" @click.prevent>{{ el }}</a></li>
                        </ul>
                    </div>
                    <div class="col-12 col-sm-6 col-lg-3 col-xl-2 contacts mb-5">
                        <h4>Contacts</h4>
                        <div class="mb-4">
                            <div class="contact-info">Location:</div>
                            <div>4 Mayfield, Buckden, PE19 5SZ</div>
                        </div>
                        <div class="mb-4">
                            <div class="contact-info">Phone:</div>
                            <div>(302) 555-0107</div>
                        </div>
                    </div>
                </div>
            </div>
            

        </div>
        <div class="copyright d-flex justify-content-center">
            <p class="mb-0">Copyright © 2023 <span class="brand-name">Futio</span>. All rights reserved.</p>
        </div>
    </footer>
</template>

<script>
import { store } from '../assets/data/store';
import NewsletterComponent from './NewsletterComponent.vue';
    export default {
        name:'FooterComponent',
        components:{
            NewsletterComponent,
        },
        data(){
            return{
                store,

            }
        }
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
footer {
    background-color: $colorDarkBlue;
    margin-top: 200px;
    position: relative;
    .footer-links{
        padding-top: 200px;
        padding-bottom: 100px;
        h4{
            color: $colorWhite;
            margin-bottom: 25px;
        }
        li{
            font-size: 1.1em;
            a{
                color: $colorLight !important;
                &:hover {
                color:$colorHover !important;
            }
            }
            
        }
        .contacts{
            font-size:1.1em;
            color: $colorLight;
            .contact-info {
                    color:$colorHover;
                }
        }        
        .social-icon{
            color: $colorSocial !important;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            border: 1px solid $colorSocial;
            font-size: 1.2em;
            &:hover{
                background-color: $colorHover;
                color: $colorWhite !important;
            }
        }
    }
    .copyright{
        background-color: $colorHeaderCopyright;
        padding-top: 30px;
        padding-bottom: 30px;
        .brand-name{
            text-transform: uppercase;
            color:$colorHover;
        }
    }
    
}

</style>