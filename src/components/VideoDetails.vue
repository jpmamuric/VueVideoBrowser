<template lang="html">
  <div class="video__details-container" v-if="video">
    <div class="video__details-iframe video__details-iframe-16x9 video__details-iframe-4x3">
      <iframe :src="videoUrl" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>
      </iframe>
    </div>
    <div class="video__details-box">
      <h4 class="video__details-title">
          {{ video.snippet.title }}
      </h4>
      <p  class="video__details-description">{{ video.snippet.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoDetails",
  props: ['video'],
  computed: {
    videoUrl(){
      const videoId = this.video.id.videoId;
      return `https://www.youtube.com/embed/${videoId}`;
    }
  }
}
</script>

<style >
  .video__details-container {
    width: 100%;
  }

  .video__details-iframe {
    position: relative;
    height: 0;
    overflow: hidden;
  }

  .video__details-iframe-16x9 {
    padding-bottom: 50.25%;
  }

  .video__details-iframe iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    max-height: 80vh;
  }

  .video__details-box {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 2rem;
    
  }

  .video__details-title {
    font-size: 2rem;
  }

  .video__details-description {
    font-size: 1.5rem;
  }
</style>
