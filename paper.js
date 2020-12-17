class Paper {
    constructor(radius) {
           var options = {
          'isStatic': false,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }

      this.body = Bodies.circle(200, 200, radius, options);

         this.x = 200;
         this.y = 200;
         this.radius = radius;

      World.add(world, this.body);

    }
   
    display(){

        var pos = this.body.position;

            var angle = this.body.angle;

                push();

                     translate(pos.x, pos.y);

                rotate(angle);


            fill("blue");

            ellipse(0,0,this.radius);


        pop();
           
    }
      

}  