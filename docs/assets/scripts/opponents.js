class Enemy {
    constructor(ctx) {
      this.ctx = ctx;
      this.x = 700;
      this.y = Math.floor(Math.random() * 500) - 110;
      this.w = 90;
      this.h = 110;
      this.img = new Image();
    }
  
    draw() {
      this.img.src = 'docs/assets/images/goalkeeper.png'
      this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    }
  
    top() {
      return this.y;
    }
    bottom() {
      return this.y + this.h;
    }
    left() {
      return this.x;
    }
    right() {
      return this.x + this.w;
    }
}


class Enemy2 {
    constructor(ctx) {
      this.ctx = ctx;
      this.x = 700;
      this.y = Math.floor(Math.random() * 500) - 45;
      this.w = 90;
      this.h = 45;
      this.img = new Image();
    }
  
    draw() {
      this.img.src = 'docs/assets/images/german.png'
      this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    }
  
    top() {
      return this.y;
    }
    bottom() {
      return this.y + this.h;
    }
    left() {
      return this.x;
    }
    right() {
      return this.x + this.w;
    }
}


class Enemy3 {
    constructor(ctx) {
      this.ctx = ctx;
      this.x = 700;
      this.y = Math.floor(Math.random() * 500) - 60;
      this.w = 80;
      this.h = 60;
      this.img = new Image();
    }
  
    draw() {
      this.img.src = 'docs/assets/images/holland.png'
      this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    }
  
    top() {
      return this.y;
    }
    bottom() {
      return this.y + this.h;
    }
    left() {
      return this.x;
    }
    right() {
      return this.x + this.w;
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
    return this.y;
  }

  bottom() {
    return this.y + this.h;
  }

  left() {
    return this.x;
  }

  right() {
    return this.x + this.w;
  }
}
