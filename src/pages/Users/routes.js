import UsersComponent from './UsersComponent';
import UserCreateComponent from './UserCreateComponent';

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
  },
  {
    path: `${baseURL}/:id`,
    name: 'users_show',
    component: UserCreateComponent,
    meta:{
      title: 'Usuário selecionado',
      description: 'Exibe todos os dados do usuário selecionado.',
      requiresAuth: true
    }
  }
]