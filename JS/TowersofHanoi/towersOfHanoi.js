const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Game {
  constructor(towers = [[3, 2, 1], [], []]) {
    this.towers = towers;
  }
  
  run(completionCallback) {
    const move = this.move.bind(this);
    this.promptMove(move);
    if (!this.isWon()) {
      this.run(completionCallback);
    } else {
      console.log("You won!");
      completionCallback();
    }
  }
  
  promptMove(callback) {
    this.render();
    
    reader.question('Please choose a start tower: ', function(startTowerIdx) {
      reader.question('Please choose an end tower: ', function(endTowerIdx) {
        const start = parseInt(startTowerIdx);
        const end = parseInt(endTowerIdx);
        
        callback(start, end);    
      });
    });
  }
  
  render() {
    console.log(this.towers);
  }
  
  isValidMove(start, end) {
    if (this.towers[start].length === 0) {
      throw "Invalid move";
    } else if (this.towers[end].length === 0) {
      return true;
    } else if (this.towers[start].slice(-1)[0] < this.towers[end].slice(-1)[0]) {
      return true;
    } else {
      throw "Invalid move";
    }
  }
  
  move(start, end) {
    if (this.isValidMove(start, end)) {
      this.towers[end].push(this.towers[start].pop());
      return true;
    } 
    
    return false;
  }
  
  isWon() {
    if (this.towers[0].length === 0 && this.towers[1].length === 0) {
      return true;
    } else {
      return false;
    }
  }
  
  
}

const game = new Game();
// game.promptMove(() => console.log('callback'));

game.run(() => console.log('callback'));
// game.move(0,1);
// game.render();
// game.move(2,0);
// game.render();
// console.log (game.isValidMove(0, 1));
// console.log (game.isValidMove(1, 0));
