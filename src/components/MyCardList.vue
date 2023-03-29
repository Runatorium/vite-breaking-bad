
<template>
        <Card>
            :image="store."
        </Card>
</template>


<script>
import {store} from '../store.js';
import MyCards from '../components/MyCards.vue'

    export default{
        name: 'MyCardList',
        data() {
            return {
                store
            };
       
     },
     components:{
            MyCards,
        }
}
</script>

<style scoped>


</style>