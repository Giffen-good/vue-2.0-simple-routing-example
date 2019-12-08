<template>
  <main-layout>
    <sidebar/>
    <img class="desktop-img" v-bind:src="selectedImage" />
    <img class="mobile-img" v-bind:src="mobileImage" />

    <div id="contact">
      <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nullam hendrerit eu augue vel sodales.
          In vel turpis sed lectus ullamcorper tempus ullamcorper vitae felis.
          Nam eget vehicula enim. Nunc ac est vitae odio porttitor sodales. Nam maximus, metus nec finibus suscipit, libero tellus efficitur odio, eu mattis metus augue et est.
          Nullam fringilla sagittis commodo. Mauris tempus mi a neque gravida tempor a at libero. Ut at varius tortor. Fusce in bibendum diam. Pellentesque pretium bibendum velit non elementum. Nulla at ex in odio maximus iaculis ut ut quam.
          Nam egestas sed metus sed lobortis. Pellentesque rhoncus elit ultricies bibendum bibendum. </p>
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
          '/public/imgs/plasiq_desktop_header-01-compressor.jpg',
          '/public/imgs/plasiq_desktop_header-02-compressor.jpg',
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
    padding-right: 34px;
    padding-top: 34px;
    margin-top: 0;
    line-height: 26px;
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
    color:#333;

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
    }
    #contact p {
      max-width: 100%;
      float: none;
      padding: 0 15px;
      box-sizing: border-box;
    }
  }

</style>