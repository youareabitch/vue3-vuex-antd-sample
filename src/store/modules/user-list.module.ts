import { Module } from "vuex";
import axios from "axios"

const userListModule: Module<UserListState, any> = {
    namespaced: true,
    state: {
        user: {
            userList: [],
            loading: false
        }
    },
    mutations: {
        SEND_GET_USER_REQ: (state: any) => {
            state.user.loading = true;
        },
        SUCCESS_GET_USER_REQ: (state: any, payload) => {
            state.user.loading = false;
            state.user.userList = payload.data;
        }
    },
    actions: {
        getUserList: ({ commit }) => {
            commit('SEND_GET_USER_REQ');
            const apiUrl = 'https://jsonplaceholder.typicode.com/users';
            axios.get(apiUrl).then(({ data }) => {
                commit('SUCCESS_GET_USER_REQ', { data });
            });
        }
    }
}

interface UserListState {
    user: {
        userList: any[];
        loading: boolean;
    };
}

export default userListModule;