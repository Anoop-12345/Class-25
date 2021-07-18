class Log extends BaseClass {
  //Create a constructor 
  constructor(x, y, height, angle) {
    //Let the width of the log be 20
    super(x,y,20,height,angle);
    //load image
    this.image = loadImage("sprites/wood2.png");
    //Set angle
    Matter.Body.setAngle(this.body,angle);  
    }
    
  };
  