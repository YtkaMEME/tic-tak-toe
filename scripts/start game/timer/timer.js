let timeIsOut = false;

function timer(countDownTime, elem, x=false){
    let now = new Date().getTime();

    let distance = countDownTime - now;

    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    elem.innerHTML = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
    if (distance < 0) {
        if(x)clearInterval(x);
        elem.innerHTML = "EXPIRED";
        timeIsOut = true;
    }
}

function startTimer(){
    let timerElem = document.querySelector('.timer');

    let countDownTime = new Date().getTime() + 10000;

    setTimeout(()=>{
        timer(countDownTime, timerElem);
    },0);

    let intervalId = setInterval(function() {

        timer(countDownTime, timerElem, intervalId);

    }, 1000);

    return(timerElem);
}

export default startTimer;