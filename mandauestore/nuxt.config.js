module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Mandaue Store',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/vuetify/dist/vuetify.min.css'}
    ]
  },
  /*
  ** Customize the progress bar color
  */
  env: {
    baseApi: 'http://localhost/estoreapi/public/api'
  },
  router: {
    middleware: 'sidebar-menu'
  },
  loading: { color: '#3B8070' },
  plugins:[
  '~plugins/vuetify.js', 
  '~plugins/globals.js',
  '~plugins/vue2-filters'
  ],
  /*
  ** Build configuration
  */
  build: {
    vendor: ['axios', 'vuetify'],
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
