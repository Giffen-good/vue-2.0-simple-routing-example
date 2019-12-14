<template>
  <div class="container">
    <h1 id="plasiq-logo" class="logo">
        <v-link href="/"><img src="/public/imgs/PLASIQ_LOGO_Nov17.png" /></v-link>
    </h1>
    <div  id="sidebar">
    <ul>
      <li>
       <div><span>Catalogue</span></div>
       <div><a class="indent" target="_blank" href="/public/PLASIQ_catalogue_2020_web.pdf">Download PDF</a></div>
          
      </li>
      <li>
        <div><v-link href="/about">About</v-link></div>
        <div><a href="mailto:info@plasiq.shop">Contact</a></div>
        <div><a target="_blank" href="https://www.instagram.com/plasiq/">Follow Us</a></div>
      </li>
    </ul>

    <slot></slot>
    </div>
  </div>
</template>

<script>
  import VLink from '../components/VLink.vue'

  export default {
    components: {
      VLink
    }
  }

  document.addEventListener('DOMContentLoaded',function() {
    setTimeout(function() {
      if (window.location.pathname == '/'){
        document.body.classList.add('init');
        document.getElementById('contact').classList.remove('con');
      }    else {
        document.body.classList.remove('init');
        document.getElementById('contact').classList.add('con');

      }
    }.bind(this),1000);

  })
</script>

<style scoped>


  #sidebar {
    background-color:#DCDC48;
    width:410px;
    height:100%;
    position: absolute;
    padding: 15px 32px 0;
    -webkit-transform: translateX(-410px);
    -ms-transform: translateX(-410px);
    transform: translateX(-410px);
    left:0;
    top:0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }
  .indent {
    padding-left:30px;
    font-family: neuzeit-light
  }
  .init #fake-sidebar {
    width:395px;
    -webkit-transition-delay:0.45s;
    -o-transition-delay:0.45s;
    transition-delay:0.45s;

  }
  #sidebar {
    -webkit-transition: -webkit-transform 1s ease-out;
    transition: -webkit-transform 1s ease-out;
    -o-transition: transform 1s ease-out;
    transition: transform 1s ease-out;
    transition: transform 1s ease-out, -webkit-transform 1s ease-out;
    -webkit-transition-delay:0.4s;
    -o-transition-delay:0.4s;
    transition-delay:0.4s;
  }
  #fake-sidebar {
    -webkit-transition: all 1s ease-out;
    -o-transition: all 1s ease-out;
    transition: all 1s ease-out;
    -webkit-transition-delay:0.40s;
    -o-transition-delay:0.40s;
    transition-delay:0.40s;
  }

  .container {
    height:100vh;
  }
  #fake-sidebar {
    width:0;
    -webkit-box-flex:1;
    -ms-flex:1 0 auto;
    flex:1 0 auto;

  }
  .init #sidebar {
    -webkit-transform:translateX(0);
    -ms-transform:translateX(0);
    transform:translateX(0);
  }
  .init .logo img {
    -webkit-filter:invert(0);
    filter:invert(0);
  }
  .logo img  {
    -webkit-filter:invert(1);
    filter:invert(1);
    width:135px;
    position:absolute;
    z-index: 2;
    left:30px;
    top:-16px;
    -webkit-transition:all 0.6s ease-out 1.3s;
    transition:all 0.6s ease-out 1.3s;
    -o-transition:all 0.6s ease-out 1.3s;
    -webkit-box-flex:1;
    -ms-flex:1;
    flex:1;
  }
  .logo.con img {
    -webkit-transition:-webkit-filter 0.3s ease-out;
    transition:-webkit-filter 0.3s ease-out;
    -o-transition:filter 0.3s ease-out;
    transition:filter 0.3s ease-out;
    transition:filter 0.3s ease-out, -webkit-filter 0.3s ease-out;
    -webkit-filter:invert(1);
    filter:invert(1);
  }
  .init ul li {
    opacity:1;
  }

  .logo.flip-2 img {
    -webkit-filter: invert(1);
    filter: invert(1);
    -webkit-transition-delay: 0s;
    -o-transition-delay: 0s;
    transition-delay: 0s;
  }
  .logo.flip img, .logo.flip-3 img  {
    -webkit-filter:invert(0);
    filter:invert(0);
    -webkit-transition:-webkit-filter 0.3s ease-out 0s;
    transition:-webkit-filter 0.3s ease-out 0s;
    -o-transition:filter 0.3s ease-out 0s;
    transition:filter 0.3s ease-out 0s;
    transition:filter 0.3s ease-out 0s, -webkit-filter 0.3s ease-out 0s;

  }
  ul {
    margin: 0;
    bottom: 0;
    padding-left: 0;
  }
  a, span {
    text-decoration: none;
    color:#000;
    font-family: neuzeit-bold;
    margin:5px 0;
    font-size:15px;
  }
  li {

    -webkit-transition: 0.5s;

    -o-transition: 0.5s;

    transition: 0.5s;
    -webkit-transition-delay: 1.4s;
    -o-transition-delay: 1.4s;
    transition-delay: 1.4s;
    opacity:0;
    padding-bottom: 29px;
    list-style-type: none;

  }
  li:last-child {
    -webkit-transition-delay: 1.6s;
    -o-transition-delay: 1.6s;
    transition-delay: 1.6s;
  }
  .container {
    background: #f9f7f5;
  }
  @media screen and (max-width: 550px) {
    #sidebar {
      width:100vw;
      -webkit-transform: translateX(-100vw);
      -ms-transform: translateX(-100vw);
      transform: translateX(-100vw);

    }

    .init #fake-sidebar {
      width:70vw;
    }
  }
</style>
