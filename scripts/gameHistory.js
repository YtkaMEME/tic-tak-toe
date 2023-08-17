
export default function gameHistory({name, points, url, win}){
    let gameHistoryElem = document.querySelector('.gameHistory');
    let newDiv = document.createElement('div');
    newDiv.className = 'person';
    newDiv.innerHTML = `<div class = "name ${win?'win':'lose'}">${name}</div>
        <div class= "pointsGameHistory">${points} баллов</div>

        <form action= "${url}" class= "profile">
            <input type="submit" value="Профиль" />
        </form>`;
    gameHistoryElem.append(newDiv);
}