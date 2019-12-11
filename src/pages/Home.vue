<template>
  <main-layout>
    <sidebar/>
    <img class="desktop-img" v-bind:src="selectedImage" />
    <img class="mobile-img" v-bind:src="mobileImage" />

    <div id="contact">
      <div>
        <p>PLASIQ is art imitating life in full form. Our designs allow even the busiest of home and commercial property owners to curate their space with the lush, nourishing comforts of greenery with minimal maintenance required—none to be exact. Highly adaptive and versatile, our objects are also customisable. Much 
like travel, nature, and aesthetic, PLASIQ’s aim is to create opportunities for escapism in every space we occupy. </p>
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
        if (window.location.pathname == '/about') {
          document.getElementById('contact').classList.add('con');
          document.getElementById('plasiq-logo').classList.add('flip');

        }
      })
    },
    data() {
      return {
        images: [
          '/public/imgs/plasiq_desktop_header-01-compressor.jpg',
          '/public/imgs/plasiq_desktop_header-02-compressor.jpg',
          '/public/imgs/plasiq_desktop_header-03-compressor.jpg',
          '/public/imgs/plasiq_desktop_header-04-compressor.jpg'

        ],
        verticalImages: [
                '/public/imgs/plasiq_mobile_header-01-compressor.jpg',
                '/public/imgs/plasiq_mobile_header-02-compressor.jpg',
                '/public/imgs/plasiq_mobile_header-03-compressor.jpg',
                '/public/imgs/plasiq_mobile_header-04-compressor.jpg'


        ],
        selectedImage: '',
        mobileImage:'',
        routeChanged: true
      }
    },
    created () {
      const idx = Math.floor(Math.random() * this.images.length);
      const idx2 = Math.floor(Math.random() * this.verticalImages.length);

      this.selectedImage = this.images[idx];
      this.mobileImage = this.verticalImages[idx2]

    }
  }
</script>
<style scoped>
 
  img {
      min-width:500px;
      object-fit: cover;
      flex:1;
  }
  .mobile-img {
    display: none;
  }
  #contact {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 101%;
    background: rgb(220,220,64);
    background: linear-gradient(0deg,
    rgb(220, 220, 64) 0%, rgb(133, 172, 63) 100%);
    height: 101%;
    color:#333;
    font-family: neuzeit;
    transition:opacity 0.3s ease-out 1.4s, z-index 0s;
    opacity:0;
    z-index: -1;

  }
  #contact.con {
    opacity: 1;
    z-index: 1;

  }
  #contact p {
    width: 550px;
    display: block;
    float: right;
    text-align: justify;
    padding-right: 37px;
    padding-top: 42px;
    margin-top: 0;
    line-height: 23px;
  }
.init #contact {
  opacity: 0;
  transition:opacity 0.3s ease-out, z-index 1.7s;


}

  #contact > div {
    position: relative;
    height: 100%;
    min-height:420px;
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
    color:#000000;

  }
  @media screen and (max-width:768px) {
    .desktop-img {
      display: none;
    }
    .mobile-img {
      display: initial;
    }

  }
  @media screen and (max-width: 800px) {
    #contact div {
      display: flex;
      align-items: center;
      overflow-y: auto;
      justify-content: center;
    }
    #contact p {
      max-width: 100%;
      float: none;
      padding: 0 15px;
      box-sizing: border-box;
    }
  }

</style>