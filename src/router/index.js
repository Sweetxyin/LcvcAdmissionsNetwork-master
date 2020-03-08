import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {
            path:'/',
            component: () => import('@/view/Index')
        },
      {
        path:'/SpecialtyConstruction',
        component: () => import('@/view/SpecialtyConstruction')
      },
      {
        path:'/LaboratoryIntroduction',
        component: () => import('@/view/LaboratoryIntroduction')
      }
      ,
      {
        path:'/TeachingStaff23',
        component: () => import('@/view/TeachingStaff23')
      }
      ,
      {
        path:'/Footer',
        component: () => import('@/view/Footer')
      }
    ]
})
