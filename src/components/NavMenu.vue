<template>
    <a-menu v-model:selectedKeys="current" theme="dark" mode="horizontal" :items="items"
        @click="onMenuRoute" />

    <!-- <a-menu v-model:selectedKeys="current" theme="dark" mode="horizontal" :style="{ lineHeight: '64px' }">
        <a-menu-item v-for="item in menus" :key="item?.key" @click="onMenuClick(item.key)">
            {{ $t(item.label) }}
        </a-menu-item>
    </a-menu> -->
</template>

<script setup lang="ts">
import router from '../router';
import { Current, Items } from '@/constant/menu';

const current = Current;
const items = Items;

current.value = router.currentRoute.value.name ? [router.currentRoute.value.name.toString()] : ['counter'];

// watch(translate.locale, (newVal, oldVal) => {
//     msg.value = translate.getLocaleMessage(newVal);
// })

function onMenuClick(menuName: string) {
    // console.log(event);
    // const { keyPath } = event;
    router.push({ name: menuName });
}

function onMenuRoute(event: any) {
    const { keyPath } = event;
    router.push({ name: keyPath[0] });
}
</script>

<style scoped></style>