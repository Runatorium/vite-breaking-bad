<script>
export default {
        name: 'MyCards',
        props: {
            image: String,
            name: String,
            type: String,
        },
        data() {
            return {
              store
            }
          },
    }
</script>

<template>
    <div v-for="(card, index) in this.store.cardList">
        <img :src="this.store.cardList[index].card_images[0].image_url" alt="">
        <h4>{{this.store.cardList[index].name}}</h4>
        <p>{{this.store.cardList[index].archetype}}</p>
    </div>
</template>

<style scoped>

</style>