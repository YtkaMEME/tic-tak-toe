import {isFirst} from "../../../state/state.js";
import checkEnd from "./checkEnd.js";


function game(event){
    let target = event.target.closest('[data-key]');
    if(!target) return;

    let children = target.childElementCount;
    if(children > 0) return;

    let action = isFirst?'./././images/X .png':'./././images/O .png';

    let newImg = document.createElement('img');

    newImg.src = action;
    newImg.alt = isFirst?'X':'O';
    newImg.dataset.action = isFirst?'X':'O';
    newImg.className = 'action';

    target.append(newImg);

    setTimeout(checkEnd, 0);
}

export default game;