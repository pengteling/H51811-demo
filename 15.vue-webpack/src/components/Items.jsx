// import { mapGetters, mapMutations } from 'vuex'
import Item from './Item'

const Items = ({ props }) => (
  <ul class="todo-list">
    {
      props.todosView.map(todo => (
        <Item todo={todo}></Item>
      ))
    }
  </ul>
)
export default Items
// export default {
//   functional: true,
//   render(h, { props, listeners }) {
//     return (
//       <ul class="todo-list">
//       {
//         props.todosView.map(todo => (
//           <Item todo={todo} onDeleteTodo={listeners.deleteTodo}></Item>
//         ))
//       }
//       </ul>
//     )
//   },
// }
