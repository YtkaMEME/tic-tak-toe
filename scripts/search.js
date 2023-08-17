import startGame from "./start game/startGame.js";

let isSerched = false; //надо доставать с сервака!

function animation(elem){

    let intervalId = setInterval(()=>{
        if(isSerched){
            clearInterval(intervalId);
            startGame(elem);
        }

        elem.value += '.';

        if(elem.value.length > 17){
            elem.value = 'Ищем соперника';
        }

    },400);

}

function search (target){
    target.value = 'Ищем соперника';
    target.disabled = true;
    animation(target);
}

//по задумке сдель будет запрос к серверу
function startSearch(event){
    let target = event.target.closest('.button');
    if(!target) return;

    //заглушка
    setTimeout(()=> isSerched = true, 3000);

    search(target);
}


export default startSearch;