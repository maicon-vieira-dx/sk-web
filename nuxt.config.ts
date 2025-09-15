// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  ssr: true,
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxt/test-utils',
    '@nuxt/image',
    'vuetify-nuxt-module'
  ],
  plugins: ['~/plugins/vuetify'],
  build: {
    transpile: ['vuetify']
  },
  vuetify: {
    moduleOptions: {
      styles: true
    },
    vuetifyOptions: {
      icons: {
        defaultSet: 'mdi',
        sets: ['mdi']
      }
    }
  },
  typescript: {
    tsConfig: {
      compilerOptions: {
        paths: {
          "~/*": ["./*"],
          "@/*": ["./*"],
          "~~/*": ["./*"],
          "@@/*": ["./*"]
        }
      },
      include: [
        "./types/**/*.ts",
        "./types/**/*.d.ts",
        "./types/**/*.tsx",
        "./types/**/*.vue"
      ]
    }
  }
})