<template>
  <div class="event-info-wrapper" v-if="openedEvent && openedEvent.id">
    <button type="button"
            @click="closeAddEvent"
            class="close">
      <span>&times;</span>
    </button>
    <div class="event-info-wrapper-content">
      <div class="card">
        <div id="eventInfoCarousel" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item"
                 v-for="(image, index) in openedEvent.images"
                 :key="image.id"
                 :class="{'active': index === 0}"
            >
              <img :src="image.content"
                   class="d-block w-100">
            </div>
          </div>
          <a class="carousel-control-prev" href="#eventInfoCarousel" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#eventInfoCarousel" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
        <div class="card-body">
          <h5 class="card-title">{{ getPollutionName(openedEvent.type) }}</h5>
          <p class="card-text">{{ openedEvent.description }}</p>
          <div class="d-flex justify-content-between align-items-center">
            <a href="#" class="btn btn-primary">Action?</a>
            <span class="badge badge-warning">{{ openedEvent.level }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {getPollutionName} from '../../mixins/polutionTypes';

  export default {
    methods: {
      closeAddEvent() {
        this.$store.dispatch('events/setOpenedEvent', false);
      },
      getPollutionName(type) {
        return getPollutionName(type);
      },
    },
    computed: {
      openedEvent() {
        return this.$store.getters['events/openedEvent'];
      }
    }
  }
</script>

<style scoped lang="scss">
  .event-info-wrapper {
    position: relative;

    .close {
      position: absolute;
      right: 5px;
      z-index: 2;
    }
  }
</style>