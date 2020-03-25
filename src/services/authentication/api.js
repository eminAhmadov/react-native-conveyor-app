const API_BASE = 'http://localhost:3000';

const api = {
  login(email, password) {
    const body = JSON.stringify({
      email: email,
      password: password,
    });
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
  register(name, email, password, gender, facebook, instagram, mobile) {
    const body = JSON.stringify({
      name: name,
      email: email,
      password: password,
      gender: gender,
      facebook: facebook,
      instagram: instagram,
      mobile: mobile,
    });
    return fetch(`${API_BASE}/api/user/register`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: body,
    }).then(res => {
      if (res.ok) {
        return res.json();
      } else if (res.status === 409) {
        throw new Error('User with this email already exists!');
      }
      throw new Error('Could not register a user with this email!');
    });
  },
};

export default api;
