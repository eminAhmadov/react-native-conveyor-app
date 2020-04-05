import api from './api';

const service = {
  listAllNotifications(userId, offset, limit) {
    return api.listAllNotifications(userId, offset, limit);
  },
  addUser(userId, pushNotId) {
    return api.addUser(userId, pushNotId);
  },
};

export default service;
