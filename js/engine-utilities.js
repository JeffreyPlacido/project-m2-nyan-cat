const nextSpot = (invaders) => {
  const posi = GAME_WIDTH / ENEMY_WIDTH;

  const spotsTaken = [];
  invaders.forEach((invader) => {
    spotsTaken[invader.spot] = true;
  });

  let randompos = undefined;
  while (randompos === undefined || spotsTaken[randompos]) {
    randompos = Math.floor(Math.random() * posi);
  }

  return randompos;
};

const addBackground = (root) => {
  const bg = document.createElement('img');

  bg.src = 'images/space.png';
  bg.style.height = `${GAME_HEIGHT}px`;
  bg.style.width = `${GAME_WIDTH}px`;

  root.append(bg);

  const whiteBox = document.createElement('div');

  whiteBox.style.zIndex = 100;
  whiteBox.style.position = 'absolute';
  whiteBox.style.top = `${GAME_HEIGHT}px`;
  whiteBox.style.height = `${ENEMY_HEIGHT}px`;
  whiteBox.style.width = `${GAME_WIDTH}px`;
  whiteBox.style.background = '#fff';
  root.append(whiteBox);
};
