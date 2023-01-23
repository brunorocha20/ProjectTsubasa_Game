class Game {
  constructor() {
    this.canvas = document.getElementById('canvas');
    this.ctx = canvas.getContext('2d');
    this.tsubasa = null;
    this.obstacles = [];
    this.obstacles1 = [];
    this.obstacles2 = [];
    this.obstacles3 = [];
    this.ballObs = [];
    this.cone = [];
    this.intervalId = null;
    this.frames = 0;
    this.width = 700;
    this.height = 500;
    this.background = new Image();
    this.controls = null;
    this.lifes = 5;
    this.invulnerable = false;
    this.backSpeed = -4;
    this.backX = 0;
    this.background.src = 'docs/assets/images/actual field.jpg';
    this.currentImg = 0;
    this.song = new Audio('docs/assets/sounds/song.mp3');
    this.song.loop = false;
  }

  drawBackground() {
    this.ctx.drawImage(this.background, this.backX, 0, this.width, this.height);
    if (this.backSpeed < 0) {
      this.ctx.drawImage(this.background, this.backX + this.width, 0, this.width, this.height);
    } else {
      this.ctx.drawImage(this.background, this.backX - this.width, 0, this.width, this.height);
    }
  }

  clearBg() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }

  moveBackground() {
    this.backX += this.backSpeed;
    this.backX %= this.width;
  }

  start() {
    this.tsubasa = new Player(40, 220, 65, 45, this.ctx);
    this.controls = new Controls(this.tsubasa);
    this.controls.keyboardEvents();
    this.intervalId = setInterval(this.update, 1000 / 60);
    this.song.play();
  }

  update = () => {
    this.frames++;
    this.clearBg();
    this.moveBackground();
    this.drawBackground();
    this.movePlayer();
    this.tsubasa.newPos();
    this.tsubasa.draw();
    this.updateObstacles();
    this.checkGameOver();
    this.score();
    this.showLifes();
    if (this.lifes <= 0) {
      document.getElementById('game-end').style.display = 'flex';
      this.stop();
      this.song.pause();
      this.song.currentTime = 0;
    }
  };

  updateObstacles() {
    // enemy 1 goalkeeper
    for (let i = 0; i < this.obstacles1.length; i++) {
      if (this.frames < 1500) {
        this.obstacles1[i].x -= 5.5;
        this.obstacles1[i].draw();
      } else if (this.frames >= 1500 && this.frames < 2500) {
        this.backSpeed = -5;
        this.obstacles1[i].x -= 7;
        this.obstacles1[i].draw();
      } else if (this.frames >= 2500 && this.frames < 3500) {
        this.backSpeed = -6;
        this.obstacles1[i].x -= 9;
        this.obstacles1[i].draw();
      } else if (this.frames >= 3500 && this.frames < 4500) {
        this.backSpeed = -7;
        this.obstacles1[i].x -= 13;
        this.obstacles1[i].draw();
      } else if (this.frames >= 4500 && this.frames < 6500) {
        this.backSpeed = -8;
        this.obstacles1[i].x -= 14.5;
        this.obstacles1[i].draw();
      } else if (this.frames >= 6500) {
        this.backSpeed = -9;
        this.obstacles1[i].x -= 16.5;
        this.obstacles1[i].draw();
      }
    }
    if (this.frames % 180 === 0) {
      this.obstacles1.push(new Enemy(this.ctx));
    }

    // enemy 2 german
    for (let i = 0; i < this.obstacles2.length; i++) {
      if (this.frames < 1500) {
        this.obstacles2[i].x -= 6;
        this.obstacles2[i].draw();
      } else if (this.frames >= 1500 && this.frames < 2500) {
        this.obstacles2[i].x -= 7.8;
        this.obstacles2[i].draw();
      } else if (this.frames >= 2500 && this.frames < 3500) {
        this.obstacles2[i].x -= 8.7;
        this.obstacles2[i].draw();
      } else if (this.frames >= 3500 && this.frames < 4500) {
        this.obstacles2[i].x -= 11.5;
        this.obstacles2[i].draw();
      } else if (this.frames >= 4500 && this.frames < 6500) {
        this.obstacles2[i].x -= 13;
        this.obstacles2[i].draw();
      } else if (this.frames >= 6500) {
        this.obstacles2[i].x -= 15;
        this.obstacles2[i].draw();
      }
    }
    if (this.frames % 130 === 0) {
      this.obstacles2.push(new Enemy2(this.ctx));
    }

    // enemy 3 holland
    for (let i = 0; i < this.obstacles3.length; i++) {
      if (this.frames < 1500) {
        this.obstacles3[i].x -= 7;
        this.obstacles3[i].draw();
      } else if (this.frames >= 1500 && this.frames < 2500) {
        this.obstacles3[i].x -= 8.5;
        this.obstacles3[i].draw();
      } else if (this.frames >= 2500 && this.frames < 3500) {
        this.obstacles3[i].x -= 11;
        this.obstacles3[i].draw();
      } else if (this.frames >= 3500 && this.frames < 4500) {
        this.obstacles3[i].x -= 14.5;
        this.obstacles3[i].draw();
      } else if (this.frames >= 4500 && this.frames < 6500) {
        this.obstacles3[i].x -= 17;
        this.obstacles3[i].draw();
      } else if (this.frames >= 6500) {
        this.obstacles3[i].x -= 18.5;
        this.obstacles3[i].draw();
      }
    }
    if (this.frames % 160 === 0) {
      this.obstacles3.push(new Enemy3(this.ctx));
    }

    // enemy 4 ball
    for (let i = 0; i < this.ballObs.length; i++) {
      if (this.frames < 1500) {
        this.ballObs[i].x -= 10;
        this.ballObs[i].draw();
      } else if (this.frames >= 1500 && this.frames < 2500) {
        this.ballObs[i].x -= 12;
        this.ballObs[i].draw();
      } else if (this.frames >= 2500 && this.frames < 3500) {
        this.ballObs[i].x -= 14;
        this.ballObs[i].draw();
      } else if (this.frames >= 3500 && this.frames < 4500) {
        this.ballObs[i].x -= 16;
        this.ballObs[i].draw();
      } else if (this.frames >= 4500 && this.frames < 6500) {
        this.ballObs[i].x -= 18;
        this.ballObs[i].draw();
      } else if (this.frames >= 6500) {
        this.ballObs[i].x -= 20;
        this.ballObs[i].draw();
      }
    }
    if (this.frames % 85 === 0) {
      this.ballObs.push(new Ball(this.ctx));
    }

    // adding the goalscores
    if (this.obstacles.length === 2) {
      for (let i = 0; i < this.obstacles.length; i++) {
        if (
          this.tsubasa.x >= this.obstacles[0].x + this.obstacles[0].w &&
          !this.invulnerable &&
          !(this.tsubasa.y > this.obstacles[0].y && this.tsubasa.y < this.obstacles[1].y) &&
          this.tsubasa.x <= this.obstacles[0].x + this.obstacles[0].w
        ) {
          this.invulnerable = true;
          this.lifes--;
          console.log('falhou baliza');
        }
        if (this.frames < 1500) {
          this.obstacles[i].x -= 4;
          this.obstacles[i].draw();
        } else if (this.frames >= 1500 && this.frames < 2500) {
          this.obstacles[i].x -= 5;
          this.obstacles[i].draw();
        } else if (this.frames >= 2500 && this.frames < 3500) {
          this.obstacles[i].x -= 6;
          this.obstacles[i].draw();
        } else if (this.frames >= 3500 && this.frames < 4500) {
          this.obstacles[i].x -= 7;
          this.obstacles[i].draw();
        } else if (this.frames >= 4500 && this.frames < 6500) {
          this.obstacles[i].x -= 8;
          this.obstacles[i].draw();
        } else if (this.frames >= 6500) {
          this.obstacles[i].x -= 9;
          this.obstacles[i].draw();
        }
      }
    }
    if (this.frames % 200 === 0) {
      this.obstacles = [];
      this.invulnerable = false;

      let x = 700;
      //calculate the height of the columns/obstacles
      let minHeight = 30;
      let maxHeight = 280;
      let height = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight);
      //this creates the gap
      let gap = 120;
      //top obstacle
      this.obstacles.push(new Goalscore(x, height, 20, 30, this.ctx));
      //bottom obstacle
      this.obstacles.push(new Goalscore(x, height + gap, 20, 30, this.ctx));
    }
  }

  checkGameOver = () => {
    for (let i = 0; i < this.obstacles.length; i++) {
      if (this.tsubasa.crashWithGoal(this.obstacles[i])) {
        this.obstacles.splice(i, 1);
        this.lifes -= 1;
        console.log('goalscore');
      }
    }
    for (let i = 0; i < this.obstacles1.length; i++) {
      if (this.tsubasa.crashWith(this.obstacles1[i])) {
        this.obstacles1.splice(i, 1);
        this.lifes -= 1;
        console.log('GR');
      }
    }
    for (let i = 0; i < this.obstacles2.length; i++) {
      if (this.tsubasa.crashWith(this.obstacles2[i])) {
        this.obstacles2.splice(i, 1);
        this.lifes -= 1;
        console.log('german');
      }
    }
    for (let i = 0; i < this.obstacles3.length; i++) {
      if (this.tsubasa.crashWith(this.obstacles3[i])) {
        this.obstacles3.splice(i, 1);
        this.lifes -= 1;
        console.log('nederlands');
      }
    }
    for (let i = 0; i < this.ballObs.length; i++) {
      if (this.tsubasa.crashWith(this.ballObs[i])) {
        this.ballObs.splice(i, 1);
        this.lifes -= 1;
        console.log('fireball');
      }
    }
  };

  stop() {
    clearInterval(this.intervalId);
  }

  showLifes() {
    this.ctx.font = '22px Jazz LET, fantasy';
    this.ctx.fillStyle = 'black';
    this.ctx.fillText(`Lifes: ${this.lifes}`, 580, 450);
  }

  score() {
    this.ctx.font = '22px Jazz LET, fantasy';
    this.ctx.fillStyle = 'black';
    const score = Math.floor(this.frames / 50);
    this.ctx.fillText(`Score: ${score}`, 580, 50);
  }

  movePlayer() {
    if (this.frames % 14 === 0) {
      this.currentImg = (this.currentImg + 1) % 2;
      switch (this.currentImg) {
        case 0:
          this.tsubasa.img.src = 'docs/assets/images/tsubasa1.png';
          break;
        case 1:
          this.tsubasa.img.src = 'docs/assets/images/tsubasa2.png';
          break;
      }
    }
  }
}
