import './style/app.css'

export default {
  name: 'App',
  data() {
    return {
      text: 'test123',
    }
  },
  render() {
    return <div id="foo">{ this.text }</div>
  },
}
