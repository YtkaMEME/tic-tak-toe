import createPlaygrount from "./scripts/playgrount.js";
import gameHistory from "./scripts/gameHistory.js";
import startSearch from "./scripts/search.js";

//ВРЕМЕННО!!! НАДО БРАТЬ С СЕРВЕРА
let persons = [
    {
        name: 'Мирослав Муратов',
        points: 1024,
        url: 'https://t.me/memeytka',
        win: true,
    },
    {
        name: 'Вячеслав Носов',
        points: 586,
        url: 'https://t.me/betray32',
        win: false,
    },
    {
        name: 'Юлия Молодцова',
        points: 5000,
        url: 'https://t.me/Yuliamolodtsova03',
        win: true,
    }
];


document.querySelector('.button').addEventListener('click', startSearch);
persons.forEach((elem)=>gameHistory(elem));

createPlaygrount();