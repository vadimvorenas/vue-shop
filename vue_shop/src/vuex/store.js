import Vue from "vue"
import Vuex from "vuex"
import actions from './actions/actions'
import mutations from './mutations/mutations'
import getters from './getters/getters'

Vue.use(Vuex)

let store = new Vuex.Store({
    state: {
        products: [],
        cart: [],
        cart_total_cost: 0
    },
    mutations,
    actions,
    getters
})


export default store;
