<template>
    <a-row justify="center">
        <a-col>
            <h1>Counter</h1>
        </a-col>
    </a-row>

    <a-row justify="center">
        <a-col>
            <a-statistic title="Current Counter" :value="store.getters.getCounterState.count" />
        </a-col>
    </a-row>

    <a-row justify="center">
        <a-col>
            <a-space>
                <a-button type="primary" @click="onIncermentClick">Incerment</a-button>
                <a-button @click="onDecermentClick">Decerment</a-button>
                <a-button type="primary" danger @click="onIncermentByClick(5)">Incerment By 5</a-button>
            </a-space>
        </a-col>
    </a-row>
</template>

<script setup lang="ts">
import store from "@/store";
import { CounterActions } from "../constant/counter-actions.enum";

function onIncermentClick() {
    store.dispatch(CounterActions.incrementCounter);
}

function onDecermentClick() {
    store.dispatch(CounterActions.decrementCounter);
}

function onIncermentByClick(value: number) {
    store.dispatch(CounterActions.incrementCounterBy, { value });
}
</script>

<style scoped></style>