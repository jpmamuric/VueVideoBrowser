<template lang="html">
  <li class="video__item" @click="onVideoSelect">
    <img :src="thumbnail" :alt="title" />
    <div class="video__item-title">
      {{ video.snippet.title }}
    </div>
  </li>
</template>

<script>
export default {
  name: "VideoListItem",
  props: {
    video: Object
  },
  computed: {
    thumbnail() { return this.video.snippet.thumbnails.default.url },
    title(){ return this.video.snippet.title }
  },
  methods:{
    onVideoSelect(){
      this.$emit('videoSelect', this.video );
    }
  }

}
</script>

<style lang="css">
  .video__item {
    cursor: pointer;
    min-width: 30rem;
    max-width: 30rem;
    display: flex;
    background-color: #7FFFD4;

  }
  .video__item:not(:last-child) {
    margin-bottom: .5rem;
  }

  @media only screen and (min-width: 37.5rem) {
    .video__item {
      min-width: 50rem;
      max-width: 50rem;
    }
  }


  .video__item-title{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    overflow: auto;
    padding: 0 1rem;
  }

</style>
