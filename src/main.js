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
        if (window.location.pathname == '/'){
          document.body.classList.add('init');
        document.getElementById('contact').classList.remove('con');
      }    else {
          document.body.classList.remove('init');
          document.getElementById('contact').classList.add('con');

        }

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
});
