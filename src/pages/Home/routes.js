import HomeComponent from './HomeComponent';

export default [
  {
    path: '/home',
    name: 'home',
    component: HomeComponent,
    meta: { 
      requiresAuth: true
    }
  },
];