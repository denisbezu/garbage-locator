import axios from 'axios';
import qs from 'qs';
import $ from 'jquery';

export default {
  addEvent(type, description, images, position, level) {
    return axios.post('/api/events/add', qs.stringify({
        type,
        description,
        images,
        position,
        level
      })
    );
  },
  getMarkers() {
    return axios.post('/api/markers/getAll');
  }
}