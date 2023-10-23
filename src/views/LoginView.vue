<template>
    <div class="centered">
        <a-row>
            <a-col>
                <img alt="Vue logo" src="../assets/logo.png">
            </a-col>

            <a-col>
                <a-row>
                    <a-col>
                        <a-typography-title>Vue3 Sample</a-typography-title>
                    </a-col>
                </a-row>

                <a-row>
                    <a-col>
                        <a-typography-title :level="2">with Vuex and Antd</a-typography-title>
                    </a-col>
                </a-row>
            </a-col>
        </a-row>

        <a-row justify="center">
            <a-col>
                <a-typography-title :level="3">Sign in</a-typography-title>
            </a-col>
        </a-row>

        <a-row justify="center">
            <a-col>
                <GoogleSignButton @login-success="login"></GoogleSignButton>
            </a-col>
        </a-row>
    </div>
</template>

<script setup lang="ts">
import GoogleSignButton from '@/components/GoogleSignButton.vue';
import router from '@/router';

function login(obj: any) {
    document.cookie = `userEmail=${obj.email}`;
    document.cookie = `userName=${obj.name}`;
    router.push({ name: 'counter' });
}
</script>

<style lang="scss" scoped>
.centered {
    position: fixed;
    top: 50%;
    left: 50%;
    /* bring your own prefixes */
    transform: translate(-50%, -50%);
}
</style>