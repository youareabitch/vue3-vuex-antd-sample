<template>
    <a-menu v-model:selectedKeys="current" theme="dark" mode="inline" :items="items" @click="onMenuRoute" />
</template>

<script setup lang="ts">
import { Current, Items } from '@/constant/menu';
import router from '@/router';

const current = Current;
const items = Items;

current.value = router.currentRoute.value.name ? [router.currentRoute.value.name.toString()] : ['counter'];

const onMenuRoute = (event: any) => {
    const { keyPath } = event;
    router.push({ name: keyPath[0] });
}
</script>

<style scoped></style>