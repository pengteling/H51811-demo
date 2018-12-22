import Item from '@/Item'

export default ({ props, listeners }) => (
    <div>test</div>
)

// export default {
//   functional: true,
//   render(h, { props, listeners }) {
//     return (
//           <ul class="todo-list">
//           {
//             props.todosView.map(item => (
//               <Item todo={item} onDeleteTodo={listeners.deleteTodo}></Item>
//             ))
//           }
//         </ul>
//     )
//   },
// }
