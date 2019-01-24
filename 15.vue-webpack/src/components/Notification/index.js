import Notification from './Notification'
import notify from './functionNotify'
// export default {
//   install(Vue, options) {
//     Vue.component(Notification.name, Notification)
//   },
// }
export default function (Vue, options) {
  Vue.component(Notification.name, Notification)
  Vue.prototype.$notify = notify
  Vue.prototype.$pluginStore = options.store
  Vue.prototype.$pluginRouter = options.router
}
