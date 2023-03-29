<script>
import MyHeader from './components/MyHeader.vue'
import MyCardList from './components/MyCardList.vue'
import { store } from './store.js';

export default{
  components:{
    MyHeader,
    MyCardList,
  },
    data() {
        return {
          store
        }
      },
    methods: {
        getCard() {
          axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php')
          .then(response => {
            this.store.cardList = response.data.results;
        });
       }
    },
  }
  console.log(store.cardList)
  
  
</script>

<template>

<MyHeader></MyHeader>

</template>


<style scoped>

</style>
