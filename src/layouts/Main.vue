<template>
  <div id="main" class="container">
   <slot></slot>
  </div>
</template>

<script>
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    // We listen to the resize event
    window.addEventListener('resize', () => {
        // We execute the same script as before
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
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
html,
body {
    overflow: hidden;
    position: relative;
    height: 100%;
}
body {
    margin:0;
    max-height:100vh;
    max-width: 100vw;
    height: calc(var(--vh, 1vh) * 100);
  }
 #main {
    display:flex;
  
  }

</style>
