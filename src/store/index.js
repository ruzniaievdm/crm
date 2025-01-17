import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import info from "./info"
import record from "./record"
import category from "@/store/category"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    error: null,
  },
  actions: {
    async fetchCurrency() {
      const key = process.env.VUE_APP_FIXER
      const res = await fetch(`http://data.fixer.io/api/latest?access_key=${key}&symbols=USD,EUR,UAH`)
      return await res.json()
    }
  },
  mutations: {
    setError(state, error) {
      state.error = error
    },
    clearError(state) {
      state.error = null
    }
  },
  getters: {
    error: s => s.error
  },
  modules: {
    auth, info, category, record
  }
})
