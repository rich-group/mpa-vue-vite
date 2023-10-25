import vueJsx from '@vitejs/plugin-vue-jsx';
import vue from "@vitejs/plugin-vue";
import inject from '@rollup/plugin-inject';
import path from 'path';

const resolve = (filePath) => path.resolve(__dirname, filePath);
const API_ENTRY_PATH = resolve('../src/apis/index.js')
const STORE_ENTRY_PATH = resolve('../src/utils/reactive.js');

export default {
  plugins: [
    {
      name: 'demo-transform',
      enforce: 'pre',
      transformIndexHtml (html, ctx) {
        const pageName = /(?<=\/)([a-zA-Z0-9]*)(?=\/index.html)/.exec(ctx.path)?.[0] || '';
        return html
          .replace(/__TITTLE__/g, pageName)
          .replace(/__APP__/g, pageName)
          .replace(/__MODULE__/g, `./${pageName}.ts`)
      }
    },
    vue(),
    vueJsx({}),
    inject({
      $API: API_ENTRY_PATH,
      createStore: STORE_ENTRY_PATH
    })
  ]
}