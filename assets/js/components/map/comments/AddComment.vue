<template>
  <div class="event-add-comment mt-2">
    <div class="card">
      <div class="card-header">
        Add comment
      </div>
      <div class="card-body">
        <textarea v-model="newComment"
                  class="form-control w-100"
                  name="newComment"
                  id="newComment"
                  cols="30"
                  rows="5"></textarea>
        <div class="text-right mt-2">
          <button type="button"
                  @click="addComment"
                  class="btn btn-secondary">Add comment
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {eventsEmmiter} from '../../../events/emitters';

  export default {
    data() {
      return {
        newComment: ''
      }
    },
    methods: {
      addComment() {
        if (this.newComment !== '') {
          this.$store.dispatch('comments/addComment', {
            text: this.newComment,
            eventId: this.openedEvent.id
          });
        }
      }
    },
    computed: {
      openedEvent() {
        return this.$store.getters['events/openedEvent'];
      }
    },
    created() {
      const self = this;
      eventsEmmiter.$on('addComment', () => {
        self.newComment = '';
      });
    }
  }
</script>

<style scoped>

</style>