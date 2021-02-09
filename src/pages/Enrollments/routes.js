import EnrollmentsComponent from './EnrollmentsComponent';
import EnrollmentCreateComponent from './EnrollmentCreateComponent';

const baseURL = '/Enrollments';

export default [
  {
    path: `${baseURL}`,
    name: 'enrollments',
    component: EnrollmentsComponent,
    meta:{
      title: 'Matrículas',
      description: 'Lista de todas as matrículas cadastradas no sistema.',
      requiresAuth: true
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
      requiresAuth: true
    }
  },
  {
    path: `${baseURL}/novo-cliente`,
    name: 'enrollment_create',
    component: EnrollmentCreateComponent,
    meta:{
      title: 'Nova matrícula',
      description: 'Preencha todos os dados para cadastrar uma nova matrícula.',
      requiresAuth: true
    }
  }
]