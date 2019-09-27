## 隐藏在 vue-cli 下面的东西

<template>
  <div>
    <slot></slot>
    <ElButton></ElButton>
  </div>
</template>

里面的东西 都会 被编译为
h('div', {}, [children]);
babel.io

h() 函数的返回 一个对象
{
  详细的描述了，该标签上 (div component) 的信息： props tag elm children id class 子节点
}

虚拟节点 (virtual node) VNode
虚拟 DOM : Vnode 建立起来的一个树