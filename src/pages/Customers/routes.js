import CustomersComponent from './CustomersComponent';
import CustomerCreateComponent from './CustomerCreateComponent';

const baseURL = '/customers';

export default [
  {
    path: `${baseURL}`,
    name: 'customers',
    component: CustomersComponent,
    meta:{
      title: 'Clientes',
      description: 'Lista de todos os clientes cadastrados no sistema.',
      requiresAuth: true,
      action: 'list',
    }
  },
  {
    path: `${baseURL}/:id`,
    name: 'customer_show',
    component: CustomerCreateComponent,
    props: true,
    meta:{
      title: 'Cliente selecionado',
      description: 'Exibe todos os dados do cliente selecionado.',
      requiresAuth: true,
      action: 'show',
    }
  },
  {
    path: `${baseURL}/novo-cliente`,
    name: 'customer_create',
    component: CustomerCreateComponent,
    meta:{
      title: 'Novo cliente',
      description: 'Preencha todos os dados para cadastrar um novo cliente.',
      requiresAuth: true,
      action: 'create',
    }
  }
]