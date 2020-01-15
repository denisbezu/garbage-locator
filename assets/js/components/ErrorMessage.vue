<template>
  <div
      class="alert"
      role="alert"
  >
    {{ error.response.data.error }}
  </div>
</template>

<script>
  export default {
    name: "ErrorMessage",
    props: {
      error: {
        type: Error,
        required: true
      }
    },
  }
</script>