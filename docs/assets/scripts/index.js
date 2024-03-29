window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
    document.getElementById('game-intro').style.display = 'none';
    document.getElementById('game-board').style.display = 'block';
  };

  document.getElementById('restart-button').onclick = () => {
    startGame();
    document.getElementById('game-end').style.display = 'none';
    document.getElementById('game-board').style.display = 'block';
    game.song.play();
  };

  function startGame() {
    let game = new Game();
    game.start();
  }
};
