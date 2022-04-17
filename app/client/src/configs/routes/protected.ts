
const routes: Array<any> = [
  {
    path: '/',
    module: import('@module/main')
  },
  {
    path: '/products',
    wrapper: 'navigate',
    module: import('@module/test2')
  },
  {
    path: '/profile',
    wrapper: 'navigate',
    module: import('@module/test2')
  },
];

export default routes;
