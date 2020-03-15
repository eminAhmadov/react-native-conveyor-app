const API_BASE = 'http://localhost:8080';

const api = {
  listAllTravels(offset, limit) {
    return fetch(`${API_BASE}/getAll?offset=${offset}&limit=${limit}`, {
      method: 'GET',
    }).then(res => res.json());
  },
};

export default api;
