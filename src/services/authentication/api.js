const API_BASE = 'http://localhost:3000';

const api = {
  login(email, password) {
    const body = JSON.stringify({
      email: email,
      password: password,
    });
    console.log(body);
    return fetch(`${API_BASE}/api/user/login`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: body,
    }).then(res => {
      if (res.ok) {
        return res.json();
      }
      throw new Error('Email or password is wrong!');
    });
  },
};

export default api;
