window.addEventListener('error', (e) => {
  console.log(e)
  e.preventDefault();
})

document.addEventListener('error', (e) => {
  console.log('资源错误', e);
}, true)

window.addEventListener('unhandledrejection', (e) => {
  console.log('Promise错误', e)
})