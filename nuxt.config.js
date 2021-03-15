export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'fixrhythm',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    {
      src: '~/plugins/vue2-perfect-scrollbar.js',
      mode: 'client'
    }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,
  target: 'static',

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
