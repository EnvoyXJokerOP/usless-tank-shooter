class Shootball {
    constructor(x, y) {
      var options = {
        'density':1.5,
        'friction': 1.0,
        'istatic':true
      };
      this.body = Bodies.rectangle(x, y, 20, 30, options);
      this.width = 50;
      this.height = 50;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      pos.x = mouseX;
      pos.y = mouseY;
      
  
      push();
      
      strokeWeight(3);
      stroke('blue')
      fill('red')
      rectMode(CENTER)
      rect(pos.x, pos.y, this.width, this.height);
      pop();
    };
  };
  