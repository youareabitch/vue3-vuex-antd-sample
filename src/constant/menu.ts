import { MenuProps } from "ant-design-vue";
import { ref } from "vue";
import i18n from '../plugins/i18n'
const { t } = i18n.global

export const Current = ref<string[]>(['counter']);
export const Items = ref<MenuProps['items']>([
    {
        key: 'counter',
        label: t('Counter'),
        title: 'Counter',
    },
    {
        key: 'employees',
        label: t('Employees'),
        title: 'Employees',
    },
    {
        key: 'user-list',
        label: t('UserList'),
        title: 'UserList',
    },
    {
        key: 'forms',
        label: t('FormsMenu'),
        title: 'Forms',
    },
]);