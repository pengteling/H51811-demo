import Child from '@/Child.jsx'

const InnerComponent = {
  props: ['name'],
  render() {
    return (
      <div>
        <h2>innerComponent { this.name }</h2>
      </div>
    )
  },
}

export default {
  // components: {
  //   Child,
  // },
  data() {
    return {
      arr: [1, 2, 3],
      isShow: false,
      iptVal: '456',
      count: 0,
    }
  },
  methods: {
    addCount() {
      this.count = this.count + 1
    },
    getMsg(val) {
      this.iptVal = val
      console.log(val)
    },
    addCount2(num) {
      this.count = this.count + num
    },
  },
  render() {
    return (
      <div>
        {/* <Child onChildMsg = {this.getMsg} nativeOnClick= { this.addCount } /> */}
        <InnerComponent name={this.iptVal}></InnerComponent>
        <Child onChildMsg = {this.getMsg} nativeOnClick= { this.addCount2.bind(this, 3) } />
        <input type="text" v-model={this.iptVal} onClick={this.addCount} />
        <p>
          { this.count }
        </p>
        <ul v-show={ this.isShow }>
        {
          this.arr.map(v => <li>
            { v }
          </li>)
        }
        </ul>
      </div>
    )
  },
}
