class Game {
    constructor() {
    this.canvas = document.getElementById('canvas');
    this.ctx = canvas.getContext('2d');
    this.tsubasa = null;
    this.obstacles = [];
    this.intervalId = null;
    this.frames = 0;
    this.width = 700;
    this.height = 500;
    this.background = new Image();
    this.controls = null;
    // this.gamespeed = 2;
    }


    drawBackground() {
    this.background.src = '/docs/assets/images/actual field.jpg';
    this.ctx.drawImage(this.background, 0, 0, this.width, this.height);

    /* const BG = {
    x1: 0,
    x2: canvas.width,
    y: 0,
    width: canvas.width,
    height: canvas.height
    }

    if (BG.x1 <= -BG.width + gamespeed) BG.x1 = BG.width;
    else BG.x1 -= gamespeed;
    if (BG.x2 <= -BG.width + gamespeed) BG.x2 = BG.width;
    else BG.x2 -= gamespeed;
    this.ctx.drawImage(this.background, BG.x1, BG.y, BG.width, BG.height);
    this.ctx.drawImage(this.background, BG.x2, BG.y, BG.width, BG.height); */
    }

    start(){
        this.tsubasa = new Player(20, 220, 75, 50, this.ctx);
        this.controls = new Controls(this.tsubasa);
        this.controls.keyboardEvents();
        this.intervalId = setInterval(this.update, 1000 / 60);
    }

    update = () => {
        this.frames++;
        this.drawBackground();
        this.tsubasa.draw();
        this.updateObstacles();
        this.checkGameOver();
        this.score();
    }

    updateObstacles() {
        for (let i = 0; i < this.obstacles.length; i++) {
          this.obstacles[i].x -= 1;
          this.obstacles[i].draw();
        }
    
            if (this.frames % 200 === 0) {
          this.obstacles.push(new Enemy(this.ctx));
        }

        for (let i = 0; i < this.obstacles.length; i++) {
            this.obstacles[i].x -= 2;
            this.obstacles[i].draw();
        }
 
            if (this.frames % 150 === 0) {
            this.obstacles.push(new Enemy2(this.ctx));
        }

        for (let i = 0; i < this.obstacles.length; i++) {
            this.obstacles[i].x -= 3;
            this.obstacles[i].draw();
        }
      
            if (this.frames % 250 === 0) {
            this.obstacles.push(new Enemy3(this.ctx));
        }

    }


    checkGameOver() {
        const crashed = this.obstacles.some((obstacle) => {
          return this.tsubasa.crashWith(obstacle);
        });
    
        if (crashed) {
          this.stop();
        }
    }

    stop() {
        clearInterval(this.intervalId);
    }
    
    
    score() {
        this.ctx.font = '18px monospace';
        this.ctx.fillStyle = 'black';
        const score = Math.floor(this.frames / 50);
        this.ctx.fillText(`Score: ${score}`, 550, 50);
    }
}