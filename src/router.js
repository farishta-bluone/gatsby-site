import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router ({
    mode: "history",
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
          } else {
            return { x: 0, y: 0 }
          }
        // return desired position
      },

    routes: [
        { path: '/', redirect: { name: 'coils' }},

        {
            path: "/login",
            name: "login",
            meta: { layout: "no-header" },
            component: () => import("@/pages/Login.vue")
        },
        {
            path: "/coils",
            name: "coils",
            component: () => import("@/pages/CoilsList.vue")
        },
        {
          path: "/slit_planning/:id",
          name: "edit_slit_planning",
          component: () => import("@/pages/SlittedCoils.vue")
        },
        {
          path: "/slit_planning",
          name: "slit_planning",
          component: () => import("@/pages/SlittedCoils.vue")
        }
    ]
})