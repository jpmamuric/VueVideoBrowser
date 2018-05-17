<template lang="html">
  <ul class='video__list'>
    <VideoListItem
      v-for="video in videos"
      :video="video"
      :key="video.etag"
      @videoSelect="onVideoSelected"

    ></VideoListItem>
  </ul>
</template>

<script>
import VideoListItem from './VideoListItem';

export default {
  name: "VideoList",
  components: {
    VideoListItem
  },
  props: {
    videos: Array
  },
  methods:{
    onVideoSelected(video){
      this.$emit('videoSelected', video);
    }
  }
}
</script>

<style scoped>
  .video__list {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media only screen and (max-width: 37.5em) {
    .video__list {
      align-items: center;
    }
  }
</style>
