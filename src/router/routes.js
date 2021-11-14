
const routes = [
  {
    path: '/',
    component: () => import('layouts/Layout.vue'),
    children: [
      { path: '', component: () => import('pages/PageCalc.vue') },
			{ path: '/info', component: () => import('src/pages/PageInfo.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
