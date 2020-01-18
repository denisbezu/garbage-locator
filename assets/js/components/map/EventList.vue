<template>
  <div
      class="events-list row col-12"
      v-if="selectedEvents && selectedEvents.length > 0"
  >
    <p>Marker's events</p>

    <table class="table table-hover">
      <thead>
      <tr>
        <th scope="col"></th>
        <th scope="col">Description</th>
        <th scope="col" class="text-center">Level</th>
        <th scope="col" class="text-center">Status</th>
      </tr>
      </thead>
      <tbody>
      <tr
          v-for="(selectedEvent, index) in selectedEvents"
          :key="selectedEvent.id"
          @click="selectEvent(selectedEvent)"
          :class="{'bg-info': isEventSelected(selectedEvent)}"
      >
        <td class="event-list-item-img-wrapper">
          <img
              class="img-fluid"
              :src="getPollutionImageSrc(selectedEvent.type)"
              :alt="getPollutionName(selectedEvent.type)"
          />
        </td>
        <td>{{ selectedEvent.description }}</td>
        <td class="text-center">{{ selectedEvent.level }}</td>
        <td class="status text-center" v-if="selectedEvent.status === 1">
          <img class="status-img" src="/img/open.png" alt="">
        </td>
        <td class="status text-center" v-if="selectedEvent.status === 0">
          <img class="status-img" src="/img/close.png" alt="">
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import {eventsEmmiter} from "../../events/emitters";
  import {
    getPollutionName,
    getPollutionImageSrc
  } from "../../mixins/polutionTypes";

  export default {
    computed: {
      selectedEvents() {
        return this.$store.getters["events/selectedEvents"];
      },
      openedEvent() {
        return this.$store.getters['events/openedEvent'];
      }
    },
    methods: {
      isEventSelected(event) {
        if (this.openedEvent !== false && this.openedEvent['id']) {
          return event.id === this.openedEvent.id;
        }

        return false;
      },
      getPollutionName(type) {
        return getPollutionName(type);
      },
      getPollutionImageSrc(type) {
        return getPollutionImageSrc(type);
      },
      getStatusName(status) {
        if (!status) {
          return "Opened";
        }

        return "Finished";
      },
      selectEvent(selectedEvent) {
        this.$store.dispatch("events/setOpenedEvent", selectedEvent);
      }
    }
  };
</script>

<style scoped lang="scss">
  tbody > tr {
    cursor: pointer;
  }

  p {
    color: rgb(32, 133, 57);
    opacity: 0;
    animation: blink 7s forwards;
  }
</style>

