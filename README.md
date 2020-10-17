# Lagou Edu Part 3 Module 1 - snabbdom assignment

## 内容
利用 Snabbdom 实现电影列表示例，功能包括：删除电影、增加电影，以及对电影评分、标题、描述的排序

--- 

## 注意
这里使用的**最高**版本的snabbdom，在使用 `h` 函数时需注意

- 正确的打开方式：
```js
h('a.btn.rank', on: { click() {changeSort('rank')} }, 'Rank')
```

- 错误的打开方式：
```js
h('a.btn.rank', on: { click: [changeSort, 'rank'] }, 'Rank')
```
---

## 使用和安装

```bash
$ git clone https://github.com/LD8/lg-03-01-snabbdom-03.git
$ cd lg-03-01-snabbdom-03
$ yarn
$ yarn dev
```
