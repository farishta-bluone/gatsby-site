import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
    // return desired position
  },

  routes: [
    { path: '/', redirect: { name: "hr_stock" } },

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
      component: () => import("@/pages/SlitsPlanning.vue")
    },
    {
      path: "/slit-planning",
      name: "slit-planning",
      component: () => import("@/pages/SlitsPlanning.vue")
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
      path: "/pickling-stock",
      name: "pickling-stock",
      component: () => import("@/pages/pickling/PicklingStock.vue")
    },
    {
      path: "/pickling-process",
      name: "pickling-process",
      component: () => import("@/pages/pickling/Process.vue")
    },
    {
      path: "/pickled",
      name: "pickled",
      component: () => import("@/pages/pickling/PickledStock.vue")
    },
    {
      path: "/rolling-stock",
      name: "rolling-stock",
      component: () => import("@/pages/rolling/RollingStock.vue")
    },
    {
      path: "/rolling-process",
      name: "rolling-process",
      component: () => import("@/pages/rolling/Process.vue")
    },
    {
      path: "/rolled",
      name: "rolled",
      component: () => import("@/pages/rolling/RolledStock.vue")
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
  // const access = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')).access : {}

  if (to.name !== 'login' && !token) next({ name: 'login' })

  else {
    if (to.name === 'login' && token) next({ name: 'hr_stock' })
    else {
      // if(access && access[`${to.name}`] == false) next({name: "forbidden"})
      // else next()
      next()
    }
  }
})

export default router;