export default {
  ssr: false,
  buildDir: ".n",
  srcDir: "porto/",
  target: "static",
  head: {
    titleTemplate: "%s - porto",
    title: "porto",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  css: [],

  plugins: [],

  components: true,

  buildModules: ["@nuxtjs/vuetify"],

  modules: ["@nuxtjs/axios"],

  axios: {
    baseURL: "/",
  },

  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    treeShake: true,
    defaultAssets: {
      font: {
        family: "Lato",
      },
    },
    theme: {
      light: true,
      themes: {
        light: {
          primary: "#16347A",
          accent: "#526CFF",
          secondary: "#F2994A",
          info: "#06A0C1",
          warning: "#F2994A",
          error: "#EB5757",
          success: "#7BBC78",
          brandlight: "#E5F0FF",
          brandbase: "#1D3C69",
          secondarylight: "#F7FFE5",
          secondarybase: "#93D102",
        },
      },
    },
  },

  build: {},
};
