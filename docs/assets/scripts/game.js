class Game {
    constructor() {
    this.canvas = document.getElementById('canvas');
    this.ctx = canvas.getContext('2d');
    this.tsubasa = null;
    this.obstacles = [];
    this.obstacles1 = [];
    this.obstacles2 = [];
    this.obstacles3 = [];
    this.cone = [];
    this.intervalId = null;
    this.frames = 0;
    this.width = 700;
    this.height = 500;
    this.background = new Image();
    this.controls = null;
    this.lifes = 4;
    this.invulnerable = false;
    // this.gamespeed = 2;
    }


    drawBackground() {
    this.background.src = '/docs/assets/images/actual field.jpg';
    this.ctx.drawImage(this.background, 0, 0, this.width, this.height);

    /* const background = {
    x1: 0,
    x2: canvas.width,
    y: 0,
    width: canvas.width,
    height: canvas.height
    }

    if (background.x1 <= -background.width + gamespeed) background.x1 = background.width;
    else background.x1 -= gamespeed;
    if (background.x2 <= -background.width + gamespeed) background.x2 = background.width;
    else background.x2 -= gamespeed;
    this.ctx.drawImage(this.background, background.x1, background.y, background.width, background.height);
    this.ctx.drawImage(this.background, background.x2, background.y, background.width, background.height); */
    }

    start(){
        this.tsubasa = new Player(40, 220, 75, 50, this.ctx);
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
        this.showLifes();
        if(this.lifes <= 0){
        this.stop();
        }
    }

    updateObstacles() {
       // enemy 1
        for (let i = 0; i < this.obstacles1.length; i++) {
          this.obstacles1[i].x -= 6;
          this.obstacles1[i].draw();
        }
    
            if (this.frames % 240 === 0) {
          this.obstacles1.push(new Enemy(this.ctx));
        }

        // enemy2
        for (let i = 0; i < this.obstacles2.length; i++) {
            this.obstacles2[i].x -= 7;
            this.obstacles2[i].draw();
        }
 
            if (this.frames % 180 === 0) {
            this.obstacles2.push(new Enemy2(this.ctx));
        }

        // enemy 3
        for (let i = 0; i < this.obstacles3.length; i++) {
            this.obstacles3[i].x -= 8;
            this.obstacles3[i].draw();
        }
      
            if (this.frames % 300 === 0) {
            this.obstacles3.push(new Enemy3(this.ctx));
        }

        // adding the goalscores
        if(this.obstacles.length){
            for (let i = 0; i < this.obstacles.length; i++) {
           
                 if(this.tsubasa.x >= this.obstacles[0].x + this.obstacles[0].w && !this.invulnerable && !(this.tsubasa.y > this.obstacles[0].y && this.tsubasa.y < this.obstacles[1].y)){
                    this.lifes--
                    this.invulnerable = true
            
                } 
                this.obstacles[i].x -= 5;
                this.obstacles[i].draw();
            }
        }
            if (this.frames % 205 === 0) {
                this.obstacles = []
                this.invulnerable = false;
                
                let x = 700;
                //calculate the height of the columns/obstacles
                let minHeight = 20;
                let maxHeight = 250;
                let height = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight);
                //this creates the gap
                let gap = 120;
                //top obstacle
                this.obstacles.push(new Goalscore(x, height, 20, 30, this.ctx));
          
                //bottom obstacle
                this.obstacles.push(new Goalscore(x, height + gap, 20, 30, this.ctx));
         
// sometimes I lose 1 life from "nowhere"
            
        }
    }

    checkGameOver = () => {
        let crashed = false
        
// commented out because when hitting the top cone, it would take 2 lifes
// 1 when hit, 1 when cone reaches x = 0 (i guess)
// when hitting bottom cone -> y is not defined

  /*   for(let i = 0; i < this.obstacles.length; i++){
        if(this.tsubasa.crashWithGoal(this.obstacles[i])){
            this.obstacles.splice(i,1)
            this.lifes -= 1;
            crashed = true
        }
    } */
    for(let i = 0; i < this.obstacles1.length; i++){
        if(this.tsubasa.crashWith(this.obstacles1[i])){
            this.obstacles1.splice(i,1)
            this.lifes -= 1;
            crashed = true
    }
}
for(let i = 0; i < this.obstacles2.length; i++){
    if(this.tsubasa.crashWith(this.obstacles2[i])){
        this.obstacles2.splice(i,1)
        this.lifes -= 1;
        crashed = true
}
}
for(let i = 0; i < this.obstacles3.length; i++){
    if(this.tsubasa.crashWith(this.obstacles3[i])){
        this.obstacles3.splice(i,1)
        this.lifes -= 1;
        crashed = true
}
}
    }
    
    
    stop() {
        clearInterval(this.intervalId);
    }

    showLifes() {
        this.ctx.font = '20px monospace';
        this.ctx.fillStyle = 'black';
        this.ctx.fillText(`Lifes: ${this.lifes}`, 580, 450);
    }
    
    
    score() {
        this.ctx.font = '20px monospace';
        this.ctx.fillStyle = 'black';
        const score = Math.floor(this.frames / 50);
        this.ctx.fillText(`Score: ${score}`, 580, 50);
    }
}