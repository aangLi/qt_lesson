const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

console.log(secondHand,minHand,hourHand);

function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const mins = now.getMinutes();
    const hours = now.getHours();

    const secondsDegrees = ((seconds / 60 * 360) + 90);
    // ES6 拼接符号
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    console.log(secondHand.style.transform);

    const minsDegrees = (mins / 60 * 360) + (seconds / 60 * 6) + 90;
    minHand.style.transform = `rotate(${minsDegrees}deg)`;

    console.log(minHand.style.transform);

    const hoursDegrees = (hours / 12 * 360) + (mins / 60 * 30) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    console.log(hourHand.style.transform);
};


//每隔多少时间执行一次，不需要打括号
setInterval(setDate, 997); 

//隔多少时间执行一次
// setTimeout(() => {
    
// }, timeout);