import startTimer from "./timer/timer.js";

//по задумке тут запрос к серверу и получение инфы о сопернике
function getEnemyInfo(){
    let info = {
        name: 'Вячеслав Носов',
        points: 586,
    };

    return (info);
}

function startGame(elem){

    let enemyInfo = getEnemyInfo();

    elem.style.display = 'none';
    let parentElem = elem.parentElement;

    let newDiv = document.createElement('div');

    newDiv.className = 'person';
    newDiv.style.margin = '0px';

    newDiv.innerHTML = `<div class = "name">${enemyInfo.name}</div>
        <div class= "pointsGameHistory">${enemyInfo.points} баллов</div>
        <div class="timer"></div>
        `;

    parentElem.append(newDiv);
    startTimer();
}


export default startGame;