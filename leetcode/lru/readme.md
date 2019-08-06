- js 变量/常量 内存中申明了地址 名字就是地址的别称
    1. 常量一定要赋值，变量可以不赋值，类型可以改变
    2. js 弱类型语言
    3. 变量的类型是由值决定的
    4. 常量在申明时，一定要确定类型
        常量的地址不能改变，可以通过数组的i形式给内容进行添加，由于数组的首地址一直没有改变，常量只是存储着地址
    5. 数组 前面(队头) unshit shit 后面(队尾)添加 移除 push pop

- JSON 字符串 JSON 对象数组
    1. var JSONSTRING = {
        KEY:VALUE,
        KEY1:VALUE1
    } 为JSON 字符串
    2. VAR JSONOBJECT = eval('('+ JSONSTRING + ')') 为JSON 对象数组

- Map 对象数组 
    1. Map.set(key,value); 设置
    2. Map.delete(key);  删除
    3. Map.get(key);  获取
    4. Map.has(key);  判断是否拥有 {Boolean}
    5. var arr = Array.from(Map);
    6. 可以通过迭代器进行迭代