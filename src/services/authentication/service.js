import api from './api';

const service = {
  login(email, password) {
    return api.login(email, password);
  },
  register(name, email, password, gender, facebook, instagram, mobile) {
    return api.register(
      name,
      email,
      password,
      gender,
      facebook,
      instagram,
      mobile,
    );
  },
};

export default service;
