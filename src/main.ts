import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
// import { vue3GoogleLogin } from "vue3-google-login";
import GoogleSignInPlugin from "vue3-google-signin"
import i18n from './plugins/i18n'
import { createDeviceDetector } from "next-vue-device-detector";

export const device = createDeviceDetector()

const app = createApp(App);
app.use(GoogleSignInPlugin, {
    clientId: '587212867118-rb1b6ubqdnfvb32ikepjtgvhufnt349r.apps.googleusercontent.com',
  }).use(Antd).use(i18n).use(device).use(store).use(router).mount('#app'); 