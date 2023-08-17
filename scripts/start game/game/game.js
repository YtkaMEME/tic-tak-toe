import {isFirst} from "../../../state/state.js";


function game(event){
    let target = event.target.closest('[data-key]');
    if(!target) return;

    let action = isFirst?'./././images/X .png':'./././images/O .png';

    let newImg = document.createElement('img');

    newImg.src = action;
    newImg.alt = isFirst?'X':'O';
    newImg.dataset.action = isFirst?'X':'O';
    newImg.className = 'action';

    target.append(newImg);



}

export default game;