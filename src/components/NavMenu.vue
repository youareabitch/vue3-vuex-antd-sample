<template>
      <a-menu v-model:selectedKeys="current" mode="horizontal" :items="items" @click="onMenuClick" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { MenuProps } from 'ant-design-vue';
import router from '../router';
const current = ref<string[]>(['counter']);
const items = ref<MenuProps['items']>([
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
    label: 'User List',
    title: 'User List',

  },
]);

function onMenuClick(event: any) {
  const { keyPath } = event;
  router.push({ name: keyPath[0] });
}
</script>

<style scoped>

</style>