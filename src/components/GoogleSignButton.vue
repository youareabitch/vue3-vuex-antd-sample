<template>
    <!-- <a-button class="google-sign-in-button" type="primary" :icon="h(GoogleOutlined)" @click="signIn">Signin with
        Google</a-button> -->
    <GoogleSignInButton @success="handleLoginSuccess" @error="handleLoginError"></GoogleSignInButton>
</template>

<script setup lang="ts">
import { defineEmits } from "vue";
import {
    GoogleSignInButton,
    type CredentialResponse,
} from "vue3-google-signin";

const emit = defineEmits(['login-success']);

// handle success event
const handleLoginSuccess = (response: CredentialResponse) => {
    const { credential } = response;
    const obj = parseJwt(credential);
    emit('login-success', obj);
};

// handle an error event
const handleLoginError = () => {
    console.error("Login failed");
};

function parseJwt(token: string | undefined) {
    if (token) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        return JSON.parse(jsonPayload);
    }

    return {};
}
</script>

<style scoped></style>