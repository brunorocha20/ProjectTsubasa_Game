class Controls {
    constructor(tsubasa) {
      this.tsubasa = tsubasa;
    }
  
    keyboardEvents() {
      window.addEventListener('keydown', (e) => {
        switch (e.code) {
          case 'ArrowUp':
            if (this.tsubasa.y > 20) {
              this.tsubasa.speed -= 2;
            }
            break;
          case 'ArrowDown':
            if (this.tsubasa.y + this.tsubasa.h < 420) {
              this.tsubasa.speed += 2;
            }
            break;
        }
      });
      window.addEventListener('keyup', (e) => {
      this.tsubasa.speed = 0;
    });
  }
}