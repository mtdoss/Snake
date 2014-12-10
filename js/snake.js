(function(){
  if(typeof SnakeGame === 'undefined'){
    SnakeGame = {};
  }
  var DIRECTIONS = {
    "N": [-1, 0],
    "E": [0, 1],
    "W": [0, -1],
    "S": [1, 0]
  };
  
  var Snake = SnakeGame.Snake = function() {
    this.dir = "N";
    this.segments = [];
    this.segments.push([5,5]);
  };
  
  Snake.prototype.includes = function(pos){
    var len = this.segments.length;
    var bool = false;
    for (var i = 0; i < len; i++){
      if (this.segments[i][0] === pos[0] && this.segments[i][1] === pos[1]){
        bool = true;
      }
    }
    return bool;
  };

  Snake.prototype.move = function() {
    this.segments.unshift(this.add(this.dir));
    this.segments.pop();
    var snakeExceptHead = this.segments.slice(1);
    if (arrayIncludes(snakeExceptHead, this.segments[0])){
      alert("You lose!");
      restart();
    }
  };
  
  Snake.prototype.add = function(direction) {
    var head = this.segments[0];
    var x = head[0] + DIRECTIONS[direction][0];
    var y = head[1] + DIRECTIONS[direction][1];
    return [x, y];
  };
  
  Snake.prototype.grow = function(){
    this.segments.unshift(this.add(this.dir));
  };
  
  Snake.prototype.turn = function(dir) {
    this.dir = dir;
  };
  
  
})();

arrayIncludes = function(arr, pos) {
  var len = arr.length;
  var bool = false;
  for (var i = 0; i < len; i++) {
    if (arr[i][0] === pos[0] && arr[i][1] === pos[1]) {
      bool = true;
    }
  }
  return bool;
};