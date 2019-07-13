// 立刻执行函数
(
    function (window, document) {
        var prefixes = ['webkit', 'Moz', 'ms', 'o', ''],
            book = document.querySelectorAll('.book')[0],
            page = document.querySelectorAll('.front-cover')[0],
            dino = document.querySelectorAll('.dino')[0],
            shadow = document.querySelectorAll('.shadow')[0],
            hold = false,
            centerPoint = window.innerWidth / 2,
            pageSize = 300,
            // 取一个中间值
            clamp = function (val, min, max) {
                return Math.max(min, Math.min(val, max))
            }

        //鼠标按下时执行的事件
        window.onmousedown = function () {
            hold = true;
            // console.log(123);
        }
        // 鼠标松开时执行的事件
        window.onmouseup = function () {
            hold = false;
            // console.log(456);
        }
        // 在窗口被调整大小的时候执行的事件
        window.onresize = function () {
            centerPoint = window.innerWidth / 2;
        }
        window.onmousemove = function (event) {
            if (!hold) {
                return;
            }
            // console.log(event.pageX);
            // page.style.transform.rotateY(`${event.offsetX-centerPoint}deg`)
            var angle = clamp((centerPoint - event.pageX + pageSize) / pageSize * -90, -180, 0),
                i,
                j;

            for (i = 0, j = prefixes.length; i < j; i++) {
                book.style[prefixes[i] + 'Transform'] = `rotateX(${60 + angle / 8}deg)`;
                page.style[prefixes[i] + 'Transform'] = `rotateY(${angle}deg)`;
                dino.style[prefixes[i] + 'Transform'] = `rotateX(${angle / 2}deg)`;
                // skew 表示倾斜
                shadow.style[prefixes[i] + 'Transform'] = `translateZ(1px) skewX(${angle / 8})`;
            }
        }
        window.onmouseout = function () {
            hold = false;
            // console.log(456);
        }
    }
)(window, document)