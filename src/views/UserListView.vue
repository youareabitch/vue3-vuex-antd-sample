<template>
    <a-spin :spinning="store.getters.getUserState.loading">
        <a-table :columns="columns" :data-source="store.getters.getUserState.userList" bordered>
        </a-table>
    </a-spin>
</template>

<script setup lang="ts">
import store from "@/store";

const columns = [
    {
        title: 'ID',
        dataIndex: 'id',
    },
    {
        title: 'Name',
        dataIndex: 'name',
    },
    {
        title: 'Email',
        dataIndex: 'email',
    },
    {
        title: 'Website',
        dataIndex: 'website',
    },
    {
        title: 'Company',
        dataIndex: ['company', 'name'],
    },
    {
        title: 'Location',
        dataIndex: ['address', 'city'],
    },
];

if (!store.getters.getUserState.userList.length) {
    store.dispatch('userListModule/getUserList')
}
</script>

<style scoped></style>