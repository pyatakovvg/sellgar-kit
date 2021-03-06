
const routes: Array<any> = [
  {
    path: '/',
    module: import('@module/main'),
  },
  {
    path: '/products',
    module: import('@module/products'),
  },
  {
    path: '/products/create',
    module: import('@module/product'),
  },
  {
    path: '/products/:uuid',
    module: import('@module/product'),
  },
  {
    path: '/params/groups',
    wrapper: 'composite',
    module: import('@module/groups'),
  },
  {
    path: '/params/categories',
    wrapper: 'composite',
    module: import('@module/categories'),
  },
  {
    path: '/params/brands',
    wrapper: 'composite',
    module: import('@module/brands'),
  },
  {
    path: '/params/attributes',
    wrapper: 'composite',
    module: import('@module/attributes'),
  },
  {
    path: '/params/units',
    wrapper: 'composite',
    module: import('@module/units'),
  },
  {
    path: '/images',
    module: import('@module/images'),
  },
  {
    path: '/users',
    wrapper: 'composite',
    module: import('@module/users'),
  },
];

export default routes;
