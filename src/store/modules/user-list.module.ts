import { Module } from "vuex";
import axios from "axios"
import i18n from '../../plugins/i18n'
const { t } = i18n.global

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
        },
        ADD_USER: (state: any, user) => {
            state.user.userList.push(user);
        },
        SUCCESS_ADD_USER: (state: any) => {
            state.user.loading = false;
        }
    },
    actions: {
        getUserList: ({ commit }) => {
            commit('SEND_GET_USER_REQ');
            const apiUrl = 'https://jsonplaceholder.typicode.com/users';
            axios.get(apiUrl).then(({ data }) => {
                commit('SUCCESS_GET_USER_REQ', { data });
            });
        },
        addUser: ({ commit }, user) => {
            commit('SEND_GET_USER_REQ');
            console.log(user);
            return new Promise((resolve) => {
                setTimeout(() => {
                    commit('ADD_USER', user);
                    commit('SUCCESS_ADD_USER');
                    resolve(t('Forms.UserCreateSuccess'));
                }, 1000)
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