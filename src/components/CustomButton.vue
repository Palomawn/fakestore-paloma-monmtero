<template>
    <button @click="$emit('clicked')">Click me!
        <slot name="left-icon"></slot>
        <slot></slot>
    </button>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
    name:'CustomButton',
})
</script>

