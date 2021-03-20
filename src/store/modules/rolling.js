const state = {
    selRows: [],
    dialog: false,
    preview: false,
}

const getters = {
    // getForm: state => state.form
}

const actions = {
}
const mutations = {
    SET_DATA(state, data) {
        state.authors = data;
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}