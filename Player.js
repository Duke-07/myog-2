class Player{
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':0.3,
            'density':1.0,
            'isStatic':true
            
        }
        this.body = Bodies.rectangle(x, y, 50, 50, options);
        this.width = 50;
        this.height = 50;
        this.x=x;
        this.y=y;
        this.image = loadImage("pfront.png");
        World.add(world, this.body);
        
      }
      display(){
        var pos =this.body.position;
        //pos.x=mouseX;
        //pos.y=mouseY;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("red");
        rect(0, 0, this.width, this.height);
        pop();
      }
      move(){
        var pos =this.body.position;
        if(keyDown("a")){
          pos.x=pos.x-5;
        }
        if (keyDown("d")){
          pos.x=pos.x+5;
        }
        if (keyDown("w")){
          pos.y=pos.y-5;
        }
        if (keyDown("s")){
          pos.y=pos.y+5;
        }
      }
}        
        