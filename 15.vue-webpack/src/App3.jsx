import classNames from './style/app.css'
// import { formatDate } from './utils'
export default {
  data() {
    return {
      count: 0,
    }
  },
  render() {
    return (
      <div class={ classNames.app }>
        App3 { this.count }
      </div>
    )
  },
}
