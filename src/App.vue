<template>
  <HeaderComponent/>
  <HeroComponent/>
  <FeaturesComponent/>
  <BattleComponent/>
  <QuickFactsComponent/>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import HeroComponent from './components/HeroComponent.vue';
import FeaturesComponent from './components/FeaturesComponent.vue';
import BattleComponent from './components/BattleComponent.vue';
import QuickFactsComponent from './components/QuickFactsComponent.vue';



  export default {
    components:{
      HeaderComponent,
      HeroComponent,
      FeaturesComponent,
      BattleComponent,
      QuickFactsComponent,
    }
    
  }
</script>

<style lang="scss" scoped>


</style>