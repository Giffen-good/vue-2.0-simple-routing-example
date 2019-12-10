<template>
  <div class="container">
    <h1 id="plasiq-logo" class="logo">
        <v-link href="/"><img src="/public/imgs/PLASIQ_LOGO_Nov17.png" /></v-link>
    </h1>
    <div id="fake-sidebar"></div>
    <div  id="sidebar">
    <ul>
      <li>
       <div><span>Catalogue</span></div>
       <div><a class="indent" target="_blank" href="/public/YOUTH.pdf">Download PDF</a></div>
          
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
</script>

<style scoped>
#sidebar {
    background-color:#DCDC48;
    width:410px;
    height:100%;
    position: absolute;
    padding: 15px 30px 0;
    transform: translateX(-410px);
    left:0;
    top:0;
    box-sizing: border-box;
    display:flex;
    justify-content: flex-end;
    flex-direction: column;
}
.indent {
    padding-left:30px;
    font-family: neuzeit-light
}
.init #fake-sidebar {
    width:395px;
  transition-delay:0.45s;

}
#sidebar {
  transition: transform 1s ease-out;
  transition-delay:0.4s;
}
#fake-sidebar {
    transition: all 1s ease-out;
    transition-delay:0.40s;
}

.container {
    height:100vh;
}
#fake-sidebar {
    width:0;
    flex:1 0 auto;

}
.init #sidebar {
    transform:translateX(0);
}
.init .logo img {
  filter:invert(0);
}
.logo img  {
  filter:invert(1);
  width:155px;
    position:absolute;
    z-index: 2;
    left:30px;
    top:-10px;
    transition:filter 0.6s ease-out;
  transition-delay:1.3s;
  flex:1;
}
.logo.con img {
  transition:filter 0.3s ease-out;
  filter:invert(1);
}
.init ul li {
  opacity:1;
}

.logo.flip-2 img {
filter: invert(1);
  transition-delay: 0s;
}
.logo.flip img, .logo.flip-3 img  {
  filter:invert(0);
  transition:filter 0.3s ease-out 0s;

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
}
li {

  transition: 0.5s;
  transition-delay: 1.4s;
  opacity:0;
  padding-bottom: 42px;
    list-style-type: none;

}
li:last-child {
transition-delay: 1.6s;
}
  .container {
    background: #f9f7f5;
  }
  @media screen and (max-width: 550px) {
    #sidebar {
      width:100vw;
      transform: translateX(-100vw);

    }

    .init #fake-sidebar {
      width:70vw;
    }
  }
</style>
