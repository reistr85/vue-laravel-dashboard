import HomeComponent from './HomeComponent';

export default [
  {
    path: '/home',
    name: 'home',
    component: HomeComponent,
    meta: { 
      title: 'Dashboard',
      description: 'Resumo dos principais registros no sistema.',
      requiresAuth: true
    }
  },
];