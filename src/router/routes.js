/* eslint-disable */
import { routes as home } from '../pages/Site/Home';
import { routes as login } from '../pages/Site/Auth';

export default [
  ...login, 
  ...home, 
];
