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
        { path: '/', redirect: { name: 'list' }},
        // { path: '/dashboard', redirect: { name: 'news' }},
        {
            path: "/login",
            name: "login",
            meta: { layout: "no-header" },
            component: () => import("@/pages/Login.vue")
        },
        {
            path: "/list",
            name: "list",
            component: () => import("@/pages/HomePage.vue")
        }
    ]
})