module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Juan Merkado',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/vuetify/dist/vuetify.min.css'}
    ]
  },
  css: [
    '~assets/css/luminous-basic.css'
  ],
  /*
  ** Customize the progress bar color
  */
  env: {
    baseApi: 'http://localhost/estoreapi/public/api',
    basePublic: 'http://localhost/estoreapi/public'
  },
  router: {
    middleware: ['sidebar-menu', 'auth']
  },
  loading: { color: '#3B8070' },
  plugins:[
  '~plugins/vuetify.js', 
  '~plugins/globals.js',
  '~plugins/vue2-filters',
  '~plugins/carousel',
  '~plugins/start-rating',
   { src: '~/plugins/localStorage.js', ssr: false },
  ],
  /*
  ** Build configuration
  */
  build: {
    vendor: ['axios', 'vuetify', 'drift-zoom', 'lodash'],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      /*if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }*/
    }
  }
}
