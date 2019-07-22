var wechat = document.querySelector("li.item[data-key = 'send']");

var parentUl = document.querySelector('ul.content_items[data-key = "content_items"]');

// 标签节点
// 属性节点
// 文本节点




// { <li class="content_item">
// <div class="left_pic">
//     <img src="./images/user.jpg" alt="">
// </div>
// <div class="message">
//     <p class="name">螺旋式火箭</p>
//     <p class="detail">我要送你上天</p>
// </div>
// <div class="time">
//     <span>下午 3:50</span>
// </div>
// </li> }

wechat.addEventListener('click', function () {

    // jq
    var html = $(' <li class="content_item">' +
        '<div class="left_pic">' +
        '<img src="./images/user.jpg" alt="">' +
        '</div>' +
        '<div class="message">' +
        '<p class="name">螺旋式火箭</p>' +
        '<p class="detail">我要送你上天</p>' +
        '</div>' +
        '<div class="time">' +
        '<span>下午 3:50</span>' +
        '</div>' +
        '</li>');
    html.appendTo(parentUl);

    $(parentUl).append(' <li class="content_item">' +
    '<div class="left_pic">' +
    '<img src="./images/user.jpg" alt="">' +
    '</div>' +
    '<div class="message">' +
    '<p class="name">螺旋式火箭</p>' +
    '<p class="detail">我要送你上天</p>' +
    '</div>' +
    '<div class="time">' +
    '<span>下午 3:50</span>' +
    '</div>' +
    '</li>');

    // 源生js

    // var li = document.createElement('li');
    // li.setAttribute('class', 'content_item');

    // var divPic = document.createElement('div');
    // divPic.setAttribute('class', 'left_pic');

    // var img = document.createElement('img');
    // img.setAttribute('src', './images/user.jpg');

    // var divMessage = document.createElement('div');
    // divMessage.setAttribute('class', 'message');

    // var p1 = document.createElement('p');
    // p1.setAttribute('class', 'name');
    // var p1Text = document.createTextNode('AANG_LI');
    // p1.appendChild(p1Text);

    // var p2 = document.createElement('p');
    // p2.setAttribute('class', 'detail');
    // var p2Text = document.createTextNode('SBFNXK10000815');
    // p2.appendChild(p2Text);

    // var divTime = document.createElement('div');
    // divTime.setAttribute('class', 'time');

    // var span = document.createElement('span');
    // var spanText = document.createTextNode('下午15:90');
    // span.appendChild(spanText);


    // divPic.appendChild(img);
    // li.appendChild(divPic);
    // li.appendChild(divMessage);
    // divMessage.appendChild(p1);
    // divMessage.appendChild(p2);
    // li.appendChild(divTime);
    // divTime.appendChild(span);

    // parentUl.appendChild(li);
    // console.log(li);
});