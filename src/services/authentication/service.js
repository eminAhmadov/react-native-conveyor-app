import api from './api';

const service = {
  login(email, password) {
    return api.login(email, password);
  },
};

export default service;
