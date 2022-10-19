window.onload = () => {
  let highScore = localStorage.getItem('highscore')
  console.log(highScore)
    document.getElementById('start-button').onclick = () => {
      startGame();
      document.getElementById("game-intro").style.display = "none";
      document.getElementById("game-board").style.display = "block";
    };
    
    document.getElementById('restart-button').onclick = () => {
      startGame();
      document.getElementById("game-end").style.display = "none";
      document.getElementById("game-board").style.display = "block";
    };
  
    function startGame() {
      let game = new Game();
      game.start();
    }
};

