// 咖啡机
// OO 面向对象

var Coffee = function() {

}

Coffee.prototype.boilWater = function() {
    console.log('水开了');
}

Coffee.prototype.brewCoffeeGriends = function() {
    console.log('用水泡咖啡');
}

Coffee.prototype.pourInCup = function() {
    console.log('把咖啡倒进杯子');
}

Coffee.prototype.addMilkAndSoal() = function() {
    console.log('加糖和牛奶');
}

Coffee.prototype.cook = function() {
    this.boilWater();
    this.brewCoffeeGriends();
    this.pourInCup();
    this.addMilkAndSoal();
}


var coffee = new Coffee();
coffee.cook();