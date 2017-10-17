import localforage from 'localforage'
import store from '../vuex'
const beforeEach = ((to, from, next ) => {
   store.dispatch('auth/checkTokenExists').then(() => {
       if(to.meta.guest){
            next({name:'home'});
            return
       }
       next()
   }).catch(() => {
        if(to.meta.needsAuth){
            localforage.setItem('intended', to.name);
           next({name:'login'});
           return
        }
       next()
   })
});

export default beforeEach