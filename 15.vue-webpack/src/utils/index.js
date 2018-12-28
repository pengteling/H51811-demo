/* eslint import/prefer-default-export:'off' */
export const evil = (fn) => {
  const Fn = Function
  return new Fn(`return ${fn}`)()
}


export const formatTime = (num) => {
  const hh = parseInt(num / 3600, 10)
  const mm = parseInt((num - hh * 3600) / 60, 10)
  const ss = parseInt(num - hh * 3600 - mm * 60, 10)
  const hhstr = hh > '0:' ? hh : ''
  const mmstr = mm < 10 ? `0${mm}` : mm
  const ssstr = ss < 10 ? `0${ss}` : ss
  return `${hhstr}${mmstr}:${ssstr}`
}
