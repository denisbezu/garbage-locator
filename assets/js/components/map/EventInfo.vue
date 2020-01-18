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
            <a href="#"
               @click.stop.prevent="showAddComment = !showAddComment"
               class="btn">Add comment</a>
            <a href="#"
               v-if="user.id !== openedEvent.creator_id && openedEvent.status === 0"
               class="btn"
               @click.stop.prevent="toggleRateEvent"
              v-text="hasUserMark ? 'Unmark as done' : 'Mark as done'"></a>
            <span class="badge badge-warning">{{ openedEvent.level }}</span>
          </div>
        </div>
      </div>
      <add-comment v-if="showAddComment"></add-comment>
      <event-comments :comments="openedEvent.comments"></event-comments>
    </div>
  </div>
</template>

<script>
  import {getPollutionName} from '../../mixins/polutionTypes';
  import EventComments from './comments/EventComments';
  import AddComment from './comments/AddComment';
  import {eventsEmmiter} from '../../events/emitters';
  import user from '../../mixins/user';

  export default {
    data() {
      return {
        showAddComment: false
      }
    },
    methods: {
      closeAddEvent() {
        this.$store.dispatch('events/setOpenedEvent', false);
      },
      getPollutionName(type) {
        return getPollutionName(type);
      },
      toggleRateEvent() {
        this.$store.dispatch('events/toggleEventUserResult', this.openedEvent.id);
      }
    },
    computed: {
      openedEvent() {
        return this.$store.getters['events/openedEvent'];
      },
      hasUserMark() {
        const self = this;
        return this.openedEvent.eventResult.userEventResults.find(userEventResult => {
          return userEventResult.userId === self.user.id;
        });
      }
    },
    mixins: [user],
    components: {
      EventComments,
      AddComment
    },
    created() {
      const self = this;
      eventsEmmiter.$on('addComment', () => {
        self.showAddComment = false;
      });
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