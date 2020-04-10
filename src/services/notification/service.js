import api from './api';

const service = {
  listAllNotifications(userId, offset, limit) {
    return api.listAllNotifications(userId, offset, limit);
  },
  addUser(userId, pushNotId) {
    return api.addUser(userId, pushNotId);
  },
  createNotificationAlert(
    userId,
    travelOrigin,
    travelDestination,
    travelDateFrom,
    travelDateTo,
  ) {
    return api.createNotificationAlert(
      userId,
      travelOrigin,
      travelDestination,
      travelDateFrom,
      travelDateTo,
    );
  },
};

export default service;
