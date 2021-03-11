import store from '@/store';

export const redirectAuthUser = (to: any, from: any, next: any) => {
  if (!store.getters.authenticated) {
    return next({
      name: 'Auth',
    });
  }
  next();
};
