import Vue from 'vue'
import Vuex from 'vuex'

import coil from '@/services/coil';
import slittedCoil from '@/services/slittedCoil';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    slittedCoils: [],
    selRows: [],
    coilId: null,
    coilData: {},
    totalRows: 0,
    coils: [],
    isLoading: false, 
    btnColor: '#9932CC', 
    coilDrawer: false,
    slitDrawer: false,
    companies: [{id:1, name: 'SAIL' },{id:2, name: 'Tata Steel Ltd' },{id:3, name: 'Jindal Steel Ltd'}],
  },
  mutations: {
      
  },
  actions: {
    getSlittedCoils({state}, payload) {
      if(!payload) payload = {}
      state.isLoading = true
      return slittedCoil.get()
          .then((res) => {
              state.slittedCoils = res.data.rows;
              // state.totalRows = res.data.count;
          })
          .catch((error) => console.log("error",error))
          .finally(() => state.isLoading = false)
    },
    getCoils({state}, payload) {
        if(!payload) payload = {}
        state.isLoading = true
        return coil.get(payload)
            .then((res) => {
                state.coils = res.data.rows;
                state.totalRows = res.data.count;
            })
            .catch((error) => console.log("error",error))
            .finally(() => state.isLoading = false)
      },
      deleteCoil({state}, payload) {
        if(!payload) payload = {}
        state.isLoading = true
        return coil.delete(payload)
            .then((res) => {
              console.log("res",res)
                // state.coils = res.data.rows;
                // state.totalRows = res.data.count;
            })
            .catch((error) => console.log("error",error))
            .finally(() => state.isLoading = false)
      }
  },
  modules: {
  }
})
