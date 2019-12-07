import Vue from 'vue'
import routes from './routes'
import VueAnalytics from 'vue-analytics'

Vue.use(VueAnalytics, {
    id: 'UA-XXX-X'
})
export const bus = new Vue()
const app = new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname


  },
  watch: {
    $route(to, from) {
      this.slide();
    }
  },
  methods: {
    slide() {
      setTimeout(function() {
        if (window.location.pathname == '/')
          document.body.classList.add('init');
        else
          document.body.classList.remove('init');

      }, 1000);
    }
  },
  created() {
    this.slide()
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
