// export default function ({ slots }) {
//   return (
//     <div>
//       {slots().default[0]}
//     </div>
//   )
// }
/* eslint import/prefer-default-export:'off' */
export const PermissionComp = ({ slots }) => (<div>
   {slots().default[0]}
</div>)
