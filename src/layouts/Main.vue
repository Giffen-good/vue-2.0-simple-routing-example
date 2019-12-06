<template>
  <div id="main" class="container">
   <slot></slot>
  </div>
</template>

<script>

  export default {
    components: {
    }
  }
</script>

<style>
@font-face {
  font-family:neuzeit-bold;
  src:url('/public/fonts/Neuzeit-Grotesk-Bold.ttf');
}
@font-face {
  font-family: neuzeit-light;
  src:url('/public/fonts/Neuzeit-Grotesk-Light.ttf')
}
@font-face {
  font-family: neuzeit;
  src:url('/public/fonts/Neuzeit-Grotesk-Regular.ttf')

}

body {
    margin:0;
    overflow: hidden;
  }
 #main {
    display:flex;
  
  }

</style>
