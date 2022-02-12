---
title: '利用WAAPI实现百叶窗切页效果'
date: '2021-02-09'
route: 'shutter'
author: 'hulalala'
---

# 利用 WAAPI 实现百叶窗切页效果

## 实现效果

[在 CodePen 上查看](https://codepen.io/hulalala/pen/VwrpMBy)

[在 Github 上查看](https://github.com/hulala1a/shutter_example)

![百叶窗](shutter.gif)

## 简单思路

复制要切页的节点，利用 CSS 的 clip-path 属性对节点进行裁剪，将节点分成多个部分，给各个部分设置不同延时的平移旋转动画效果即可。

## 代码实现

```JavaScript
const fronts = documeclint.querySelectorAll('.front')
const backs = document.querySelectorAll('.back')
const n = fronts.length
const player = []

const keyframes = (num, n, isFront) => [
  {
    transform: isFront
      ? "rotateY(0deg)"
      : `rotateY(-120deg) translateX(${100 / n}%)`,
    transformOrigin: `${(100 / n) * (num + 1)}%`
  },
  {
    transform: isFront
      ? `rotateY(120deg) translateX(-${100 / n}%)`
      : "rotateY(0deg) ",
    transformOrigin: `${(100 / n) * num}%`
  }
];

const options = {
  duration: 1000,
  fill: 'both',
}

const playAll = () => {
  player.forEach(value => {
    value.play()
  })
}

for (let i = 0; i < n; i++) {
  fronts[i].style.clipPath = `inset(0% ${Math.floor(100 - (100 / n) * (i + 1))}% 0% ${Math.floor((100 / n) * i)}%)`
  backs[i].style.clipPath = `inset(0% ${Math.floor(100 - (100 / n) * (i + 1))}% 0% ${Math.floor((100 / n) * i)}%)`
  player.push(
    new Animation(
      new KeyframeEffect(fronts[i], keyframes(i, n, true), {
        ...options,
        iterations: 0.75,
        delay: (i < n / 2 ? n / 2 - 1 - i : i - n / 2) * 200,
      }),
    ),
  )
  player.push(
    new Animation(
      new KeyframeEffect(backs[i], keyframes(i, n, false), {
        ...options,
        delay: (i < n / 2 ? n / 2 - 1 - i : i - n / 2) * 200,
      }),
    ),
  )
}

playAll()

```
