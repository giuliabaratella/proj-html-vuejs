<template>
    <!-- header  -->
    <header id="header">
        <div class="container py-4 d-flex justify-content-between align-items-center">
            <div>
                <img src="../assets/images/logo.png" alt="Futio">
            </div>
            <!-- nav -->
            <nav class="d-none d-xl-block">
                <ul class="navbar column-gap-3 mb-0">
                    <li v-for="(el,index) in store.menu" :key="index" class="nav-item dropdown">
                        <a class="nav-link" :class="{'dropdown-toggle' : el.sublinks}" href="#" role="button" data-bs-toggle="dropdown-center" aria-expanded="false" @mouseover="showMenu(index)" @click.prevent>
                            {{el.title}}
                        </a>
                        <ul class="dropdown-menu" :class="{'show' : index === activeIndex}" v-if="el.sublinks" @mouseleave="hideMenu">
                            <li v-for="sublink in el.sublinks"><a class="dropdown-item" href="#" @click.prevent>{{sublink}}</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
            <!-- cart & live streaming  -->
            <div class="d-flex column-gap-4 align-items-center">
              <a href="#" @click.prevent>
                <img src="../assets/images/cart-icon.png" alt="Cart">
              </a>
                <button>Live Streaming</button>
            </div>
        </div>
    </header>
</template>

<script>
import {store} from '../assets/data/store'
    export default {
        name:'HeaderComponent',
        data(){
            return{
                activeIndex:'',
                store,
            }
        },
        methods:{
            showMenu(i){
                this.activeIndex = i;
            },
            hideMenu(){
                this.activeIndex = '';
            }

        }

        
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
header{
    z-index: 1000;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
}
nav{
    ul{
        font-family: $fontPrimary;
        li a{
            font-size: 1.3em;
            font-weight: 700;
            &:hover{
                color: $colorHover !important;
            }
        }
        .dropdown-menu{
            background-color: $colorDark;
            a:hover{
                background-color: $colorDark !important;
            }
        }
    }
}

</style>