class Controls {
    constructor(tsubasa) {
      this.tsubasa = tsubasa;
    }
  
    keyboardEvents() {
      window.addEventListener('keydown', (e) => {
        switch (e.code) {
          case 'ArrowUp':
            if (this.tsubasa.y > 30) {
              this.tsubasa.y -= 10;
            }
            break;
          case 'ArrowDown':
            if (this.tsubasa.y + this.tsubasa.h < 470) {
              this.tsubasa.y += 10;
            }
            break;
        }
      });
    }
  }