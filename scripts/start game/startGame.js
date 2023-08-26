import startTimer from "./timer/timer.js";
import game from "./game/game.js";
import {gameInfo} from "../../state/state.js";



function startGame(elem){

    let enemyInfo = gameInfo.enemyInfo;

    let parentElem = elem.parentElement.parentElement;
    elem.parentElement.style.display = 'none';

    let newDiv = document.createElement('div');

    newDiv.className = 'person';
    newDiv.style.margin = '0px';

    newDiv.innerHTML = `<div class = "name">${enemyInfo.name}</div>
        <div class= "pointsGameHistory">${enemyInfo.points} баллов</div>
        <div class="timer"></div>`;

    parentElem.append(newDiv);
    startTimer();
    document.querySelector('.playground').addEventListener('click', game)
}


export default startGame;