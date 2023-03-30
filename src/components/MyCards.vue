<script>
import { store } from '../store';

export default {
        name: 'MyCards',
        /*
        props: {
            image: String,
            name: String,
            type: String,
        },
        */
        data() {
            return {
              store
            }
          },
    }
</script>

<template>
    <div class="blackbanner">
        <div>
            <h3>Ci sono {{store.cardList.length}} di questo tipo</h3>
        </div>
    </div>
    <div class="containermain">
        <div class="innercontainer">
            <div class="card" v-for="(card) in this.store.cardList">
                <img :src="card.card_images[0].image_url" alt="">
                <h4>{{card.name}}</h4>
                <p>{{card.archetype}}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>

.blackbanner{
    background-color: black;
    width: 100%;
    height: 50px;
}
.containermain{
    background-color: rgb(215, 117, 13);
    display: flex;
    justify-content: center;
    padding-top: 80px;
    padding-bottom: 80px;
}
.innercontainer{
    background-color: white;
    padding-top: 40px;
    padding-left: 10px;
    padding-right: 10px;
    width: 80%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
.card{
    margin: 10px;
    padding: 10px;
    width: 200px;
    background-color: rgb(215, 117, 13)
}

h3{
    color: white;
    font-size: 14px;
    text-align: center;
}
</style>