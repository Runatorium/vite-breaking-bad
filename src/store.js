import { reactive } from 'vue';

export const store = reactive(
    {
        cardList: [],
        cardtype:[],
        value: "",
        urlApi: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=',
    }
);