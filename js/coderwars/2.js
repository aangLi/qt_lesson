// // 140 likes
// 喜欢的人[] 'no one likes this'
// ['peter'] 'Perter likes this'
// ['Jacob', 'Alex'] 'Jacob and Alex like this'
// ['Max', 'John', 'Mark'] 'Max, John and Mark like this'
// ['Alex', 'Jacob', 'Mark', 'Max'] 'Alex Jacob and 2 others like this'

const Likes = (names) => {
    const templates = [
        'no one likes this',
        '{name} likes this',
        '{name} and {name} likes this',
        '{name}, {name} and {name} likes this',
        '{name}, {name} and {num} others likes this'
    ]
    // 哪一个模式
    let idx = names.length > 4 ? 4 : names.length;
    // let idx = Math.min(names.length, 4);
    return templates[idx].replace(/{name}|{num}/g, function (val) {
        // console.log(val);
        return val === '{name}' ? names.shift() : names.length;
    })
    // switch(likes.length) {
    //     case 0:
    //         return ('no one likes this');
    //     case 1:
    //         return (`${likes[0]} likes this`);
    //     case 2:
    //         return (`${likes[0]} and ${likes[1]} likes this`);
    //     case 3:
    //         return (`${likes[0]}, ${likes[1]} and ${likes[2]} likes this`);
    //     default:
    //         return (`${likes[0]}, ${likes[1]} and ${likes.length - 2} others like this`);
    // }

    // 顺序逻辑 数学思维
    // 4 中可能 likes 的模式
    // 通过 匹配的方式
}

console.log(Likes(['杨淑文', '涂海霞', 'ANNG_LI', '阿良', '王军']));
