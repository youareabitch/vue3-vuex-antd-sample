<template>
    <a-spin :spinning="userState.loading">
        <a-form ref="formRef" name="custom-validation" :model="formState" :rules="rules" v-bind="layout"
            @finish="formSubmit">
            <a-form-item has-feedback :label="$t('Forms.Name')" name="name">
                <a-input v-model:value="formState.name" autocomplete="off" />
            </a-form-item>

            <a-form-item has-feedback :label="$t('Forms.Email')" name="email">
                <a-input v-model:value="formState.email" autocomplete="off" />
            </a-form-item>

            <a-form-item has-feedback :label="$t('Forms.Website')" name="website">
                <a-input v-model:value="formState.website" autocomplete="off" />
            </a-form-item>

            <a-form-item has-feedback :label="$t('Forms.Company')" name="company">
                <a-input v-model:value="formState.company" autocomplete="off" />
            </a-form-item>

            <a-form-item has-feedback :label="$t('Forms.Location')" name="location">
                <a-input v-model:value="formState.location" autocomplete="off" />
            </a-form-item>

            <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
                <a-button type="primary" html-type="submit">{{ $t('Forms.Submit') }}</a-button>
                <a-button style="margin-left: 10px" @click="resetForm">{{ $t('Forms.Reset') }}</a-button>
            </a-form-item>
        </a-form>
    </a-spin>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import type { Rule } from 'ant-design-vue/es/form';
import type { FormInstance } from 'ant-design-vue';
import { notification } from 'ant-design-vue';
import { useI18n } from "vue-i18n";
import { EmailValidator } from "../constant/validator/forms.validator";
import store from '@/store';

const translate = useI18n();
const locale = translate.locale.value;
const msg: any = translate.getLocaleMessage(locale)['Forms'];

const userState = store.getters.getUserState;

interface FormState {
    id: number,
    name: string;
    email: string;
    website: string;
    company: string;
    location: string;
}
const formRef = ref<FormInstance>();
const formState = reactive<FormState>({
    id: 0,
    name: '',
    email: '',
    website: '',
    company: '',
    location: '',
});

const rules: Record<string, Rule[]> = {
    name: [{ required: true, message: msg.NameRequired, trigger: 'change' }],
    email: [{ required: true, validator: EmailValidator, trigger: 'change' }],
    website: [{ required: true, message: msg.WebsiteRequired, trigger: 'change' }],
    company: [{ required: true, message: msg.CompanyRequired, trigger: 'change' }],
    location: [{ required: true, message: msg.LocationRequired, trigger: 'change' }],
};
const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 10 },
};
const formSubmit = async (values: FormState) => {
    if (userState.userList.length < 1) {
        // TO DO: await not working find another way to implement
        await store.dispatch('userListModule/getUserList');
    }

    const id = userState.userList.length + 1;
    values.id = id;

    store.dispatch('userListModule/addUser', values).then((x) => {
        notification.success({
            message: x,
            placement: 'bottomRight'
        })
    });
};
const resetForm = () => {
    formRef.value?.resetFields();
};
</script>

<style scoped></style>