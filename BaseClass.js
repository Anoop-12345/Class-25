class BaseClass{
  //Create a constructor  
  constructor(x, y, width, height, angle) {
    //assign physical elements    
    var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        //Create a rectangle and give position,width and height
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        //Load Image
        this.image = loadImage("sprites/base.png");
        //Add the body and world into world class
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}