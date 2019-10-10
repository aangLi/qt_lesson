export function debounce (func, delay) {
  let timer = null
  return function (...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}

export function findIndex (playList, song) {
  return playList.findIndex((item) => {
    return item.id === song.id
  })
}
