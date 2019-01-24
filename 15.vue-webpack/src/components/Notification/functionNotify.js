import Vue from 'vue'
import Notification from './Notification'

const instances = []
const removeInstance = (instance) => {
  const index = instances.findIndex(item => item === instance)
  instances.splice(index, 1)

  // const removeHeight = instance.vm.$el.offsetHeight + 56
  const removeHeight = instance.height + 56
  /* 重算受影响的实例的偏移值 */
  instances.forEach((item, i) => {
    if (i >= index) {
      setTimeout(() => {
        item.vm.verticalOffset -= removeHeight
      }, 500)
    }
  })
}
const notify = (options) => {
  const NotificationConstructor = Vue.extend(Notification)
  const instance = new NotificationConstructor({
    propsData: {
      // content: options.content,
      // autoClose:options.autoClose
      ...options,
    },
  })
  console.log(instance)
  instance.vm = instance.$mount()
  // document.body.appendChild(instance.vm.$el)
  document.querySelector('.components-header').appendChild(instance.vm.$el)

  const verticalOffset = instances.reduce((h, item) => h + item.$el.offsetHeight + 56, 20)
  console.log(verticalOffset)
  instance.verticalOffset = verticalOffset

  instances.push(instance)
  // instance.visible = true
  instance.$on('close', () => {
    // console.log('$on:close')
    removeInstance(instance)
  })
}
export default notify
