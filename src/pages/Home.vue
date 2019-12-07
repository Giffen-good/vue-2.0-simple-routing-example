<template>
  <main-layout>
    <sidebar/>
    <img v-bind:src="selectedImage" />
    <div id="contact">
      <div>
        <v-link href="/">Return Home</v-link>
        <h2>Contact/About</h2>
      </div>
    </div>
  </main-layout>
</template>

<script>
  import MainLayout from '../layouts/Main.vue'
  import Sidebar from '../layouts/Sidebar.vue'
  import VLink from "../components/VLink.vue";

  export default {
    components: {
      VLink,
      MainLayout,
      Sidebar
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
  #contact {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 80vw;
    background-color:#fff;
    height: 65vh;
    color:#333;
    font-family: neuzeit;
    transition:opacity 0.3s ease-out;
    transition-delay: 1.4s;
    max-width:700px;
    max-height:700px;
    opacity:1;

  }
.init #contact {
  opacity: 0;
  transition-delay: 0s;
}

  #contact > div {
    position: relative;
    height: 100%;
  }
  h2 {
    margin: 0;
    top: 50%;
    left:50%;
    position: absolute;
    transform: translate(-50%,-50%);
    font-size: 40px;
  }
  a {
    text-decoration: none;
    position: absolute;
    right: 0;
    top:0;
    margin:30px 30px;
    color:#333;

  }
</style>