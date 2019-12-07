<template>
  <div class="container">
    <h1 class="logo">
        <v-link href="/"><img src="/public/imgs/PLASIQ_LOGO_Nov17.png" /></v-link>
    </h1>
    <div id="fake-sidebar"></div>
    <div  id="sidebar">
    <ul>
      <li>
       <a href="#catalogue">Catalogue</a>
       <a class="indent" target="_blank" href="/public/YOUTH.pdf">Download PDF</a>
          
      </li>
      <li>
        <v-link href="/contact">Contact</v-link>
        <v-link href="#login">Login/Newsletter</v-link>
        <a href="#follow-link">Follow Us</a>
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
}
#sidebar, #fake-sidebar {
    transition: all 1s ease-out;
    transition-delay:0.4s;
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
  width:170px;
    position:absolute;
    z-index: 2;
    left:30px;
    top:-10px;
    transition:filter 0.55s;
  transition-delay:0.4s;
  flex:1;
}
.init ul li {
  opacity:1;
}
ul {
  bottom: 0;
    padding-left: 0;
}
a {
    display: block;
     text-decoration: none;
    color:#333;
    font-family: neuzeit-bold;
    margin:5px 0;
}
li {

  transition: 0.5s;
  transition-delay: 1.4s;
  opacity:0;
  padding-bottom: 40px;
    list-style-type: none;

}
li:last-child {
transition-delay: 1.6s;
}
  .container {
    background: #f9f7f5;
  }
</style>
