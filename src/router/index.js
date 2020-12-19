import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
// import store from '../store';

Vue.use(VueRouter);

const router = new VueRouter({
  routes
});

// router.beforeEach((to, from, next) => {
//   window.scrollTo({
//     top: 0,
//     behavior: "smooth",
//   });
  
//   if(to.name === 'login' && store.getters.isLoggedIn){
//     next({name: 'home'});
//   }else if(to.matched.some(record => record.meta.requiresAuth)) {
//     store.dispatch('ActionMe');
//     next({name: 'login'}) 
//   } else {
//     next() 
//   }
// });

export default router;