# 神奇之星的个人主页

## 1. 简介

基于 Vue3 前端框架实现的静态个人网站。

## 2. 项目结构

```text
vue-proj
  ├─.vscode
  ├─node_modules  # npm nstall 下载的第三方包存放目录
  ├─public
  ├─src  # 源代码存放目录
  |  ├─api  # 配置 api
  |  |  ├─view1.js
  |  |  ├─view2.js
  |  |  └─view3.js
  |  ├─assets  # 静态资源目录，存放图片、字体...
  |  |  ├─base.css
  |  |  ├─logo.svg
  |  |  └─main.css  # 首页的默认样式
  |  ├─components  # 组件目录，存放通用组件
  |  ├─views  # 视图目录
  |  |  ├─index  # 首页视图组件
  |  |  |  └─index.vue
  |  |  ├─layout  # 页面布局组件
  |  |  |  └─index.vue
  |  |  ├─...  # 其他组件
  |  |  └─login  # 登录界面
  |  |     └─index.vue
  |  ├─router  # 路由配置
  |  |  └─index.js
  |  ├─utils  # 工具
  |  |  └─request.js  # api
  |  ├─App.vue  # 根组件
  |  └─main.js  # 入口文件
  ├─.gitignore
  ├─index.html  # 默认首页
  ├─package-lock.json
  ├─package.json  # 项目配置文件，包括项目名、版本号、依赖包、版本等
  ├─README.md
  └─vite.confige.js  # Vue 项目的配置文件，如端口号、代理等
```

## 3. 项目启动方式

在终端中执行命令`npm run dev`，或在 Vscode 中的 NPM 脚本视图上点击`dev vite`运行按钮

```PowerShell
PS E:\javacode\vue\vue-project1> npm run dev  # 启动 Vue 项目

> vue-project1@0.0.0 dev
> vite


  VITE v3.2.11  ready in 1635 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```
