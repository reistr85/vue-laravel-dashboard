import EnrollmentsComponent from './EnrollmentsComponent';
import EnrollmentCreateComponent from './EnrollmentCreateComponent';
import EnrollmentInstallmentCreateComponent from './EnrollmentInstallmentCreateComponent';

const baseURL = '/enrollments';

export default [
  {
    path: `${baseURL}`,
    name: 'enrollments',
    component: EnrollmentsComponent,
    meta:{
      title: 'Matrículas',
      description: 'Lista de todas as matrículas cadastradas no sistema.',
      requiresAuth: true,
      action: 'list'
    }
  },
  {
    path: `${baseURL}/nova-matricula`,
    name: 'enrollment_create',
    component: EnrollmentCreateComponent,
    props: true,
    meta:{
      title: 'Nova Matrícula',
      description: 'Preencha todos os dados para cadastrar a matrícula.',
      requiresAuth: true,
      action: 'create'
    }
  },
  {
    path: `${baseURL}/:id`,
    name: 'enrollment_show',
    component: EnrollmentCreateComponent,
    props: true,
    meta:{
      title: 'Matrícula selecionada',
      description: 'Exibe todos os dados da matrícula selecionada.',
      requiresAuth: true,
      action: 'show'
    }
  },
  {
    path: `${baseURL}/nova-matricula/:id/nova-parcela`,
    name: 'enrollment_installment_create',
    component: EnrollmentInstallmentCreateComponent,
    meta:{
      title: 'Nova parcela',
      description: 'Preencha todos os dados para cadastrar uma nova parcela para a matrícula.',
      requiresAuth: true,
      action: 'create'
    }
  }
]