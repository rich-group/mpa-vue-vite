import { defineConfig, loadEnv } from "vite";
import { readdirSync } from "fs";
import DevConfig from './config/dev.config'
import BuildConfig from './config/build.config'

const rootPath = process.cwd();
const srcPath = process.cwd() + '/src';
const entryPath = srcPath + "/pages";

const devMode = process.env.NODE_ENV !== 'production';

const entrys = readdirSync(entryPath).reduce((obj, moduleName) => Object.assign(obj, {
  [moduleName]: entryPath + `/${moduleName}/index.html`
}), {})

export default defineConfig(({ mode, command }) => {

  // 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀。
  const env = loadEnv(mode, rootPath + '/config', '');
  return {
    root: './src/pages/',
    plugins: devMode ? DevConfig.plugins : BuildConfig.plugins,
    experimental: {
      renderBuiltUrl () {
        return { relative: true }
      }
    },
    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx", ".vue", ".json"],
      alias: {
        "@": srcPath
      },
    },
    server: {
      open: true
    },
    build: {
      rollupOptions: {
        input: entrys,
        output: {
          entryFileNames: '[name].js'
        }
      },
      outDir: rootPath + "/dist",
      emptyOutDir: true             // 构建前删除dist文件夹
    },
    define: {
      'process.env': env
    },
    esbuild: {
      jsxFactory: 'h',
      jsxFragment: 'Fragment',
      jsxInject: `import $API from '@/apis'`
    }
  };
});
