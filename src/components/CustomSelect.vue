<template>
    <label for="">Select color</label>
    <select v-model="color">
        <option value="red">rojo</option>
        <option value="green">verde</option>
        <option value="blue">azul</option>
    </select>
    <h4>color seleccionado: {{color}}</h4>
    <input type="text" v-model="texto"/>
    <h4>Texto: {{ texto }}</h4>
</template>

<script lang="ts">
    import { defineComponent, ref } from "vue";

    export default defineComponent({
        setup(){
            const color = ref <string> ("blue");
            const texto = ref <string> ("");
            return{
                color,
                texto,
            }
        },
    });
</script>
