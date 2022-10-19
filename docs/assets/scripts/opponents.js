class Enemy {
    constructor(ctx) {
      this.ctx = ctx;
      this.x = 700;
      this.y = Math.floor(Math.random() * 380);
      this.w = 90;
      this.h = 110;
      this.img = new Image();
    }
  
    draw() {
      this.img.src = 'docs/assets/images/goalkeeper.png'
      this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    }
  
    top() {
      return this.y + 10;
    }
    bottom() {
      return this.y + this.h - 10;
    }
    left() {
      return this.x + 40;
    }
    right() {
      return this.x + this.w - 40;
    }
}


class Enemy2 {
    constructor(ctx) {
      this.ctx = ctx;
      this.x = 700;
      this.y = Math.floor(Math.random() * 410);
      this.w = 90;
      this.h = 45;
      this.img = new Image();
    }
  
    draw() {
      this.img.src = 'docs/assets/images/german.png'
      this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    }
  
    top() {
      return this.y + 30;
    }
    bottom() {
      return this.y + this.h - 15;
    }
    left() {
      return this.x + 15;
    }
    right() {
      return this.x + this.w - 30;
    }
}


class Enemy3 {
    constructor(ctx) {
      this.ctx = ctx;
      this.x = 700;
      this.y = Math.floor(Math.random() * 380);
      this.w = 80;
      this.h = 60;
      this.img = new Image();
    }
  
    draw() {
      this.img.src = 'docs/assets/images/holland.png'
      this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    }
  
    top() {
      return this.y + 20;
    }
    bottom() {
      return this.y + this.h;
    }
    left() {
      return this.x + 50;
    }
    right() {
      return this.x + this.w - 50;
    }
}

class Goalscore {
  constructor(x, y, w, h, ctx) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.ctx = ctx;
    this.img = new Image();
  }

  draw() {
    this.img.src = 'docs/assets/images/orange_cone-removebg-preview.png';
    this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }

  top() {
    return this.y + 15;
  }

  bottom() {
    return this.y + this.h - 15;
  }

  left() {
    return this.x + 30;
  }

  right() {
    return this.x + this.w - 30;
  }
}
