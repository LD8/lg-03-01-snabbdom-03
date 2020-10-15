/**
 * 基本使用
 */
import { h } from 'snabbdom/build/package/h'
import { init } from 'snabbdom/build/package/init'

const patch = init([])

const vnode = h('p#container.cls', 'Hello World!')
const app= document.querySelector('#app')

// 似乎是将 app 替换成了 vnode
const oldVNode = patch(app, vnode)

console.log(oldVNode===vnode) // true

const newVNode = h('h1', 'Snabbdom Rules!!')
console.log(newVNode)

// 老左新右
patch(oldVNode, newVNode)

