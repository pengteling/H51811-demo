/* eslint no-unused-vars:"off" */
const FunctionalButton = {
  name: 'FunctionalButton',
  functional: true,
  // render(h, context) {
  //   return (
  //     <p>
  //       hello,
  //       <button onClick={context.listeners.click} >{ context.children }</button>
  //     </p>
  //   )
  // },
  render(h, { data, children, props }) {
    console.log(data)
    console.log(props)
    return h('button', data, ['hello', ...children])
  },
}

export default {
  methods: {
    handlerClick() {
      console.log('clicked')
    },
  },
  render() {
    return (
      <div>
        <FunctionalButton test={0} onClick={ this.handlerClick }>button1</FunctionalButton>
        <FunctionalButton onClick={ this.handlerClick }>button2</FunctionalButton>
      </div>
    )
  },
}
