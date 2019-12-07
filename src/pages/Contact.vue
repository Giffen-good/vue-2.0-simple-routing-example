<template>
  <main-layout>
    <sidebar/>
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
    watch: {
      $route (to, from) {
        this.slide();
        this.routeChanged = false;
      }
    },
    methods: {
      slide() {
        setTimeout(function() {
          document.body.classList.toggle('init');
        }, 1000);
      }
    },
    mounted: function() {
      this.$nextTick(function() {
        this.slide();
      })
    },
    data() {
      return {
        images: [
          '/public/imgs/home-plants.jpg',
          '/public/imgs/home-plants-medium.jpg',
          '/public/imgs/home-plants-super-close.jpg'

        ],
        selectedImage: '',
        routeChanged: true
      }
    },
    created () {
      const idx = Math.floor(Math.random() * this.images.length);
      if (this.selectedImage == '' && this.routeChanged)
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