const API_BASE = 'http://192.168.1.102:8080/pushNotification';

const api = {
  listAllNotifications(userId, offset, limit) {
    console.log(userId);
    return fetch(
      `${API_BASE}/getAllForUserWithUserId?userId=${userId}&offset=${offset}&limit=${limit}`,
      {
        method: 'GET',
      },
    ).then(res => res.json());
  },
};

export default api;
