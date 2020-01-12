import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';
import Home from '../components/home/Home';
import Login from '../components/login/Login';
import Register from '../components/login/Register';
import Account from "../components/account/Account";

Vue.use(VueRouter);

let router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/home',
      component: Home,
      meta: {
        title: 'Eco walk'
      }
    },
    {
      path: '/login',
      component: Login,
      meta: {
        title: 'Eco walk - Login'
      }
    },
    {
      path: '/register',
      component: Register,
      meta: {
        title: 'Eco walk - Register'
      }
    },
    {
      path: '/account',
      component: Account,
      meta: {
        requiresAuth: true,
        meta: {
          title: 'Eco walk - My account'
        }
      }
    },
    {
      path: '*',
      redirect: '/home'
    }
  ],
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (store.getters['security/isAuthenticated']) {
      next();
    } else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}
      });
    }
  } else {
    next(); // make sure to always call next()!
  }
});

export default router;