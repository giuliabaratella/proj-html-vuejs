<template>
  <HeaderComponent/>
  <HeroComponent/>
  <FeaturesComponent/>
  <BattleComponent/>
  <QuickFactsComponent/>
  <LiveStreamingComponent/>
  <FeedbackComponent/>
  <AdvBanner/>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import HeroComponent from './components/HeroComponent.vue';
import FeaturesComponent from './components/FeaturesComponent.vue';
import BattleComponent from './components/BattleComponent.vue';
import QuickFactsComponent from './components/QuickFactsComponent.vue';
import LiveStreamingComponent from './components/LiveStreamingComponent.vue';
import FeedbackComponent from './components/FeedbackComponent.vue';
import AdvBanner from './components/AdvBannerComponent.vue';






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
    }
    
  }
</script>

<style lang="scss" scoped>


</style>