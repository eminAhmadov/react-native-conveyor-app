const API_BASE = 'http://192.168.1.102:8090';

const api = {
  listAllNotifications(userId, offset, limit) {
    return fetch(
      `${API_BASE}/pushNotification/getAllForUserWithUserId?userId=${userId}&offset=${offset}&limit=${limit}`,
      {
        method: 'GET',
      },
    ).then(res => res.json());
  },
  addUser(userId, pushNotId) {
    const body = {
      userId: userId,
      userPushNotId: pushNotId,
    };
    return fetch(`${API_BASE}/user/add`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    }).then(res => res.json());
  },
  createNotificationAlert(
    userId,
    travelOrigin,
    travelDestination,
    travelDateFrom,
    travelDateTo,
  ) {
    const body = {
      travelOrigin: travelOrigin,
      travelDestination: travelDestination,
      travelDateFrom: travelDateFrom,
      travelDateTo: travelDateTo,
    };
    return fetch(`${API_BASE}/notificationAlert/create?userId=${userId}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
  },
};

export default api;
