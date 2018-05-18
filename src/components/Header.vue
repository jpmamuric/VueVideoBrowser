<template lang="html">
  <div class="header">
    <h1 class="header-text">Hello World lets build with Vue!</h1>
  </div>

</template>

<script>
export default {
  name: "Header"
}
</script>

<style lang="css">
  .header {
    width: 100%;
    background-color: var(--color-primary);
    padding: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .header-text {
    color: royalblue;
  }



</style>
