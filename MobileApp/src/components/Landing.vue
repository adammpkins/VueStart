<template>
  <div class="d-flex flex-column align-items-center mt-3">
    <p class="title">Vue Start!</p>
    <img class="vuecoon img-fluid px-3" alt="Vuecoon" :src="require(`../assets/vuecoon_${vuecoonState}.webp`)">
    <p class="logos mt-4">
      <img src="../assets/vue_logo.webp"> <img src="../assets/bootstrap.webp"> <img src="../assets/tailwind.webp"> <img src="../assets/css.webp">
    </p>
    <span class="lead text-center">
      Turn any JSON into Vue 3 tables! Create well coded Vue 3 tables with Bootstrap, Tailwind CSS or vanilla CSS.
    </span>
    <p class="text-center small-text red-text"><em>For the full feature set please visit this page from a desktop browser.</em></p>
  </div>
</template>


<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Landing',
  props: {
    vuecoonState: String
  },
});
</script>

<style scoped>
  .vuecoon {
    width: min(50vw, 15rem);
  }
  .vue_logo {
    width: 3rem;
    height: 3rem;
  }
  @import url('https://fonts.googleapis.com/css2?family=Caveat+Brush&display=swap');
  .title {
    font-family: 'Caveat Brush', cursive;
    font-size: 3rem;
    text-align: center
  }
  .logos > img {
    height: 4rem;
  }
  .red-text {
    color: red;
  }
</style>