<template>
  <div class="event-comments" v-if="comments.length > 0">
    <div class="h-holder">
      <p>Comments</p>
      <span class="badge badge-info">{{ comments.length }}</span>
    </div>
    <div v-for="comment in comments"
         :key="comment.id"
         class="card mt-2">
      <div class="card-header">
        {{ comment.user.firstname + ' ' + comment.user.lastname }}
      </div>
      <div class="card-body">
        <div class="card-text">{{ comment.comment }}</div>
        <div class="card-score align-items-center d-flex">
          <button class="btn btn-mark"
                  @click="addCommentScore(comment)"
                  type="button">+
          </button>
          <div class="font-weight-bold h4 m-0 px-3">{{ comment.score }}</div>
          <button class="btn btn-mark"
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
  p {
  color: rgb(32, 133, 57);
  opacity: 0;
  animation: blink 7s forwards;
  margin-bottom: 0;
  margin-right: 5px;
}
.h-holder {
  display: flex;
  align-items: center;
}
.card-score {
  margin-top: 15px;
}
 
</style>