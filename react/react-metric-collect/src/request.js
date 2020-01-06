const _XMLHttpRequest = window.XMLHttpRequest;
const _fetch = window.fetch();
// window.XMLHttpRequest.prototype.onreadystatechange
function XMLHttpRequest() {
  const xhr = new _XMLHttpRequest();
  function stateChange () {
    if (xhr.readyState === 4) {
      console.log('请求成功了')
    }
  }
  // xhr.addEventListener('timeout')
  // xhr.addEventListener('error');
  // xhr.addEventListener()
  xhr.addEventListener('readystatechange', stateChange)
  return xhr;
}

window.XMLHttpRequest = XMLHttpRequest

function fetch (url, config) {
  // console.log()
  return _fetch.call(window, url, config).then(res => {
    console.log('响应成功')
    return res;
  }).catch(error => {
    console.log('error')
  })
}

window.fetch = fetch;

//
// global.addEventListener('uncatcherror')
// global.addEventListener('unhandlerejection')