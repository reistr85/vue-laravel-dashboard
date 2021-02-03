import ModalitiesComponent from './ModalitiesComponent';
import ModalityCreateComponent from './ModalityCreateComponent';

const baseURL = '/modalidades';

export default [
  {
    path: `${baseURL}`,
    name: 'modalities',
    component: ModalitiesComponent,
    meta:{
      title: 'Modalidades',
      description: 'Lista de todos as modalidades cadastradas no sistema.',
      requiresAuth: true
    }
  },
  {
    path: `${baseURL}/:id`,
    name: 'modality_show',
    component: ModalityCreateComponent,
    props: true,
    meta:{
      title: 'Modalidade selecionada',
      description: 'Exibe todos os dados da modalidade selecionada.',
      requiresAuth: true
    }
  },
  {
    path: `${baseURL}/nova-modalidade`,
    name: 'modality_create',
    component: ModalityCreateComponent,
    meta:{
      title: 'Nova modalidade',
      description: 'Preencha todos os dados para cadastrar uma nova modalidade.',
      requiresAuth: true
    }
  }
]