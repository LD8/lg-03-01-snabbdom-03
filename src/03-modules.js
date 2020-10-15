/**
 * 模块的使用
 */
import { h } from 'snabbdom/build/package/h'
import { init } from 'snabbdom/build/package/init'
// 导入模块
import { styleModule } from 'snabbdom/build/package/modules/style'
import { eventListenersModule } from 'snabbdom/build/package/modules/eventlisteners'

// 注册模块
const patch = init([styleModule, eventListenersModule])

// 传入模块需要的数据（对象）
let vnode = h(
  'div#container',
  {
    style: {
      backgroundColor: 'grey',
    },
    on: {
      click() {
        alert('clicked')
      },
    },
  },
  [
    h('h1#h1', 'h1 Node'),
    h('p#p', 'p Node', [h('span', 'span1 '), h('span', 'span2')]),
  ]
)
// console.log(vnode)
const app = document.querySelector('#app')

let oldVNode = patch(app, vnode)
