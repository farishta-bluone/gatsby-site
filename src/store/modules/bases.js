import bases from '@/services/bases';

const state = {
    dialog: false,
    baseList: []
}

const getters = {
    // getForm: state => state.form
}

const actions = {
    getBaseList({ state }) {
        return bases.get()
          .then((res) => {
            state.baseList = res.data.rows
          })
          .catch((error) => console.log("error", error))
      },
}
const mutations = {
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}