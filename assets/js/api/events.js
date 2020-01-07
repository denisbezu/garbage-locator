import axios from 'axios';
import qs from 'qs';

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
  },
  getEvents(longitude, latitude) {
    return axios.post('/api/events/getByCoordinates', qs.stringify({
      longitude,
      latitude
    }));
  },
  toggleEventResult(eventId) {
    return axios.post('/api/events/toggleResult', qs.stringify({
      eventId
    }));
  }
}