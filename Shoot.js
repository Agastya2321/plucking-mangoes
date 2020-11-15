class Shoot{
    constructor(bodyA,pointB){
        var options={
            bodyA: bodyA,
            pointB: pointB,
            stiffness:0.03,
            length: 3,
        }
        this.pointB = pointB;
        this.Shoot = constraint.create(options);  
        World.add(world,this.Shoot);
    }
    attach(body){
        this.Shoot.bodyA = body;
    }
    fly(){
        this.Shoot.bodyA = body;
    }
    display(){
        if(this.Shoot.bodyA){
            var pointA = this.Shoot.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }

}