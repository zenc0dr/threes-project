<template>
    <MilkdownProvider>
        <slot />
    </MilkdownProvider>
</template>

<script setup>
import { MilkdownProvider } from '@milkdown/vue'
</script>
