var Snake = {
    snake: [
        {
            x: 150,
            y: 150
        },
        {
            x: 140,
            y: 150
        },
        {
            x: 130,
            y: 150
        },
        {
            x: 120,
            y: 150
        },
        {
            x: 110,
            y: 150
        },
    ],

    // 画板的初始化
    init: function () {
        ctx.fillStyle = 'white';
        ctx.strokeStyle = 'black';
        ctx.strokeRect(0, 0, gameCanvas.clientWidth,
            gameCanvas.clientHeight);
    },

    /**
     * params {number[]} num
     * return divs
    */
    drawSnake: function () {
        Snake.snake.forEach(Snake.drawSnakePart);
    },

    /**
     * params {number[]} snakePart
     * return div
    */
    drawSnakePart: function (snakePart) {
        ctx.fillStyle = 'lightgreen';
        ctx.strokeStyle = 'blackgreen';
        ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
        ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
    },

    /**
     * 画一个食物
     * param {number[]} snake
     * return div
     */
    drawSnakeFood: function () {
        ctx.fillStyle = 'red';
        var foodX = Snake.createRandomNumber(1, 299);
        var foodY = Snake.createRandomNumber(1, 299);
        // for ()
    },

    /**
     * 返回一个随机数
     * param {number} min
     * param {number} max
     * return param {number}
     */
    createRandomNumber: function (min, max) {
        return Math.floor(Math.random(max - min + 1) + min);
    },
}