export default {
  name: 'Child',
  data() {
    return {

    }
  },
  mounted() {
    setTimeout(() => this.$emit('childMsg', 'child'), 3000)
  },
  render() {
    return (
      <div>
        Child
      </div>
    )
  },
}
