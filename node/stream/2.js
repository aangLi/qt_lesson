const fs = require('fs');
const zlib = require('zlib'); // 文件的压缩
const gzip = zlib.createGzip(); // 创建一个Gzip 类型的压缩

const inFile = 
    fs.createReadStream('./sample.txt');

// gzip.pipe(inFile);

const outFile = 
    fs.createWriteStream('./sample.txt.gz');

inFile.pipe(gzip).pipe(outFile);
