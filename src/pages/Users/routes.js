import UsersComponent from './UsersComponent';

const baseURL = '/usuarios';

export default [
  {
    path: `${baseURL}`,
    name: 'users',
    component: UsersComponent,
    meta:{
      title: 'Usuários',
      description: 'Lista de todos os usuários cadastrados no sistema.',
      requiresAuth: true
    }
  }
]