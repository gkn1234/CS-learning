<!--
 * @Autor: Guo Kainan
 * @Date: 2021-09-14 14:33:21
 * @LastEditors: Guo Kainan
 * @LastEditTime: 2021-09-14 14:56:52
 * @Description: 
-->
# @pixi/core - Renderer
`PIXIJS` 的渲染器，用于 `WEBGL` 绘图，核心中的核心。

`PIXI.Application` 中最关键的一步，就是通过 `this.renderer = new Renderer(options)` 创建了渲染器。 `Application` 中的参数几乎原封不动传给了 `Renderer`。

`Renderer` 继承了 `AbstractRenderer`。显然，`AbstractRenderer` 提供了更加基础的渲染能力。+

`AbstractRenderer` 继承了一个事件触发器 `EventEmitter`，使其具有了分发与相应事件的能力。(即 `on` 、 `emit` 、`off` 事件三板斧)

## Renderer的系统
addSystem

## Renderer的插件
registerPlugin


