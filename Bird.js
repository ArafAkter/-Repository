class Bird {
  constructor(x, y) {
    var options = {
'restitution' : 0.5,
'friction' : 0.3,
'density' : 6
}
    this.body = Bodies.circle(x, y, 15, options);
    this.width = 30;
    this.height = 30;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
   
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill("yellow");
    ellipse(0, 0, this.width , this.height );
    pop();
  }
};

