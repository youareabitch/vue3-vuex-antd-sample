import { createStore } from 'vuex'
import counterModule from './modules/counter.module'
import userListModule from './modules/user-list.module';

export default createStore({
  state: {
    counterState: counterModule.state,
    userState: userListModule.state,
  },
  getters: {
    getCounterState: (state: any) => {
      return state.counterState.counter;
    },
    getUserState: (state: any) => {
      return state.userState.user;
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    counterModule,
    userListModule
  }
})
