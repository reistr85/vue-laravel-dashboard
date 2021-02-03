/* eslint-disable */
import { routes as home } from '@/pages/Home';
import { routes as auth } from '@/pages/Auth';
import { routes as users } from '@/pages/Users';
import { routes as modalities } from '@/pages/Modalities';

export default [
  ...auth, 
  ...home, 
  ...users,
  ...modalities,
];
