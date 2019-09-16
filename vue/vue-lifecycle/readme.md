## Vue
1. 拥有八个生命周期
    - beforeCreate
    - create
    - beforeMounted
    - mounted
    - beforeUpdate
    - update
    - beforeDestroy
    - destroyed

2. 任何生命周期都是一个方法。

3. computed 计算属性

4. watch 监听属性
    - handler 属性
        当数据变化时，做的一些操作。
    - immediate 
        第一次数据绑定时，如果要求也需要进行操作，则设置为 true , 反之， 设置为 false。
    - deep
        为 false 的时候，不能访问对象里面的属性，为 true 的时候，才可以访问对象里面的属性。

5. extends 扩展属性
    - 生命周期的方法能够进行扩展
    - method 属性不能进行扩展