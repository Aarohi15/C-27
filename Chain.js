class Chain{
    constructor(BodyA, BodyB) {
        var options = {
            bodyA:BodyA, bodyB:BodyB, stiffness:0.4, length:40
        }
        this.body = Matter.Constraint.create(options);
        World.add(world, this.body);
      }
      display(){
        var pointA = this.body.bodyA.position;
        var pointB = this.body.bodyB.position;

        push();
        strokeWeight(5);
        line(pointA.x, pointA.y, pointB.x, pointB.y)
        pop();
      }
}