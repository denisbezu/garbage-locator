import axios from 'axios';
import qs from 'qs';

export default {
  login(email, password) {
    return axios.post('/api/security/login', {
      username: email,
      password
    });
  },
  register(email, password, firstname, lastname) {
    return axios.post('/api/security/register', qs.stringify({
      username: email,
      password,
      firstname,
      lastname
    }));
  }
}