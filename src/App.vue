<template>
  <NavBar 
    title="Welcome to FakeStore!"
    :color="'red'"  
    :links="[
      {label: 'About |', link:'/about'}, 
      {label: ' Profile |', link:'#'} ,
      {label: ' Log Out', link:'#', style:'link-special'} , 
      ]"
      
    @buttonClicked="alertaClick($event)"
    />
  <!--SON EQUIVALENTES-->
  <!--@buttonClicked="alertaClick"-->

<NavBarlinks/>

<ProductCard>
  <template v-slot:title-product>
      <h3>Card Title</h3>
  </template>
  <template v-slot:body-product>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est fugiat natus modi quas in quisquam alias ratione suscipit veritatis reprehenderit pariatur, soluta placeat autem officia non dolorum, qui iusto consectetur.</p>
  </template>
  <template v-slot:price-product>
    <span>Price</span>
  </template>
  <template v-slot:picture-product>
    <img src="plant.png" alt="Plant" width="60" height="60">
  </template>
</ProductCard>


<router-view/>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavBar from "./components/NavBar.vue";
import {Link} from "@/interfaces/link";
import ProductCard from './components/ProductCard.vue';
import NavBarlinks from './components/NavBarlinks.vue';


export default defineComponent({
  name: 'App-Component',
  components: {
    NavBar,
    ProductCard,
    NavBarlinks
  },
  setup() {
    return{
      alertaClick: (link: Link) => alert (link.label + 'Pulsado')
    }
  }
})
</script>


<style>
*{
margin: 0;
padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
