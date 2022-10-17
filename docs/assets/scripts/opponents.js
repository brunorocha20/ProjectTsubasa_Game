class Enemy {
    constructor(ctx) {
      this.ctx = ctx;
      this.x = 700;
      this.y = Math.floor(Math.random() * 500) - 100;
      this.w = 40;
      this.h = 25;
      this.color = `red`;
    }
  
    draw() {
      this.ctx.fillStyle = this.color;
      this.ctx.fillRect(this.x, this.y, this.w, this.h);
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
      this.y = Math.floor(Math.random() * 500) - 100;
      this.w = 30;
      this.h = 20;
      this.color = `black`;
    }
  
    draw() {
      this.ctx.fillStyle = this.color;
      this.ctx.fillRect(this.x, this.y, this.w, this.h);
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
      this.y = Math.floor(Math.random() * 500) - 80;
      this.w = 50;
      this.h = 30;
      this.color = `orange`;
    }
  
    draw() {
      this.ctx.fillStyle = this.color;
      this.ctx.fillRect(this.x, this.y, this.w, this.h);
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
  constructor(x, y, w, h, color, ctx) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color = color;
    this.ctx = ctx;
    
  }

  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x % 700, this.y % 500, this.w, this.h);
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

  class Baliza {
    constructor(x, y, w, h, ctx) {
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.ctx = ctx;
      this.img = new Image();
    }
  
    draw() {
      this.img.src = '/docs/assets/images/orange cone.png';
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