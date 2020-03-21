const API_BASE = 'http://localhost:3000';

const api = {
  login(email, password) {
    return fetch(`${API_BASE}/api/user/login`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    }).then(res => res.json());
  },
};

export default api;
