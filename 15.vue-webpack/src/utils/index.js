/* eslint import/prefer-default-export:'off' */
export const evil = (fn) => {
  const Fn = Function
  return new Fn(`return ${fn}`)()
}
