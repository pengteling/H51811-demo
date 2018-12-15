export default {
  data() {
    return {
      checkedName: [],
      isShow: true,
    }
  },
  render() {
    return (
      <div>
        <h2>{ this.isShow.toString() }</h2>
        <p>{ this.checkedName.toString() }</p>
        <input type="checkbox" value="vue" v-model={this.checkedName} />vue
        <input type="checkbox" value="react" v-model={this.checkedName} />react
        <input type="checkbox" value="angular" v-model={this.checkedName} />angular
      </div>
    )
  },
}
