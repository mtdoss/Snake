(function(){
  if(typeof SnakeGame === 'undefined'){
    SnakeGame = {};
  }
  
  var View = SnakeGame.View = function($el) {
    this.board = new SnakeGame.Board();
    this.$el = $el;
    this.handleKeyEvent();
    setInterval(this.step.bind(this), 150);
    // this.step();
  };
  
  View.prototype.handleKeyEvent = function(){
    var that = this;
    $(document).on("keydown", function(event){
      if(event.keyCode === 38){
        that.board.snake.turn('N');
      } else if(event.keyCode === 39){
        that.board.snake.turn('E');
      } else if(event.keyCode === 40){
        that.board.snake.turn('S');
      } else if(event.keyCode === 37){
        that.board.snake.turn('W');
      }
    });
  };
  
  //the <pre> might be what's causing the formatting issues...
  //but even without it, the css file still doesn't do anything
  View.prototype.step = function(){
    var nextMove = this.board.snake.add(this.board.snake.dir);
    if (this.board.appleIncludes(nextMove)){
      this.board.eatApple();
      this.board.snake.grow();
    } else{
      this.board.snake.move();
    }
    this.$el.html("<pre> <div class='board' style='width: 200px; height: 200px; border: 2px solid black;'>" + this.board.render() + "</pre></div>");
  };
  
})();