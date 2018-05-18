<template lang="html">
  <div class="container">
    <Header></Header>
    <h2 class="header-2"> Video Player </h2>
    <SearchBar @searchChange="onSearchChange"></SearchBar>
    <div class="videos__container">
      <VideoDetails :video="selectedVideo"/>
      <VideoList :videos="videos" @videoSelected="showVideo"></VideoList>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetails from './components/VideoDetails';
import keys from './config/keys';
const API_KEY = keys.googleYT;

export default {
  name: 'App',
  components: {
    Header,
    SearchBar,
    VideoList,
    VideoDetails
  },
  data(){
    return { videos: [], error: null, selectedVideo: null };
  },
  methods: {
    async onSearchChange(search){
      try {
        const res = await axios.get('https://www.googleapis.com/youtube/v3/search', {
          params : {
            key: API_KEY,
            type: 'video',
            part: 'snippet',
            q: search
          }
        });

        this.videos = res.data.items;
      }

      catch(err) {
        this.error = err;
      }
    },
    showVideo(video){
      this.selectedVideo = video;
    }
  }
}
</script>

<style lang="css" >
  :root {
    --color-primary: #7FFFD4;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  .container {
    position: relative;
    text-align: center;
  }

  .videos__container {
    display: flex;
    flex-direction: column;
    padding: 2rem;
  }

  @media only screen and (max-width: 37.5em) {
    .videos__container {
      padding: 0;
    }
  }

  .header-2 {
    margin-top: 1rem;
    font-size: 2.5rem;
    padding-left: 2rem;
    text-align: left;
  }
</style>
