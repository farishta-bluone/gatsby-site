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
          path: "/slit-planning/:id",
          name: "edit-slit-planning",
          component: () => import("@/pages/SlittedCoils.vue")
        },
        {
          path: "/slit-planning",
          name: "slit-planning",
          component: () => import("@/pages/SlittedCoils.vue")
        },
        {
          path: "/slits-preview",
          name: "slits-preview",
          component: () => import("@/pages/SlitsPreview.vue")
        },
        {
          path: "/companies",
          name: "companies",
          component: () => import("@/pages/Companies.vue")
        },
        {
          path: "/slits",
          name: "slits",
          component: () => import("@/pages/SlitsStock.vue")
        },
        {
          path: "/compare-slits",
          name: "compare-slits",
          component: () => import("@/pages/CompareSlits.vue")
        }

    ]
})