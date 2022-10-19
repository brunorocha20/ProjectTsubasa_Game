class Player {
    constructor(x, y, w, h, ctx) {
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.ctx = ctx;
      this.speed = 0;
      this.img = new Image();
      this.img.src = 'docs/assets/images/running1-removebg-preview.png';
    }
  
    newPos() {
      this.y += this.speed
      /* if (this.y > 10 && (this.y + this.h < 490)) {
      this.speed = 0
// getting stuck
      } */
  } 

    draw() {
      this.ctx.drawImage(this.img, this.x , this.y, this.w, this.h);
    }
    
    top() {
      return this.y + 2;
    }
    bottom() {
      return this.y + this.h - 2;
    }
    left() {
      return this.x + 2;
    }
    right() {
      return this.x + this.w -2;
    }
  
    crashWith(obstacle) {
      return !(
        this.bottom() < obstacle.top() ||
        this.top() > obstacle.bottom() ||
        this.right() < obstacle.left() ||
        this.left() > obstacle.right()
      );
    }

    crashWithGoal(obstacle) {
      return !(
        this.bottom() < obstacle.top() ||
        this.top() > obstacle.bottom() ||
        this.right() < obstacle.left() ||
        this.left() > obstacle.right()
        );
    }
}