import ToastComponent from './index.vue';
import vue from 'vue';
console.log(ToastComponent);

// visiable = true props
// // .msg = 'xx'
// .visiable = true;

// 返回一个构造函数
// function Person(name, age) {
//   this.name = '';
//   this.age = '';
// }

// EditInPlace

const toastConstruct = vue.extend(ToastComponent);

function showMessage (msg, duration = 2000) {
  const instance = new toastConstruct({
    el: document.createElement('div'), // 相当于确定位置
    propsData: {
      msg: msg,
      visiable: true
    }
  })
  document.body.appendChild(instance.$el);
  console.log(instance);
  setTimeout(() => {
    instance.visiable = false;
  }, duration);
}

export default showMessage;
// export default ToastComponent;