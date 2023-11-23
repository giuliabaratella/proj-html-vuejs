<template>
  <LoaderComponent v-if="store.loading"/>
  <div class="scroll-up d-flex justify-content-center align-items-center">
    <a href="#header"><i class="fas fa-angle-double-up"></i></a>
  </div>
  <HeaderComponent/>
  <HeroComponent/>
  <FeaturesComponent/>
  <BattleComponent/>
  <QuickFactsComponent/>
  <LiveStreamingComponent/>
  <FeedbackComponent/>
  <AdvBanner/>
  <LatestNewsComponent/>
  <FooterComponent/>
</template>

<script>
import { store } from './assets/data/store';
import HeaderComponent from './components/HeaderComponent.vue';
import HeroComponent from './components/HeroComponent.vue';
import FeaturesComponent from './components/FeaturesComponent.vue';
import BattleComponent from './components/BattleComponent.vue';
import QuickFactsComponent from './components/QuickFactsComponent.vue';
import LiveStreamingComponent from './components/LiveStreamingComponent.vue';
import FeedbackComponent from './components/FeedbackComponent.vue';
import AdvBanner from './components/AdvBannerComponent.vue';
import LatestNewsComponent from './components/LatestNewsComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import LoaderComponent from './components/LoaderComponent.vue';

  export default {
    components:{
      HeaderComponent,
      HeroComponent,
      FeaturesComponent,
      BattleComponent,
      QuickFactsComponent,
      LiveStreamingComponent,
      FeedbackComponent,
      AdvBanner,
      LatestNewsComponent,
      FooterComponent,
      LoaderComponent,
    },
    data(){
      return{
        store,
      }
    },
    mounted(){
      setTimeout(()=>{
        this.store.loading = false;
      },2000)
    }
    
  }
</script>

<style lang="scss" scoped>
@use './assets/styles/partials/variables' as *;

.scroll-up{
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 6000;
  width: 60px;
  height: 60px;
  background-color: $colorHover;
  border-radius: 10px;
  font-size: 1.3em;
  a{
    color:$colorBlack !important;
    &:hover{
      color: $colorWhite !important;
    }
  }
}


</style>