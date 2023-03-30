<script>
import { store } from '../store.js'

export default{
    name: 'MyHeader',
    data() {
            return {
              store
            }
          },
}

</script>

<template>
    <div>
        <img src="../assets/Yu-Gi-Oh!.svg" alt="">
        <h1>
            Yu-Gi-Oh API
        </h1>
    </div>
    <div class="dropdown">
        <input v-model="store.value"   type="text" placeholder="Archetype">
        <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
            <li v-for="type, in store.cardtype"><button class="dropdown-item" type="button">{{type.archetype_name}}</button></li>
        </ul>
    </div>

</template>

<style scoped>
    img{
        vertical-align: middle;
        display: inline;
        height: 40px;
        width: 120px;
    }
    h1{
        vertical-align: middle;
        display:inline
    }

</style>