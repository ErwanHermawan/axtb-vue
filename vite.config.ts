import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// --- baseURl
const baseURl = './src'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      // -- ROOT
      '@': fileURLToPath(new URL(baseURl, import.meta.url)),

      //-- CORE
      '@img': fileURLToPath(new URL(`${baseURl}/core/asset/img/`, import.meta.url)),
      '@config': fileURLToPath(new URL(`${baseURl}/core/config/`, import.meta.url)),
      '@hooks': fileURLToPath(new URL(`${baseURl}/core/hooks/`, import.meta.url)),
      '@model': fileURLToPath(new URL(`${baseURl}/core/model/`, import.meta.url)),
      '@persist': fileURLToPath(new URL(`${baseURl}/core/persist/`, import.meta.url)),
      '@state': fileURLToPath(new URL(`${baseURl}/core/state/`, import.meta.url)),
      '@style': fileURLToPath(new URL(`${baseURl}/core/style/`, import.meta.url)),
      '@util': fileURLToPath(new URL(`${baseURl}/core/util/`, import.meta.url)),

      //-- INFRASTRUCTURE
      '@api': fileURLToPath(new URL(`${baseURl}/infrastructure/api/`, import.meta.url)),
      '@widget': fileURLToPath(new URL(`${baseURl}/infrastructure/widget/`, import.meta.url)),

      //-- PRESENTATION
      '@atom': fileURLToPath(new URL(`${baseURl}/presentation/component/atom/`, import.meta.url)),
      '@molecule': fileURLToPath(
        new URL(`${baseURl}/presentation/component/molecule/`, import.meta.url)
      ),
      '@organism': fileURLToPath(
        new URL(`${baseURl}/presentation/component/organism/`, import.meta.url)
      ),
      '@template': fileURLToPath(
        new URL(`${baseURl}/presentation/component/template/`, import.meta.url)
      ),
      '@app': fileURLToPath(new URL(`${baseURl}/presentation/container/app/`, import.meta.url)),
      '@page': fileURLToPath(new URL(`${baseURl}/presentation/container/page/`, import.meta.url))
    }
  }
})
