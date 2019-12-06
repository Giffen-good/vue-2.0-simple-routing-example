import Vue from 'vue'
import routes from './routes'
import VueAnalytics from 'vue-analytics'

Vue.use(VueAnalytics, {
    id: 'UA-XXX-X'
})
const app = new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  mounted: function() {
      this.$nextTick(function() {
        setTimeout(function() {
          document.body.classList.add('init');
        }, 1000);
      })
  },
  computed: {
    ViewComponent () {
      const matchingView = routes[this.currentRoute]
      return matchingView
        ? require('./pages/' + matchingView + '.vue')
        : require('./pages/404.vue')
    }
  },
  render (h) {
    return h(this.ViewComponent)
  }
})

window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname
})
