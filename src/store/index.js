import Vue from 'vue'
import Vuex from 'vuex'

import list from '@/services/list';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    totalRows: 0,
    coils: [],
    isLoading: false, 
    btnColor: '#9932CC', 
    coilDrawer: false,
    companies: [{id:1, name: 'SAIL' },{id:2, name: 'Tata Steel Ltd' },{id:3, name: 'Jindal Steel Ltd'}],
  },
  mutations: {
      
  },
  actions: {
    getCoils({state}, payload) {
        if(!payload) payload = {}
        state.isLoading = true
        return list.get(payload)
            .then((res) => {
                state.coils = res.data.rows;
                state.totalRows = res.data.count;
            })
            .catch((error) => console.log("error",error))
            .finally(() => state.isLoading = false)
      }
  },
  modules: {
  }
})
