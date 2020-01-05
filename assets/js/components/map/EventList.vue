<template>
  <div class="events-list row col-12" v-if="selectedEvents && selectedEvents.length > 0">
    <h3>Marker's events</h3>

    <table class="table table-hover">
      <thead>
      <tr>
        <th scope="col"></th>
        <th scope="col">Description</th>
        <th scope="col">Level</th>
        <th scope="col">Status</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(selectedEvent, index) in selectedEvents"
          :key="selectedEvent.id"
          @click="selectEvent(selectedEvent)"
      >
        <td class="event-list-item-img-wrapper">
          <img class="img-fluid"
               :src="getPollutionImageSrc(selectedEvent.type)"
               :alt="getPollutionName(selectedEvent.type)">
        </td>
        <td>{{ selectedEvent.description }}</td>
        <td>{{ selectedEvent.level }}</td>
        <td :class="{'bg-danger': selectedEvent.status === 1, 'bg-success': selectedEvent.status === 0}">
          {{ getStatusName(selectedEvent.status) }}
        </td>

      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import {eventsEmmiter} from '../../events/emitters';
  import {getPollutionName, getPollutionImageSrc} from '../../mixins/polutionTypes';

  export default {
    computed: {
      selectedEvents() {
        return this.$store.getters['events/selectedEvents'];
      }
    },
    methods: {
      getPollutionName(type) {
        return getPollutionName(type);
      },
      getPollutionImageSrc(type) {
        return getPollutionImageSrc(type);
      },
      getStatusName(status) {
        if (!status) {
          return 'Opened';
        }

        return 'Finished';
      },
      selectEvent(selectedEvent) {
        this.$store.dispatch('events/setOpenedEvent', selectedEvent);
      }
    }
  }
</script>

<style scoped lang="scss">
  tbody > tr {
    cursor: pointer;
  }
</style>