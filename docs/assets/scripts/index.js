window.onload = () => {
    document.getElementById('start-button').onclick = () => {
      startGame();
      document.getElementById("game-intro").style.display = "none";
      document.getElementById("game-board").style.display = "block";
    };
  
    function startGame() {
      let game = new Game();
      game.start();
    }
  };

