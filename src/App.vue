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
          const res = await axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=${value}`);
          this.store.cardList = res.data.data;
          }  catch(e){
          console.log(e)
          }
      try{
        const cardresult = await axios.get('https://db.ygoprodeck.com/api/v7/archetypes.php');
        this.store.cardtype = cardresult.data
        console.log(cardresult.data)
      }catch(e){
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


<style lang="scss">

@use './styles/general.scss'  

</style>
