const counterModule = {
    namespaced: true,
    state: {
        counter: {
            count: 0
        }
    },
    mutations: {
        INCR_COUNTER: function (state: any) {
            state.counter.count++;
        },
        DECR_COUNTER: function (state: any) {
            state.counter.count--;
        },
        INCR_COUNTER_BY: function (state: any, payload: any) {
            state.counter.count += payload.value;
        },
    },
    actions: {
        incrementCounter: function ({ commit }: any) {
            return commit('INCR_COUNTER');
        },
        decrementCounter: function ({ commit }: any) {
            return commit('DECR_COUNTER');
        },
        incrementCounterBy: function ({ commit }: any, payload: any) {
            return commit('INCR_COUNTER_BY', payload);
        }
    },
}

export default counterModule