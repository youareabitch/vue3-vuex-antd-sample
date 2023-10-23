<template>
    <a-row justify="center">
        <a-col>
            <h1>{{ $t('Counter') }}</h1>
        </a-col>
    </a-row>

    <a-row justify="center">
        <a-col>
            <a-statistic :title="$t('CurrentCounter')" :value="store.getters.getCounterState.count" />
        </a-col>
    </a-row>

    <a-row justify="center">
        <a-col>
            <a-space>
                <a-button type="primary" @click="onIncermentClick">{{ $t('Incerment') }}</a-button>
                <a-button @click="onDecermentClick">{{ $t('Decerment') }}</a-button>
                <a-button type="primary" danger @click="onIncermentByClick(5)">{{ $t('IncermentBy', { value: '5' })
                }}</a-button>
            </a-space>
        </a-col>
    </a-row>
</template>

<script setup lang="ts">
import store from "@/store";
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