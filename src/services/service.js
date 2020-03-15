import api from './api';

const service = {
  listAllTravels(offset, limit) {
    return api.listAllTravels(offset, limit);
  },
};

export default service;
