# Vite Mpa 项目

## 项目结构

```txt
├── config                  环境配置
│   ├── .env.dev            开发环境
│   ├── .env.prd            生产环境
│   ├── .env.pre            验收环境
│   ├── .env.sit            测试环境
│   ├── base.config.ts      vite 基础配置
│   ├── build.config.ts     打包配置
│   ├── dev.config.ts       开发配置
├── src
│   ├── apis                接口
│   │   ├── model           接口数据模型
│   │   ├── index.ts        定义接口
│   │   ├── user.ts         user 相关接口
│   ├── components          业务公共组件
│   ├── locales             多语言配置
│   ├── mock                mock 服务
│   ├── pages               业务模块
│   ├── site                站点配置
│   ├── utils               公共方法
│   ├── router.ts           模块基础信息配置
├── staic                   静态文件
├── typings                 声明文件
├── .browserslistrc         指定目标浏览器
├── .editorconfig
├── .eslintignore           eslint 忽略文件
├── .eslintrc               eslint 配置文件
├── .gitignore              git 忽略文件
├── .npmrc                  npm 配置文件
├── babel.config.js         babel 配置文件
├── CHANGELOG.md            项目变更日志
├── commitlint.config.js    git 提交校验规则
├── package.json            
├── postcss.config.js       postcss 配置文件
├── script.json             scripts 脚本配置
├── tailwind.config.js      tailwindcss 配置文件
├── tsconfig.json           typescript 配置文件
└── vite.config.js          vite 配置文件
```

## 命令

### 项目启动
```sh
rich run dev
```

浏览器访问 `http://[ip]:[port]/[module]/`, 例如: `http://localhost:5174/user/`。

```txt
http://localhost:5174

http://localhost:5174/user
```

上述访问全部 `404`。注意：别忘了模块名称后的 `/`。


### 项目打包
```sh
rich run build
```

### 打包依赖报告

```sh
rich run build --report
```

## 功能列表

- 多语言
- 站点配置
- mock
- 基础组件
  - Loading
  - Provider