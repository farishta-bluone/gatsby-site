import annealing from "../../services/annealing"

const state = {
    batches: [],
    dialog: false,
    selItem: [],
    report: false,
    drawer: false,
    batchId: null
}

const getters = {
    // getForm: state => state.form
}
const actions = {
    getBatches({ state }, payload) {
        if (!payload) payload = {}
        return annealing.get(payload)
        .then((res) => {
            state.batches = res.data.rows
        })
        .catch((error) => console.log("error", error))
    }
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