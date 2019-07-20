/**
 * 
 */

(function() {
    $.ajax({
        url:'https://www.easy-mock.com/mock/5d2ed7bc1418505a5562ae26/movie/movie/name',
        type:'get',
        success: function(res) {
            console.log(res);
            $('#moviePic').attr('src',res.data.moviePic);
            $('.score-num span').html(res.data.people);
            $('.movie-name span').html(res.data.name);
            $('.movie-eName span').html(res.data.nameEnglish);

            $('.rating-score').html(res.data.grade);
            star(res.data.grade/2);
            $('.movie-type').html(res.data.type);
            $('.address').html(res.data.where);
            $('.time').html(res.data.time);
            $('.date').html(res.data.date);
        }
    });
    function star(e) {
        let num = Math.floor(e);
        let white =Math.floor(5 - e);
        for (let i = 0; i < white; i++){
            $('#rating').prepend('<img class="img" src="./images/star2.png"></img>')
        }
        if(e > num) {
            // prepend 添加 DOM 结构 总是在最前面添加某一个DOM结构
            $('#rating').prepend('<img class="img" src="./images/star-h.png"></img>')
        }
        for(let i = 0; i < num; i++){
            $('#rating').prepend('<img class="img" src="./images/star.png"></img>')
        }
    }
})()