<script>
export default{
    name: 'MyHeader'
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
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
    <li><button class="dropdown-item" type="button">Action</button></li>
    <li><button class="dropdown-item" type="button">Another action</button></li>
    <li><button class="dropdown-item" type="button">Something else here</button></li>
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