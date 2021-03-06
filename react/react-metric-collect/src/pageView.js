function pageCount() {
  console.log(window.location.href, '+1')
}
window.addEventListener('hashchange', pageCount)

// history
window.addEventListener('popstate', pageCount)

// pushState, replaceState 无法监控到
let hooks = ['pushState', 'replaceState'];
hooks.forEach(hook => {
  let method = window.history[hook];
  window.history[hook] = function(...args) {
    setTimeout(pageCount, 0);
    return method.apply(window.history, args)
  }
})
