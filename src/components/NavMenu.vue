<template>
    <a-menu v-model:selectedKeys="current" theme="dark" mode="horizontal" :items="items" :style="{ lineHeight: '64px' }"
        @click="onMenuRoute" />

    <!-- <a-menu v-model:selectedKeys="current" theme="dark" mode="horizontal" :style="{ lineHeight: '64px' }">
        <a-menu-item v-for="item in menus" :key="item?.key" @click="onMenuClick(item.key)">
            {{ $t(item.label) }}
        </a-menu-item>
    </a-menu> -->
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { MenuProps } from 'ant-design-vue';
import router from '../router';
import { useI18n } from 'vue-i18n'

const translate = useI18n();
const local = translate.locale.value;

const current = ref<string[]>(['counter']);
const items = ref<MenuProps['items']>([
    {
        key: 'counter',
        label: translate.getLocaleMessage(local)['Counter'],
        title: 'Counter',
    },
    {
        key: 'employees',
        label: translate.getLocaleMessage(local)['Employees'],
        title: 'Employees',
    },
    {
        key: 'user-list',
        label: translate.getLocaleMessage(local)['UserList'],
        title: 'UserList',
    },
]);

const menus = ref<any[]>([
    {
        key: 'counter',
        label: 'Counter',
        title: 'Counter',
    },
    {
        key: 'employees',
        label: 'Employees',
        title: 'Employees',
    },
    {
        key: 'user-list',
        label: 'UserList',
        title: 'User List',
    },
]);

current.value = router.currentRoute.value.name ? [router.currentRoute.value.name.toString()] : ['counter'];

// watch(translate.locale, (newVal, oldVal) => {
//     items.value = items.value?.map((x: any) => {
//         const { title } = x;
//         console.log(title);
//         return {
//             ...x,
//             label: translate.getLocaleMessage(newVal)[title]
//         }
//     });
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