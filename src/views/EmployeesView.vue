<template>
    <a-row :gutter="16">
        <a-col :span="12">
            <h1>Employees</h1>
            <a-list size="large" bordered :data-source="userState.userList">
                <template #renderItem="{ item }">
                    <a-list-item :style="{ background: item.selected ? 'lightgreen' : 'white' }" @click="test(item)">
                        <a-checkbox v-model:checked="item.selected" style="margin-right: 16px;"></a-checkbox>{{ item.name
                        }}</a-list-item>
                </template>
            </a-list>
        </a-col>

        <a-col :span="12">
            <h1>Employees Detail</h1>
            <template v-for="user in userState.userList" :key="user.id">
                <a-card v-if="user.selected" style="margin-bottom: 8px;" :title="user.name">
                    <p>{{ $t('Forms.Email') }}：{{ user.email }}</p>
                    <p>{{ $t('Forms.Company') }}：{{ user.company.name }}</p>
                    <p>{{ $t('Forms.Location') }}：{{ user.address.city }}</p>
                </a-card>
            </template>
        </a-col>
    </a-row>
</template>

<script setup lang="ts">
import store from "@/store";

const userState = store.getters.getUserState;

if (!userState.userList.length) {
    store.dispatch('userListModule/getUserList')
}

const test = (item: any) => {
    if (item.selected) {
        item.selected = false;
    } else {
        item.selected = true;
    }
}
</script>

<style scoped lang="scss">

</style>