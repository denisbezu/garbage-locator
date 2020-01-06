import axios from 'axios';
import qs from 'qs';

export default {
  addComment(text, eventId) {
    return axios.post('/api/comments/add', qs.stringify({
      text,
      eventId
    }));
  },
  addCommentScore(idComment) {
    return axios.post('/api/comments/score', qs.stringify({
      idComment,
      sign: '+'
    }));
  },
  removeCommentScore(idComment) {
    return axios.post('/api/comments/score', qs.stringify({
      idComment,
      sign: '-'
    }));
  }
}
