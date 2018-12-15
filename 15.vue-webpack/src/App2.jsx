const Child = {
  functional: true,
  props: {
    name: String,
    age: Number,
  },
  render(h, context) {
    return (
      <p>
        { context.props.name } - {context.props.age}
      </p>
    )
  },
}
export default {
  data() {
    return {
      list: [
        { name: 'zs', age: 18 },
        { name: 'ls', age: 17 },
      ],
    }
  },
  render() {
    return (
      <section>
        {
          this.list.map(o => <Child key={ o.name }
              data = { o }
              { ...{ props: o } }
            />)
        }
      </section>
    )
  },

}
