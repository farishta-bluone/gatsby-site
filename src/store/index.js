import Vue from 'vue'
import Vuex from 'vuex'
import moment from "moment"

import coils from '@/services/coils';
import companies from '@/services/companies';
import shifts from '@/services/shifts';
import slittedCoils from '@/services/slittedCoils';
import thicknesses from '@/services/thicknesses';
import users from '@/services/users';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: {},
    users: [],
    slitCards: [{id:1, thickness: null, slittedCoils: []}],
    thicknessList: [],
    previewShift: null,
    previewDate: null,
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
      checkPageAccess(state,name) {
        const access = JSON.parse(localStorage.getItem('privileges'))
        return access[`${name}`]
      }
  },
  actions: {
    getSlittedCoils({state}, payload) {
      if(!payload) payload = {}
      state.isLoading = true
      return slittedCoils.get(payload)
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
    getUsers({state}, payload) {
      if(!payload) payload = {}
      return users.get(payload)
        .then((res) => {
          if(payload.id) { //for single user
            state.userInfo = res.data.rows[0]
            const {name, id, role} = state.userInfo
            localStorage.setItem('user', JSON.stringify({name, id, role}))
            localStorage.setItem('privileges', JSON.stringify(state.userInfo.access))
          } else state.users = res.data.rows
        
        })
        .catch((error) => console.log("error",error))
    },
    getThicknesses({state}) {
      return thicknesses.get()
        .then((res) => {
          state.thicknessList = res.data.rows
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
