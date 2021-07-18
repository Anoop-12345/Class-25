class Ground {
    //Create a constructor
    constructor(x,y,width,height) {
      //Give no movement to the ground
      var options = {
          isStatic: true
      }
      //Create a rectangular body for the ground with position,width and height
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      //Add the world and body to the World class
      World.add(world, this.body);
    }
    display(){
      //Create a variable for the positions of the ground
      var pos =this.body.position;
      rectMode(CENTER);
      //Give brown color to the ground
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };