---
title: '用 Promise 封装你的 CSS 动画'
date: '2021-02-10'
route: 'animation2promise'
author: 'hulalala'
---

# 用 Promise 封装你的 CSS 动画

现实场景中，多个动画效果一般都会有先后关系，动画结束后也需要进行一些操作。若用 setTimeOut 方法，则不能保证计时器与动画结束事件同步。如果用事件监听，应对一些复杂的场景的话，写起来也比较麻烦。将 CSS 动画封装成 Promise 无疑是一个很好的方案。

通常的做法是：监听 animationend 事件，在其回调函数中执行 resolve 方法，改变 Promise 状态。

```javascript
const onceAnimationEnd = (el, animation) => {
  return new Promise(resolve => {
    const onAnimationEndCb = () => {
      el.removeEventListener('animationend', onAnimationEndCb)
      resolve()
    }
    el.addEventListener('animationend', onAnimationEndCb)
    el.style.animation = animation
  })
}
```

一个简单实用的场景：实现动画一个接一个地运行。

首先，定义一个 CSS 动画。

```css
@keyframes move {
  to {
    transform: translateX(200px);
  }
}
```

利用 Promise 实现效果。

```javascript
const box1 = document.querySelector('.box1')
const box2 = document.querySelector('.box2')
const box3 = document.querySelector('.box3')

//使用 Promise
const play = () => {
  return onceAnimationEnd(box1, 'move linear forwards 1s 1')
    .then(() => onceAnimationEnd(box2, 'move linear forwards 1s 1'))
    .then(() => onceAnimationEnd(box3, 'move linear forwards 1s 1'))
}

//使用 async/await
const play = async () => {
  await onceAnimationEnd(box1, 'move linear forwards 1s 1')
  await onceAnimationEnd(box2, 'move linear forwards 1s 1')
  await onceAnimationEnd(box3, 'move linear forwards 1s 1')
}

play()
```
