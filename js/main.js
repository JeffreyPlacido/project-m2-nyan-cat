const BtnStart = document.getElementById("startBtn");
function startGame() {
  minSpeed = 0.4;
  score = 0;
  gameEngine.gameLoop();
}

BtnStart.addEventListener("click", startGame);

const gameEngine = new Engine(document.getElementById('app'));

const keydownHandler = (event) => {
  if (event.code === 'ArrowLeft') {
    gameEngine.player.moveLeft();
  }

  if (event.code === 'ArrowRight') {
    gameEngine.player.moveRight();
  }
};

document.addEventListener('keydown', keydownHandler);

//gameEngine.gameLoop();