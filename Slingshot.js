class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.07,
            length: 50
        }
        this.pointB = pointB
        this.Slingshot = Constraint.create(options);
        World.add(world, this.Slingshot);
    }

    move(){
      //  Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    
    }

    fly(){
        this.Slingshot.bodyA = null;
    }

    display(){
        if(this.Slingshot.bodyA){
            var pointA = this.Slingshot.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
          //  stroke("cyan")
            fill(127,40,9)
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}