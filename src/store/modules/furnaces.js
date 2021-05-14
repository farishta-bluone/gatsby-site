import furnaces from '@/services/furnaces';

const state = {
    dialog: false,
    furnaceList: []
}

const getters = {
    // getForm: state => state.form
}

const actions = {
    getFurnaceList({ state }) {
        return furnaces.get()
          .then((res) => {
            state.furnaceList = res.data.rows
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