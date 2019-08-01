// var mm = 1;
// 'use strict';
// with ({x:1})
// {
//     console.log(x);
// }

// x = 1; 
// console.log(x);

// var x = 1;
// console.log(x);


// eval("var x = 20,y = 20;console.log(x + y);");
// console.log(x);

// function sss (x)
// {
//     arguments[0] = 100;
//     console.log(x);
// }

// function sss (x){
//     arguments[0].a = 100;
//     console.log(x.a);
// }

// sss(); 
// sss(1);
// sss({a:1});

// !function sss (c) {
//     var a = 1;
//     console.log(delete (a)); 
// }(1);

// !function sss() {
//     var obj = {};
//     Object.defineProperty(obj,{a:1},{configurable : false});
//     console.log(delete obj.a);
// }(1);


// !function sss() {
//     console.log(this);
// }(1);

// Object.color = 'red';

// function sss() {
//     console.log(this.color);
// };

// sss.call(this);

function sss() {
    var obj = {};
    Object.defineProperty(obj,{a:1},{writeable : false});
    console.log(obj.a = 3);
    console.log(arguments.callee);
    console.log(sss.caller);
};

function test() {
    sss();
}
test();
