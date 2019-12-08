<template>
  <a
    v-bind:href="href"
    v-bind:class="{ active: isActive }"
    v-on:click="go"
  >
    <slot></slot>
  </a>
</template>

<script>
  import routes from '../routes'

  export default {
    props: {
      href: {
        type:String,
        required: true 
      }
    },
    computed: {
      isActive () {
        return this.href === this.$root.currentRoute
      }
    },
    methods: {
      go (event) {
        event.preventDefault()
        this.$root.currentRoute = this.href
        window.history.pushState(
          null,
          routes[this.href],
          this.href
        )
        if (window.location.pathname == '/'){
          document.body.classList.add('init');
          document.getElementById('contact').classList.remove('con');
          document.getElementById('plasiq-logo').classList.remove('con');
          document.getElementById('plasiq-logo').classList.remove('flip');
          document.getElementById('plasiq-logo').classList.add('flip-2');

          setTimeout(function() {
            document.getElementById('plasiq-logo').classList.add('flip-3');

          }, 1400);

        }    else {
          document.body.classList.remove('init');
          document.getElementById('plasiq-logo').classList.add('con');
          document.getElementById('plasiq-logo').classList.remove('flip-2');
          document.getElementById('plasiq-logo').classList.remove('flip-3');

          document.getElementById('contact').classList.add('con');
          setTimeout(function() {
            document.getElementById('plasiq-logo').classList.add('flip');

          }, 1400);

        }
      }
    }
  }
</script>

<style scoped>
  .active {
  }
</style>
