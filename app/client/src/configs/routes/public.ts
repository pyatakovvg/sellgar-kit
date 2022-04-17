
const routes: Array<any> = [
  {
    path: '/sign-in',
    module: import('@module/test')
  },
  {
    path: '/sign-up',
    module: import('@module/test')
  },
  {
    path: '/error',
    module: import('@module/error')
  },
];

export default routes;
