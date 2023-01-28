<template>
<nav>
    <div class="Logo">
        <h4>{{title}}</h4>
    </div>
    <span>{{ greeting }}</span>
    <div class="Links" v-if="links">
         <a 
            v-for="link in links" 
            :key="link.label" 
            :href="link.link"
            :class="link.style" 
            target="_blank"
            >{{link.label}}</a>  -->
        <!-- <button
            v-for="link in links" 
            :key="link.label"
            @click="$emit('buttonClicked', link)"
        > {{ link.label }}</button> -->
        <button
            v-for="link in links" 
            :key="link.label"
            @click="onClick(link    )"
        > {{ link.label }}</button>
        
    </div>
</nav>

</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';
import { Link } from "@/interfaces/link";

interface NavBarProps{
    title: string,
    links: Link[],
    color?: string,
}

export default defineComponent({
    name: 'NavBar',
    emits:['buttonClicked'],
    props: {
        title: {
            type: String,
            required: true
        },
        links: {
            type: Array as PropType<Link[]> ,
            default(): Link[] {
                return [ 
                    {label: 'Products-sample', link:'#'}, 
                    {label: 'Profile-sample', link:'#' },
                ];
            },               
        },
        color: {
            type:String 
        }
    },
    setup(props: NavBarProps, ctx){
        //variable reactiva: espera tener un valor, y según este valor cambiará a lo que esté establecido
        const greeting= ref<string>('Saludos');
        if(props.color === 'red'){
            greeting.value = 'Feliz Navidad'
        }
        return{
            greeting,
            onClick: (link: Link) =>{
                console.log(link);
                ctx.emit('buttonClicked', link)
            }
        }
    }

})
</script>


<style scoped>
nav {
    padding: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgb(249, 252, 255);
}

nav a {
  font-weight: 600;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.link-special{
    color:red;
}

</style>