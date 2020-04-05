import api from './api';

const service = {
  listAllNotifications(userId, offset, limit) {
    return api.listAllNotifications(userId, offset, limit);
  },
};

export default service;
