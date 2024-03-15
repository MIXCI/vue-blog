---
title: Grid fixed values
author: 君莫愁
createTime: 2023/08/06 10:46:45
permalink: /defensive-css/grid-fixed-values/
---

## Grid fixed values

假设我们有一个 网格 布局，包含一个 aside 和 一个 main。 
CSS 如下所示：

```css
.wrapper {
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 1rem;
}
```
:::demo-wrapper
<div class="demo1-wrapper">
  <aside>aside</aside>
  <main>main</main>
</div>
:::

<style scoped>
.demo1-wrapper {
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 1rem;
}

.demo1-wrapper aside,
.demo1-wrapper main {
  text-align: center;
  line-height: 100px;
  height: 100px;
}

.demo1-wrapper aside {
  background-color: var(--vp-c-gray-3);
}
.demo1-wrapper main {
  background-color: var(--vp-c-brand-3);
}
</style>


由于空间不足，这将在较小的视口尺寸上导致溢出。
为避免此类问题，请在使用上述 CSS 网格时始终使用媒体查询。

在视口尺寸较小时，换行显示，在视口尺寸较大时，使用 网格布局。

```css
@media (min-width: 600px) {
  .wrapper {
    display: grid;
    grid-template-columns: 250px 1fr;
    gap: 1rem;
  }
}
```

:::demo-wrapper
<div class="demo2-wrapper">
  <aside>aside</aside>
  <main>main</main>
</div>
:::

<style scoped>
@media (min-width: 600px) {
  .demo2-wrapper {
    display: grid;
    grid-template-columns: 250px 1fr;
    gap: 1rem;
  }
}

.demo2-wrapper aside,
.demo2-wrapper main {
  text-align: center;
  line-height: 100px;
  height: 100px;
}

.demo2-wrapper aside {
  background-color: var(--vp-c-gray-3);
}
.demo2-wrapper main {
  background-color: var(--vp-c-brand-3);
}
</style>

:::center
调整浏览器窗口大小查看效果。
:::
