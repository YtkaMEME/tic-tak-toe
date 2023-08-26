import {gameInfo} from "../../../state/state.js";

function getArrOfActions(children){
    let xArr = [];
    let oArr = [];

    for (let child of children){
        let action = child.firstChild;

        if(!action) continue;

        if(action.dataset.action === 'X'){
            xArr.push(child.dataset.key);
        }
        if(action.dataset.action === 'O'){
            oArr.push(child.dataset.key);
        }
    }

    return [xArr, oArr];
}

function checkEnd(){
    let playground = document.querySelector('.playground');

    let children = playground.childNodes;

    let [xArr, oArr] = getArrOfActions(children);

    if(oArr.includes('0') && oArr.includes('1') && oArr.includes('2') ||
        oArr.includes('3') && oArr.includes('4') && oArr.includes('5') ||
        oArr.includes('6') && oArr.includes('7') && oArr.includes('8') ||
        oArr.includes('0') && oArr.includes('4') && oArr.includes('8') ||
        oArr.includes('2') && oArr.includes('4') && oArr.includes('6') ||
        oArr.includes('0') && oArr.includes('3') && oArr.includes('6') ||
        oArr.includes('1') && oArr.includes('4') && oArr.includes('7') ||
        oArr.includes('2') && oArr.includes('5') && oArr.includes('8')
    ){
        gameInfo.gameIsEnd = !gameInfo.gameIsEnd;
        gameInfo.winInfo = 'O';
    }

    if(xArr.includes('0') && xArr.includes('1') && xArr.includes('2') ||
        xArr.includes('3') && xArr.includes('4') && xArr.includes('5') ||
        xArr.includes('6') && xArr.includes('7') && xArr.includes('8') ||
        xArr.includes('0') && xArr.includes('4') && xArr.includes('8') ||
        xArr.includes('2') && xArr.includes('4') && xArr.includes('6') ||
        xArr.includes('0') && xArr.includes('3') && xArr.includes('6') ||
        xArr.includes('1') && xArr.includes('4') && xArr.includes('7') ||
        xArr.includes('2') && xArr.includes('5') && xArr.includes('8')
    ){
        gameInfo.gameIsEnd = !gameInfo.gameIsEnd;
        gameInfo.winInfo = 'X';
    }
}

export default checkEnd;