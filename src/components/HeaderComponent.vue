<template>
    <header id="header">
        <div class="container py-4 d-flex justify-content-between align-items-center">
            <div>
                <img src="../assets/images/logo.png" alt="Futio">
            </div>
            <nav>
                <ul class="nav">
                    <li class="nav-item"><a class="nav-link" href="#" @clik.prevent>Home</a></li>
                    <li class="nav-item"><a class="nav-link" href="#" @clik.prevent>Home</a></li>
                    <li class="nav-item"><a class="nav-link" href="#" @clik.prevent>Home</a></li>
                </ul>
            </nav>
            <div class="d-flex column-gap-4 align-items-center">
              <a href="#" @click.prevent>
                <img src="../assets/images/cart-icon.png" alt="Cart">
              </a>
                <button class="">Live Streaming</button>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name:'HeaderComponent',

        
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
    }
}

</style>