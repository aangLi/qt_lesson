// <div v-debounce="open">立即购买</div>

function debounce(fn, wait = 2000) {
  var timeout = null;
  return function () {
    if (timeout !== null) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(fn, wait);
  }
}


let option = {
  inserted: (el, binding) => {
    console.log(el, binding);
    binding.value()
  },
  bind: function(el, binding) {
    // unClick
    // addEventListener
    el.addEventListener('click', debounce(binding.value, 2000));
  },
  unbind: function(el, binding) {

  }
}

// require
// import

let plugin = {};
plugin.install = function(argue) {
  argue.directive('debounce', option);
}

if (typeof exports === 'object') {
  modules.exports = plugin;
} else if (window) {
  window.Vue.use(plugin)
}