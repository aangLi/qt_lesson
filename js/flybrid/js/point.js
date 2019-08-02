function Point() {
    this.pointDiv = null;
    // 初始化
    this.init = function (scroe) {
        console.log(scroe);
        this.createPointDiv(scroe);
        jsWrapBg.appendChild(this.pointDiv);
        console.log(this.pointDiv);
    }
    // 创建分数的盒子
    this.createPointDiv = function (scroe) {
        this.pointDiv = document.createElement('div');
        this.pointDiv.id = 'pointDiv';
        this.pointDiv.style.position = 'absolute';
        this.pointDiv.style.marginTop = '20%';
        this.pointDiv.style.marginLeft = '44%';
        this.splitScore(scroe)
    }
    // 创建分数的图片
    this.createPointImg = function (num) {

        var pointImg = document.createElement('img');
        pointImg.src = `./img/${num}.jpg`;
        return pointImg;
    }
    // 数字分离
    this.splitScore = function (score) {
        // console.log('splitScore');
        for (var i = String(score).length; i > 0; i--) {
            this.pointDiv.appendChild(
                this.createPointImg(
                    Math.floor(score / (Math.pow(10, i - 1)))
                )
            );
            console.log(score);
            console.log(score / Math.pow(10, i - 1));
            console.log(Math.pow(10, i - 1))
            console.log(Math.floor(score / Math.pow(10, i - 1)));
            score = score % (Math.pow(10, i - 1));
        }
    }
    // 绘制图片

    // 设置分数的点数
}