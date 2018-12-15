import Child from '@/Child.jsx'

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
  },
  render() {
    return (
      <div>
        <Child />
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
