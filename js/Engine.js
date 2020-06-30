class Engine {
  constructor(theRoot) {
    this.root = theRoot;
    this.player = new Player(this.root);
    this.enemies = [];
    this.hearts = [];
    addBackground(this.root);
  }  

  startGame = () => {
  }

  gameLoop = () => {
    if (this.lastFrame === undefined) {
      this.lastFrame = new Date().getTime();
    }

    let timeDiff = new Date().getTime() - this.lastFrame;
    this.lastFrame = new Date().getTime();
  
    this.enemies.forEach((enemy) => {
      enemy.update(timeDiff);
    });

    this.enemies = this.enemies.filter((enemy) => {
      return !enemy.destroyed;
    });

    while (this.enemies.length < MAX_ENEMIES) {
      const spot = nextSpot(this.enemies);
      this.enemies.push(new Enemy(this.root, spot));
    }

    if (this.isPlayerDead()) {
      window.alert('Game over');
      return;
    }

    this.hearts.forEach((heart) => {
      heart.update(timeDiff);
    });

    this.hearts = this.hearts.filter((heart) => {
      return !heart.destroyed;
    });

    while (this.hearts.length < MAX_HEARTS) {
      const spot = nextSpot(this.hearts);
      this.hearts.push(new Heart(this.root, spot));
    }
    
    if (this.getPoints()) {
      score += 4;
    }

    this.updateScore();

    setTimeout(this.gameLoop, 20);
  };

  isPlayerDead = () => {
    return this.enemies.some((ship) => {
      return ship.y + ENEMY_HEIGHT > gameEngine.player.y && ship.x === gameEngine.player.x;
    });
  };

  getPoints = () => {
    return this.hearts.some((heart) => {
      if (heart.y + ENEMY_HEIGHT > gameEngine.player.y && heart.x === gameEngine.player.x) {
        heart.destroy();
        return true;
      };
    });
  };

  updateScore = () => {
    scoreDisplay.innerText = score;
  }
}