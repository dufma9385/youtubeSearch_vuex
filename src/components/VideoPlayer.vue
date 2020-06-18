<template>
  <div class="embed-responsive embed-responsive-16by9" v-if="video">
    <p>{{ $store.state.userInput }}</p>
    <iframe class="embed-responsive-item" :src="`https://www.youtube.com/embed/${video.id.videoId}`"></iframe>
  </div>
</template>

<script>
export default {
  name: 'VideoPlayer',
  props: {
    video: Object
  }
}
</script>

<style>

</style>
