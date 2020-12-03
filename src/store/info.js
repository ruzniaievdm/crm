import firebase from "firebase/app"

export default {
  state: {
    info: {}
  },
  actions: {
    async fetchInfo({dispatch, commit}) {
      try {
        const uid = await dispatch('getUid')
        const info = (await firebase.database().ref(`/users/${uid}/info`).once('value')).val()
        commit('SET_INFO', info)
      } catch (e) {
        commit('setError', e)
      }
    },
    async updateInfo({dispatch, commit, getters}, toUpdate) {
      try {
        const uid = await dispatch('getUid')
        const updateData = {...getters.info, ...toUpdate}
        await firebase.database().ref(`/users/${uid}/info`).update(updateData)
        commit('SET_INFO', updateData)
      } catch (e) {
        commit('setError', e)
      }
    }
  },
  mutations: {
    ['SET_INFO'](state, info) {
      state.info = info
    },
    ['CLEAR_INFO'](state) {
      state.info = {}
    }
  },
  getters: {
    info: s => s.info
  }
}