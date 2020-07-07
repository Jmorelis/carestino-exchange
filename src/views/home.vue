<template>
  <div>
    <bounce-loader :loading="isLoading" :color="'#68d391'" :size="100" />
    <care-assests-table v-if="!isLoading" :assets="assets" />
  </div>
</template>

<script>
import CareAssestsTable from "@/components/CareAssestsTable";
import api from '@/api'

export default {

  name: "home",
  components: { CareAssestsTable },

  data (){
    return{
      isLoading:false,
      assets:[]
        
    }
  },

  created(){
    this.isLoading=true
    api.getAssets()
    .then(assets=>(this.assets = assets))    
    .finally(()=> (this.isLoading=false))
  }
};
</script>
