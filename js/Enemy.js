class Enemy {
  constructor(theRoot, enemySpot) {
    this.root = theRoot;
    this.spot = enemySpot;

    this.x = enemySpot * ENEMY_WIDTH;

    this.y = -ENEMY_HEIGHT;
    this.destroyed = false;

    this.domElement = document.createElement('img');

    this.domElement.src = 'images/alien.png';
    this.domElement.style.position = 'absolute';
    this.domElement.style.left = `${this.x}px`;
    this.domElement.style.top = `${this.y}px`;
    this.domElement.style.height = ENEMY_HEIGHT;
    this.domElement.style.width = ENEMY_WIDTH;
    this.domElement.style.zIndex = 5;

    theRoot.appendChild(this.domElement);
    this.speed = Math.random() / 5 + minSpeed;
  }

  update(timeDiff) {
    this.y = this.y + timeDiff * this.speed;
    this.domElement.style.top = `${this.y}px`;

    if (this.y > GAME_HEIGHT - 50) {
      this.root.removeChild(this.domElement);

      this.destroyed = true;
    } 
  }
}