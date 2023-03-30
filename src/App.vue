<template>

  <MyHeader @research = "doResearch"/>
  <MyCards></MyCards>
  
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import MyCards from './components/MyCards.vue'
import { store } from './store.js';
import axios from 'axios'

export default{
  components:{
    MyHeader,
    MyCards,
  },
  
    async mounted() {
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
          doResearch(){
            store.urlApi += `${store.value}`;
            console.log(`${store.urlApi}`);
            this.cardResearch()
          },
        async cardResearch(){
          try { 
          const res = await axios.get(`${store.urlApi}`);
          this.store.cardList = res.data.data;
          console.log(this.store.cardList)
          store.urlApi = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype='
          }  catch(e){
          console.log(e)
          }
        }       
    },
  }
  
  
  
</script>




<style lang="scss">

@use './styles/general.scss'  

</style>
