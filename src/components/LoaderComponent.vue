<template>
    <div id="loader">
    </div>
</template>

<script>
    export default {
        name:'LoaderComponent',
    }
</script>

<style lang="scss" scoped>
@use '/src/assets/styles/partials/_variables.scss' as *;
#loader{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background-color: $colorLoader;
    background-image: url(../assets/images/preloader.gif);
    background-repeat: no-repeat;
    background-position: center;
    z-index: 8000;
    animation: fade 2s;
    @keyframes fade {
        0%{
            opacity: 100%;
        }
        30%{
            opacity:100%;
        }
        100%{
            opacity: 20%;
        }
    }
}

</style>