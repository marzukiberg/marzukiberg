export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: "universal",
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "static",
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
      },
      {
        rel: "stylesheet",
        href: "wow/css/libs/animate.css"
      },
      {
        rel: "stylesheet",
        href: "style.css"
      }
    ],
    script: [
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js"
      },
      {
        src: "https://code.jquery.com/jquery-3.5.1.slim.min.js"
      },
      {
        src: "https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"
      },
      {
        src:
          "https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
      },
      {
        src:
          "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"
      },
      {
        src: "https://cdn.jsdelivr.net/npm/lax.js"
      },
      {
        src: "/script.js"
      }
    ]
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {}
};
