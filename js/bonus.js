class Heart {
    constructor(theRoot, heartOne) {
      this.root = theRoot;
      this.spot = heartOne;
  
      this.x = heartOne * BONUS_WIDTH;
      this.y = -BONUS_HEIGHT;

      this.destroyed = false;
  
      this.domElement = document.createElement('img');
  
      this.domElement.src = 'images/heart.png';
      this.domElement.style.position = 'absolute';
      this.domElement.style.left = `${this.x}px`;
      this.domElement.style.top = `${this.y}px`;
      this.domElement.style.height = BONUS_HEIGHT;
      this.domElement.style.width = BONUS_WIDTH;
      this.domElement.style.zIndex = 4;
  
      theRoot.appendChild(this.domElement);
      this.speed = Math.random() / 5 + minSpeed;
    }
  
    destroy () {
      this.root.removeChild(this.domElement);
      this.destroyed = true;
    }
  
    update(timeDiff) {
      this.y = this.y + timeDiff * this.speed;
      this.domElement.style.top = `${this.y}px`;
  
      if (this.y > GAME_HEIGHT) {
        this.root.removeChild(this.domElement);
        this.destroyed = true;
      }
    }
  }