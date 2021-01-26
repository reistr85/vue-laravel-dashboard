/* eslint-disable */
import { routes as home } from '@/pages/Home';
import { routes as auth } from '@/pages/Auth';
import { routes as users } from '@/pages/Users';

export default [
  ...auth, 
  ...home, 
  ...users,
];
