const GAME_WIDTH = 1700;
const GAME_HEIGHT = 900;

const ENEMY_WIDTH = 50;
const ENEMY_HEIGHT = 50;
const MAX_ENEMIES = 21;

const BONUS_WIDTH = 50;
const BONUS_HEIGHT = 50;
const MAX_HEARTS = 11;

const PLAYER_WIDTH = 50;
const PLAYER_HEIGHT = 50;

let minSpeed = 0.4;

setInterval(function(){ minSpeed += 0.04; }, 2500);

let score = 0;

let scoreDisplay = document.getElementById('score');
scoreDisplay.innerText = score;
scoreDisplay.style.zIndex = 24;
scoreDisplay.style.position = 'absolute';
scoreDisplay.style.left = 1640;
scoreDisplay.style.top = 20;
scoreDisplay.style.color = 'red';
scoreDisplay.style.font = 'bold 40px Atarian System';
//document.querySelector('#score').appendChild(scoreDisplay);