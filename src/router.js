import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router ({
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
        { path: '/', redirect: { name: "login" }},

        {
            path: "/login",
            name: "login",
            meta: { layout: "no-header" },
            component: () => import("@/pages/Login.vue")
        },
        {
            path: "/coils",
            name: "hr_stock",
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
          name: "slits_preview",
          component: () => import("@/pages/SlitsPreview.vue")
        },
        {
          path: "/companies",
          name: "companies",
          component: () => import("@/pages/Companies.vue")
        },
        {
          path: "/slits",
          name: "slits_stock",
          component: () => import("@/pages/SlitsStock.vue")
        },
        {
          path: "/compare-slits",
          name: "compare-slits",
          component: () => import("@/pages/CompareSlits.vue")
        },
        {
          path: "/users",
          name: "users",
          component: () => import("@/pages/Users.vue")
        },
        {
          path: "/403",
          name: "forbidden",
          component: () => import("@/pages/Forbidden.vue")
        },
        {
          path: "*",
          name: "not_found",
          component: () => import("@/pages/NotFound.vue")
        },

    ]
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('access_token')
  const access = JSON.parse(localStorage.getItem('privileges'))
  
  if (to.name !== 'login' && !token) next({ name: 'login' })
  
  else {
    if (to.name === 'login' && token) next(false)
    else {
      console.log("checkkk", access, to.name)
      if(access && access[`${to.name}`] == false) next({name: "forbidden"})
      else next()
    }
  }
})

export default router;