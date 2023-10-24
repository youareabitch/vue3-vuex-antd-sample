<template>
    <a-space>
        <a-button type="primary" @click="$emit('onIncerment')">{{ $t('Incerment') }}</a-button>
        <a-button @click="$emit('onDecerment')">{{ $t('Decerment') }}</a-button>
        <a-button type="primary" danger @click="$emit('onIncermentBy', 5)">{{ $t('IncermentBy', { value: '5' })
        }}</a-button>
    </a-space>
</template>

<script setup lang="ts">
import { defineEmits } from "vue";

defineEmits(['onIncerment', 'onDecerment', 'onIncermentBy'])
</script>

<style scoped></style>