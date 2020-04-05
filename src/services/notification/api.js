const API_BASE = 'http://192.168.1.102:8080';

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
};

export default api;
