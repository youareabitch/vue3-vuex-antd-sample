import { Rule } from "ant-design-vue/es/form";
import i18n from '../../plugins/i18n'
const { t } = i18n.global

export const EmailValidator = async (_rule: Rule, value: string) => {
    if (!value) {
        return Promise.reject(t('Forms.EmailRequired'));
    }
    const mailformat = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;
    if (value.match(mailformat)) {
        return Promise.resolve();
    }
    return Promise.reject(t('Forms.EmailInvalid'));
};