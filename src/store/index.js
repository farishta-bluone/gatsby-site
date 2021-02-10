import Vue from 'vue'
import Vuex from 'vuex'
import moment from "moment"

import coils from '@/services/coils';
import companies from '@/services/companies';
import shifts from '@/services/shifts';
import slittedCoils from '@/services/slittedCoils';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    miniMenu: true,
    shifts: [],
    slittedDate: null,
    slittedShift: null,
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
    companies: [],
  },
  mutations: {
      
  },
  actions: {
    getSlittedCoils({state}, payload) {
      if(!payload) payload = {}
      state.isLoading = true
      return slittedCoils.get()
          .then((res) => {
              state.slittedCoils = res.data.rows;
              // state.totalRows = res.data.count;
          })
          .catch((error) => console.log("error",error))
          .finally(() => state.isLoading = false)
    },
    getCompanies({state}) {
      return companies.get()
        .then((res) => {
          state.companies = res.data.rows
        })
        .catch((error) => console.log("error",error))
    },
    getShifts({state}) {
      return shifts.get()
        .then((res) => {
          state.shifts = res.data.rows
        })
        .catch((error) => console.log("error",error))
    },
    getSlits({state}, payload) {
      return coils.getSlits(payload.id)
          .then((res) => {
            let row = res.data.rows[0]
            state.selRows = [{id: row.parent_id, brand_no: row.brand_no, weight: row.weight, thickness: row.thickness, width: row.width, company: row.company, formulated_weight: row.formulated_weight}]
            state.slits = res.data.rows;

            let date = moment(state.slits[0].slit_date).format("YYYY-MM-DD hh:mm:ss").split(" ");
            state.slittedDate = date[0];
            state.slittedShift = state.slits[0].slit_shift
          })
          .catch((error) => console.log("error",error))
          .finally(() => state.isLoading = false)
    },
    getCoils({state}, payload) {
        if(!payload) payload = {}
        state.isLoading = true
        return coils.get(payload)
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
        return coils.delete(payload)
            .then((res) => {
              console.log("res",res)
            })
            .catch((error) => console.log("error",error))
            .finally(() => state.isLoading = false)
      }
  },
  modules: {
  }
})
