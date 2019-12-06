<template>
  <main-layout>
    <sidebar/>
    <img v-bind:src="selectedImage" />
  </main-layout>
</template>

<script>
  import MainLayout from '../layouts/Main.vue'
  import Sidebar from '../layouts/Sidebar.vue'

  export default {
    components: {
      MainLayout,
      Sidebar
    },
    data() {
      return {
        images: [
          '/public/imgs/home-plants.jpg',
          '/public/imgs/home-plants-medium.jpg',
          '/public/imgs/home-plants-super-close.jpg'

        ],
        selectedImage: ''
      }
    },
    created () {
      const idx = Math.floor(Math.random() * this.images.length);
      this.selectedImage = this.images[idx]
    }
  }
</script>
<style scoped>

  img {
    min-width:500px;
    object-fit: cover;

  }
</style>