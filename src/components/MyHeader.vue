<script>
import { store } from '../store.js'

export default{
    name: 'MyHeader',
    data() {
            return {
              store
            }
          },
          methods:{
            eventreader(event){
                store.value = event.target.value
                this.$emit('research');
            }
          }
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
        <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
        </button>
        <select @change=" eventreader($event)" class="dropdown-menu" aria-labelledby="dropdownMenu2">
            <option v-for="type, in store.cardtype" :value ="type.archetype_name">{{type.archetype_name}}
            </option>
        </select>
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
    .dropdown{
        position: absolute;
        margin-left: 10%;
        margin-top: 20px;

    }

</style>