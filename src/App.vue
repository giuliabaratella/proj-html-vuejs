<template>
  <HeaderComponent/>
  <HeroComponent/>
  <FeaturesComponent/>
  <BattleComponent/>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import HeroComponent from './components/HeroComponent.vue';
import FeaturesComponent from './components/FeaturesComponent.vue';
import BattleComponent from './components/BattleComponent.vue';


  export default {
    components:{
      HeaderComponent,
      HeroComponent,
      FeaturesComponent,
      BattleComponent,
    }
    
  }
</script>

<style lang="scss" scoped>


</style>