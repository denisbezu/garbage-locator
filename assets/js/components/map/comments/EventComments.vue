<template>
  <div class="event-comments" v-if="comments.length > 0">
    <h4 class="h4">
      <span>Comments</span>
      <span class="badge badge-info">{{ comments.length }}</span>
    </h4>
    <div v-for="comment in comments"
         :key="comment.id"
         class="card mt-2">
      <div class="card-header">
        {{ comment.user.firstname + ' ' + comment.user.lastname }}
      </div>
      <div class="card-body">
        <p class="card-text">{{ comment.comment }}</p>
        <div class="card-score align-items-center d-flex">
          <button class="btn btn-primary"
                  @click="addCommentScore(comment)"
                  type="button">+
          </button>
          <div class="font-weight-bold h4 m-0 px-3">{{ comment.score }}</div>
          <button class="btn btn-primary"
                  @click="removeCommentScore(comment)"
                  type="button">-
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['comments'],
    methods: {
      addCommentScore(comment) {
        this.$store.dispatch('comments/addCommentScore', comment.id);
      },
      removeCommentScore(comment) {
        if (comment.score > 0) {
          this.$store.dispatch('comments/removeCommentScore', comment.id);
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .score-img {
    max-height: 25px;
    max-width: 25px;
    cursor: pointer;
  }
</style>