<template>
    <a-statistic :title="$t('CurrentCounter')" :value="value" />
</template>

<script setup lang="ts">
import { defineProps } from "vue";

defineProps({
    value: {
        type: String,
        required: true,
        default() {
            return 0;
        }
    }
})
</script>

<style scoped></style>