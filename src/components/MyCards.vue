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
.containermain{
    background-color: rgb(215, 117, 13);
    display: flex;
    justify-content: center;
    margin-top: 10px;
    padding-top: 80px;
    padding-bottom: 80px;
    min-height: 100vh;
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
</style>