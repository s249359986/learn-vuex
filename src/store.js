import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
let store = new Vuex.Store({
    state: {
        orders: [],
        curOrder: {
            start: "",
            end: ""
        }
    },
    getters: {
    },
    mutations: {
        setOrderList(state, data) {
            state.orders = data
        },
        setCurOrder(state, data) {
            state.curOrder = data
        }
    },
    actions: {
        async getList({
            commit
        }, params) {
            let data = await axios.get("path/orders", {
                params
            })
            commit('setOrderList', data)
        }
    }
});
export default store
