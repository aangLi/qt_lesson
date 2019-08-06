const https = require('https');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');
// GET POST GET 获取数据

// 分段收到数据，收到一点数据就执行一次
https.get('https://www.smzdm.com/youhui/', function (res) {

    res.setEncoding('utf-8');
    let html = '';
    let list = [];
    res.on('data', function (chunk) {
        html += chunk;
    });
    res.on('end', function (chunk) {
        const $ = cheerio.load(
            html, {
                decodeEtities: false
            } // decodeEtities 是
        )
        // 只有一个参数 整个 document 上面搜索
        $('.list.list_preferential').each(function () {
            const _this = this;
            // document.querySelector('.itemName a');
            // $('.list').querySelector('.itemName a')
            let title = $('.itemName a', _this).text();
            let price = $('.red', _this).text();
            let img = $('.picLeft img', _this).attr('src');
            list.push(
                {
                    title: title,
                    price: price,
                    img: img
                })
                saveImage('./img/', img);
        })
        saveList('./data/lists.json', list);
    });

    function saveList(path, list) {
        // let out = fs.createWriteStream(JSON.stringify(list));
        // out.pipe(path);

        fs.writeFile(path, JSON.stringify(list), (err) => {
            if (!err) {
                console.log('list save');
            }
            else {
                console.log(err);
            }
        })
    }

    function saveImage(imgDir, imgUrl) {
        https.get(imgUrl, (res) => {
            res.setEncoding('binary');
            var data = fs.createReadStream(imgUrl);
            const imgName = path.basename(imgUrl);
            console.log(data);
            // data.pipe(fs.createWriteStream(imgDir + imgName));

            // res.on('data', (chunk) => {
            //     data += chunk;
            // })
            // res.on('end', () => {
            //     // www.smzdm.com/a.png
            //     const imgName = path.basename(imgUrl);
            //     fs.writeFile(imgDir + imgName, data, 'binary', (err) => {
            //         if (!err) {
            //             console.log('img save');
            //         }
            //         else {
            //             console.log(err);
            //         }
            //     });
            // })


        });
    }
    // console.log(res);
}); // 以 GET 的请求方式 访问一个网址