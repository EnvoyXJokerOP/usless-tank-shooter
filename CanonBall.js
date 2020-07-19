class CanonBall{
  constructor(bodyA, bodyB){
      var options = {
          bodyA: bodyA,
          bodyB: bodyB,
          stiffness: 0.04,
          length: 10
      }
     
      this.bodyB = bodyB
      this.canon = Constraint.create(options);
      World.add(world, this.sling);
  }
  attach(body){
      this.canon.bodyA = body;
  }
  
  fly(){
      this.canon.bodyA = null;
  }

  display(){
      
      if(this.sling.bodyA){
          var pointA = this.canon.bodyA.position;
          var pointB = this.canon.bodyB.position;
          push();
          
          

          pop();
      }
  }
  
}