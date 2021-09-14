<!--
 * @Autor: Guo Kainan
 * @Date: 2021-09-14 14:21:13
 * @LastEditors: Guo Kainan
 * @LastEditTime: 2021-09-14 14:33:13
 * @Description: 
-->
# @pixi/app
用于构建 `PIXIJS` 的应用实例

文档地址： [@pixi/app](https://pixijs.download/release/docs/PIXI.Application.html)

# 基本用法
```js
import { Application } from '@pixi/app';

const app = new Application({
  // ... 各种配置，可以参考文档
});
document.body.appendChild(app.view);

// 一般的 PIXI.Application 对象具有以下重要属性
app.ticker // 时间片对象 Ticker ，用于帧刷新
app.loader // 用于读取资源的 Loader
app.stage // 舞台，即作为根容器的 Container
app.renderer // 画布，渲染器 Renderer ，PIXI核心部件，需要重点了解。
```

# 重要用法
- 配置参数中 `resizeTo` 可以指定一个 `DOM` 对象，画布将永远保持与对象的尺寸同步。这是由于 `Application` 对象默认注册了一个监听屏幕尺寸变化的插件，可用于做屏幕适配。
