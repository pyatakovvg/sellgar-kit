
const routes: Array<any> = [
  {
    path: '/',
    wrapper: 'navigate',
    module: import('@module/main')
  },
  {
    path: '/design',
    wrapper: 'navigate',
    module: import('@module/test')
  },
];

export default routes;
