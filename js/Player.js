class Player {
  constructor(root) {
    this.x = ((GAME_WIDTH - 100) / 200) * PLAYER_WIDTH;

    this.y = GAME_HEIGHT - PLAYER_HEIGHT;

    this.domElement = document.createElement('img');
    this.domElement.src = 'images/ship.png';
    this.domElement.style.position = 'absolute';
    this.domElement.style.left = `${this.x}px`;
    this.domElement.style.top = ` ${this.y}px`;
    this.domElement.style.zIndex = '10';
    this.domElement.style.height = PLAYER_HEIGHT;
    this.domElement.style.width = PLAYER_WIDTH;
    root.appendChild(this.domElement);
  }

  moveLeft() {
    if (this.x > 0) {
      this.x = this.x - PLAYER_WIDTH;
    }

    this.domElement.style.left = `${this.x}px`;
  }

  moveRight() {
    if (this.x + PLAYER_WIDTH < GAME_WIDTH) {
      this.x = this.x + PLAYER_WIDTH;
    }
    this.domElement.style.left = `${this.x}px`;
  }
}