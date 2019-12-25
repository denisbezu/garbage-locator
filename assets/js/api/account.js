import axios from 'axios';
import qs from 'qs';

export default {
  changePassword(password, repeatPassword) {
    return axios.post('/api/account/change-password', qs.stringify({
      password,
      repeatPassword
    }));
  },
  modifyAccount(email, firstname, lastname) {
    return axios.post('/api/account/modify-account', qs.stringify({
      username: email,
      firstname,
      lastname
    }));
  }
}