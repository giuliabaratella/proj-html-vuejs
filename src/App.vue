<template>
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
    },
    data(){
      return{
        store,
      }
    }
    
  }
</script>

<style lang="scss" scoped>


</style>