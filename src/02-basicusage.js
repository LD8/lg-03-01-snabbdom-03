/**
 * div中放置子元素 h1, p
 */
import { h } from 'snabbdom/build/package/h'
import { init } from 'snabbdom/build/package/init'

const patch = init([])

let vnode = h(
  'div#container',
  {
    // 在未导入模块时下面的 style 属性无法生效
    style: {
      backgroundColor: 'grey',
    },
  },
  [
    h('h1#h1', 'h1 Node'),
    h('p#p', 'p Node', [h('span', 'span1'), h('span', 'span2')]),
  ]
)
// console.log(vnode)
const app = document.querySelector('#app')

let oldVNode = patch(app, vnode)

setTimeout(() => {
  vnode = h('p', 'Everything has changed!')
  oldVNode = patch(oldVNode, vnode)
}, 2000)

setTimeout(() => {
  // 清空操作不可以直接 patch(oldVNode, null) => 报错：TypeError: Cannot read property 'key'
  // 可以这样创建注释节点
  patch(oldVNode, h('!'))
}, 4000)
