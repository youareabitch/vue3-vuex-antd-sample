<template>
    <a-layout class="layout">
        <a-layout-header>
            <a-row justify="space-between">
                <a-col>
                    <NavMenu></NavMenu>
                </a-col>

                <a-col>
                    <a-dropdown :trigger="['click']">
                        <a-button type="link" :icon="h(SettingOutlined)">{{ $t('Options') }}</a-button>
                        <template #overlay>
                            <a-menu>
                                <a-menu-item key="0">
                                    <a @click.prevent @click="onLocaleChange('en-US')">English</a>
                                </a-menu-item>
                                <a-menu-item key="1">
                                    <a @click.prevent @click="onLocaleChange('zh-TW')">中文</a>
                                </a-menu-item>
                            </a-menu>
                        </template>
                    </a-dropdown>
                </a-col>


            </a-row>

        </a-layout-header>
        <a-layout-content style="padding: 0 50px">
            <div :style="{ background: '#fff', padding: '24px', minHeight: '280px' }">
                <router-view />
            </div>
        </a-layout-content>
        <a-layout-footer style="text-align: center">
            Vue3 Vuex Sample with Antd.
        </a-layout-footer>
    </a-layout>
</template>

<script setup lang="ts">
import NavMenu from '../components/NavMenu.vue';
import { h } from 'vue';
import { SettingOutlined } from '@ant-design/icons-vue';
import { useI18n } from 'vue-i18n'

const translate = useI18n();

function onLocaleChange(localeValue: string) {
    translate.locale.value = localeValue;
}
</script>

<style scoped></style>