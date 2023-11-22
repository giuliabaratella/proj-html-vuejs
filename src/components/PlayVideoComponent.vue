<template>
    <!-- video player  -->
    <div class="video-player d-flex justify-content-center align-items-center">
        <iframe width="90%" height="90%" src="https://www.youtube.com/embed/chm_iNYBwdQ?si=mNa-58muy7FEZJ6q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
         <button class="btn-close" data-bs-theme="dark" @click="store.playVideo = false"></button>
</template>

<script>
import { store } from '../assets/data/store';
    export default {
        name:'VideoPlayer',
        data(){
            return{
                store
            }
        }
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

.video-player{
    position: absolute;
    top: 0;
    bottom: 0;
    left:0;
    right: 0;
    background-color: rgba($color: #000000, $alpha: 0.6);
    z-index: 5000;
}
.btn-close{
    position: absolute;
    right: 0;
    top: 0;
    z-index: 5000;
    background-color: $colorHover;

}

</style>