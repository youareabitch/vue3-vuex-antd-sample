<template>
    <a-row justify="center">
        <a-col>
            <h1>{{ $t('Counter') }}</h1>
        </a-col>
    </a-row>

    <a-row justify="center">
        <a-col>
            <CounterDisplay :value="store.getters.getCounterState.count"></CounterDisplay>
        </a-col>
    </a-row>

    <a-row justify="center">
        <a-col>
            <CounterButtons @on-incerment="onIncermentClick" @on-decerment="onDecermentClick" @on-incerment-by="onIncermentByClick"></CounterButtons>
        </a-col>
    </a-row>
</template>

<script setup lang="ts">
import store from "@/store";
import CounterDisplay from "../components/Counter/CounterDisplay.vue";
import CounterButtons from "../components/Counter/CounterButtons.vue";
import { CounterActions } from "../constant/counter-actions.enum";

function onIncermentClick() {
    store.dispatch(CounterActions.incrementCounter).then((x) => {
        console.log(x);
    });
}

function onDecermentClick() {
    store.dispatch(CounterActions.decrementCounter);
}

function onIncermentByClick(value: number) {
    store.dispatch(CounterActions.incrementCounterBy, { value });
}
</script>

<style scoped></style>