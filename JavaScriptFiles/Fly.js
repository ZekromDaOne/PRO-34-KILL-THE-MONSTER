class slingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness:0.05,
            length:5
        }
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(matterWorld, this.sling);
    }
    attach(body){
        this.sling.bodyA = body;
    }
    fly(){
        this.sling.bodyA = null;
    }
    // display(){
    //     if(this.sling.bodyA){
    //         var pointA = this.sling.bodyA.position;
    //         var pointB =  this.pointB;
    //         push();
            
    //         // stroke(48, 22, 8)
    //         // if(pointA.x<220){
    //         //     strokeWeight(7);
    //         //     line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
    //         //     line(pointA.x-20, pointA.y, pointB.x+30, pointB.y-3);
    //         // }else{
    //         //     strokeWeight(3);
    //         //     line(pointA.x+25, pointA.y, pointB.x-10, pointB.y);
    //         //     line(pointA.x+25, pointA.y, pointB.x+30, pointB.y-3);
    //         }
    //         pop();
    //     }
    // }
   
}