<script>
import MyHeader from './components/MyHeader.vue'
import { store } from './store.js';
import axios from 'axios'

export default{
  components:{
    MyHeader,
  },

    async mounted() {
      try { 
          const res = await axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php')

          this.store.cardList = res.data.data;
          console.log(this.store.cardList[0].archetype);
          }  catch(e){
          console.log(e)
          }
        },

        data() {
            return {
              store
            }
          },
        methods: {
     
    },
  }
  
  
  
</script>

<template>

<MyHeader></MyHeader>

</template>


<style scoped>

</style>
