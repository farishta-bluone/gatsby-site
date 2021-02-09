import Vue from 'vue'
import Vuex from 'vuex'
import moment from "moment"

import coil from '@/services/coil';
import slittedCoil from '@/services/slittedCoil';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    slittedDate: null,
    slittedTime: null,
    slits: [],
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
    getSlits({state}, payload) {
      return coil.getSlits(payload.id)
          .then((res) => {
            let row = res.data.rows[0]
            state.selRows = [{id: row.parent_id, brand_no: row.brand_no, weight: row.weight, thickness: row.thickness, width: row.width, od: row.od, company: row.company, formulated_weight: row.formulated_weight}]
            state.slits = res.data.rows;

            let date = moment(state.slits[0].slit_date).format("YYYY-MM-DD hh:mm:ss").split(" ");
            state.slittedDate = date[0];
            state.slittedTime = date[1].split(":")[0] + ':' + date[1].split(":")[1]
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
