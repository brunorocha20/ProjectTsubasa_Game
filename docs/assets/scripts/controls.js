class Controls {
  constructor(tsubasa) {
    this.tsubasa = tsubasa;
  }

  keyboardEvents() {
    document.addEventListener('keydown', (e) => {
      switch (e.code) {
        case 'ArrowUp':
          if (this.tsubasa.y > 15) {
            this.tsubasa.speed -= 3;
          } else {
            this.tsubasa.speed = 0;
          }
          break;
        case 'ArrowDown':
          if (this.tsubasa.y + this.tsubasa.h < 485) {
            this.tsubasa.speed += 3;
          } else {
            this.tsubasa.speed = 0;
          }
          break;
      }
    });
    document.addEventListener('keyup', (e) => {
      this.tsubasa.speed = 0;
    });
  }
}
