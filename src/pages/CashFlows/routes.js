import CashFlowsComponent from './CashFlowsComponent';

const baseURL = '/cash_flows';

export default [
  {
    path: `${baseURL}`,
    name: 'cash_flows',
    component: CashFlowsComponent,
    meta:{
      title: 'Fluxo de caixa',
      description: 'Lista de todas os fluxos no caixa.',
      requiresAuth: true,
      action: 'list'
    }
  },
]