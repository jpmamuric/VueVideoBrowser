<template lang="html">
  <div class="searchbar_container">
    <!-- @ === v-on: -->
    <input type="text" @input="onInputChange" class='searchbar' placeholder="search"/>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  methods: {
    onInputChange(e) {
      this.$emit('searchChange', e.target.value);
    }
  }
}
</script>

<!-- scoped restrict style to this component -->
<style lang="css" >
  .searchbar {
    width: 30rem;
    font-size: 2.5rem;
    padding-left: 1rem;
    border: none;
    border-bottom: 2px solid var(--color-primary);
    outline: none;

  }

  .searchbar::placeholder {
     font-family: sans-serif;
     font-size: 1rem;
     color: rgba(#777, .5);
  }

  .searchbar_container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
  }
</style>
